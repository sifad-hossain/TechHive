/* eslint-disable no-dupe-keys */

import ReactStars from "react-rating-stars-component";
import useAuth from '../../hooks/useAuth'
import Container from "../../pages/shared/container/Container";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const ReviewSection = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [ratingValue, setRatingValue] = useState(0);

    const handleRatingChange = (newValue) => {
        console.log('hi');
        setRatingValue(newValue);
        console.log(`Example 2: new value is ${newValue}`);
      };

    const secondExample = {
        size: 50,
        count: 10,
        color: "#FFFFFF",
        activeColor: "",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };

    const thirdExample = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 3,
        color: "#FFFFFF",
        border: "#F5723A",
        activeColor: "#F23534",
        onChange: newValue => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    const handleReview = async e => {
        e.preventDefault();
        const form = e.target;
        const reviews = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            review: form.review?.value,
            rating: ratingValue,
        };
        console.log(reviews);
        try {
            const reviewAdded = await axiosPublic.post('/addedreview', reviews)
            console.log(reviewAdded.data);
            if (reviewAdded.data.insertedId) {
             
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `your review is added to the techProduct.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
        } catch (error) {
            //some code edited
        }
        // You can now use the `review` object as needed
    };

    return (
        <>
            <Container>
                <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl '>
                    Write your comment about this product?
                </h1>
                <h1 className='text-lg font-medium text-gray-800  lg:text-lg mb-8 mt-3 '>
                    Your email address will not be published. Required fields are marked *
                </h1>
                {/* <div className="App ">
                    <h4>Your Rating</h4>
                    <label htmlFor="rating">
                        <ReactStars classNames="border-2 border-[#F5723A]" {...secondExample} />
                        <h4></h4>
                        <ReactStars  {...thirdExample} />
                    </label>
                    <input type="text"
                        id='rating'
                        name='rating'
                        required />
                </div> */}
                {/* Review Section */}



                <div className='container  '>
                    <div className=' md:flex md:items-center md:justify-between  '>

                    </div>

                    {/* Review From */}
                    <div className='container  '>
                        <div className='lg:w-1/2 md:w-2/3 '>
                            <form onSubmit={handleReview} className='flex flex-wrap -m-2'>
                                <div className="App ">
                                    <h4>Your Rating</h4>

                                        <ReactStars type='text' id='rating' name='rating' classNames="border-2 border-[#F5723A]" {...secondExample} onChange={handleRatingChange} />
                                        <h4></h4>
                                        <ReactStars  type='text' id='rating' name='rating' {...thirdExample} onChange={handleRatingChange}/>
                                </div>
                                <div className='p-2 w-1/2'>
                                    <div className='relative'>
                                        <label
                                            htmlFor='name'
                                            className='leading-7 text-sm text-gray-600'
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            value={user?.displayName || ''}
                                            disabled
                                            id='name'
                                            name='name'
                                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                        />
                                    </div>
                                </div>
                                <div className='p-2 w-1/2'>
                                    <div className='relative'>
                                        <label
                                            htmlFor='email'
                                            className='leading-7 text-sm text-gray-600'
                                        >
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            value={user?.email || ''}
                                            disabled
                                            id='email'
                                            name='email'
                                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                        />
                                    </div>
                                </div>
                                <div className='p-2 w-full'>
                                    <div className='relative'>
                                        <label
                                            htmlFor='review'
                                            className='leading-7 text-sm text-gray-600'
                                        >
                                            Your Review*
                                        </label>
                                        <textarea
                                            type="text"
                                            id='review'
                                            name='review'
                                            required
                                            placeholder="Your review"
                                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='p-2 mb-10 w-full'>
                                    <button
                                        disabled={!user}
                                        type='submit'
                                        className='relative mx-1  block text-lg group disabled:cursor-not-allowed'
                                    >
                                        <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                                            <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                                            <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                                            <span className='relative'>Submit</span>
                                        </span>
                                        <span
                                            className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                                            data-rounded='rounded-lg'
                                        ></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ReviewSection;