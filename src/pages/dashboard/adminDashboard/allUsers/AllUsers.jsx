import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data;
    }
  })

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8 '>

        <div className='py-8 '>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4  overflow-x-auto '>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden  '>
              <table className='min-w-full 0 leading-normal '>
                <thead className="">
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      No.
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    {/* <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th> */}

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => <>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>### {user?.role}</p>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td> */}

                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                      {user.role === 'admin' ? 'Admin' : <button
                        onClick={() => handleMakeAdmin(user)}
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                      >
                        <span
                          aria-hidden='true'
                          className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Update Role</span>
                      </button>}

                      </td>
                    </tr>
                  </>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AllUsers;