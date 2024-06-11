import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../../firebase/Firbase.config'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
export const AuthContext = createContext(null)

//Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic()

    const [user, setUser] = useState(null)
    // console.log(user);
    const [loading, setLoading] = useState(true);
    console.log(loading);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //updated user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

      // Get token from server
  const getToken = async email => {
    const { data } = await axios.post(
        "http://localhost:4000/jwt",
      { email },
      { withCredentials: true }
    )
    localStorage.setItem('access-token', data.token)
    return data
  }

  // save user
  const saveUser = async user => {
    const currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'Verified',
    }
    const { data } = await axios.put(
      `http://localhost:4000/user`,
      currentUser
    )
    return data
  }


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Google Login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Github Provider
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //LogOut
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

   // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if (currentUser) {
        getToken(currentUser.email)
        saveUser(currentUser)
      }
      else{
        localStorage.removeItem('access-token')
      }
      setLoading(false)

    })
    return () => {
      return unsubscribe()
    }
  }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
        user,
        setUser,
        loading,

    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;