

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../container/Container";
import ReviewSection from "../../../components/ReviewSection/ReviewSection";
import Testimonials from "../../../components/testimonials/Testimonials";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useProducts from "../../../hooks/useProducts";


const ProductDetail = () => {

  const [service, setService] = useState({})
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const [product, isLoading, refetch ] = useProducts()
  const { id } = useParams()
  useEffect(() => {
    fetch('https://tech-hive-server.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        const products = data.find(item => item?._id == id)
        setService(products)
        console.log(data, id);
      })
  }, [id]);



  //onclick upvote button
  const updateVote = async (id, status, upvote, downvote, voterId) => {
    const data = await axiosPublic.patch(`/products/vote/${id}`, {
      status,
      upvote,
      downvote,
      voterId,
    })
    return data
  }

  // UpVote OnClick
  const handleUpvote = async (id, status, upvote, downvote, voterId) => {
    try {
      await updateVote(id, status, upvote, downvote, voterId)
      toast.success('Successfully UpVoted!')
      refetch()
    } catch (err) {
      console.log(err)
    }
  }


  const { product_name, description, product_image, externalLink, _id, upVote, downVote, tag_input  } = service;
  return (
    <>
      <Container>
        <section className='bg-white '>
          <div className='container px-6 py-10 mx-auto'>
            <div className='lg:flex lg:items-center'>
              <div className='hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center'>
                <img
                  className='w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full'
                  src={product_image}
                  alt=''
                />
              </div>
              <div className='w-full space-y-12 lg:w-1/2  '>

               <div className="flex ml-60 gap-10">
                 {/* UpVote && DownVote */}
                 <div className='flex items-center  text-gray-700 gap-2'>
                  <button
                    disabled={!user || (upVote && upVote?.includes(user?.email))}
                    onClick={() =>
                      handleUpvote(
                        _id,
                        true,
                        upVote,
                        downVote,
                        user?.email
                      )
                    }
                    className='relative block text-lg group disabled:cursor-not-allowed'
                  >
                    <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                      <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                      <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                      <span className='relative flex justify-between gap-2'>
                        <AiFillCaretUp className='text-2xl' />
                        {upVote?.length}
                      </span>
                    </span>
                    <span
                      className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                      data-rounded='rounded-lg'
                    ></span>
                  </button>
                  <button
                    disabled={!user || (downVote && downVote.includes(user?.email))}
                    onClick={() =>
                      handleUpvote(
                        _id,
                        false,
                        upVote,
                        downVote,
                        user?.email
                      )
                    }
                    className='relative block text-lg group disabled:cursor-not-allowed'
                  >
                    <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                      <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                      <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>

                      <span className='relative flex justify-between gap-2'>
                        <AiFillCaretDown className='text-2xl' />
                        {downVote?.length}
                      </span>
                    </span>
                    <span
                      className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                      data-rounded='rounded-lg'
                    ></span>
                  </button>
                </div>
                {/* end vote */}

                <div className='flex justify-end gap-3 mb-5'>
                  <a
                    href={externalLink}
                    // href='externalLink'
                    target='_blank'
                    className='relative block text-lg group disabled:cursor-not-allowed'
                  >
                    <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                      <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                      <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                      <span className='relative'>visit product</span>
                    </span>
                    <span
                      className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                      data-rounded='rounded-lg'
                    ></span>
                  </a>
                </div>
               </div>
                <div>
                  <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl '> {product_name} <br /> </h1>
                  <p className='mt-4 mb-5 text-gray-500 xl:mt-6 '> {description} </p>
                  <ul className="flex gap-3">Tags:
                    {
                      tag_input?.map((tag, index) =>
                        <li key={index}>{tag}</li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
            <hr className='my-12 border-gray-200 dark:border-gray-700' />
          </div>
          <hr className=' border-gray-200 dark:border-gray-700' />
          {/* review section */}
          <ReviewSection></ReviewSection>
          <Testimonials></Testimonials>
        </section>
      </Container>
    </>
  );
};

export default ProductDetail;