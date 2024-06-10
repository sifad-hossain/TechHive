

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../container/Container";
import ReviewSection from "../../../components/ReviewSection/ReviewSection";


const ProductDetail = () => {

  const [service, setService] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => {
        const products = data.find(item => item?._id == id)
        setService(products)
        console.log(data, id);
      })
  }, [id]);
  const { product_name, description, product_image, externalLink } = service;
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
              <div className='w-full space-y-12 lg:w-1/2 '>


                <div className='flex justify-end gap-3 mb-5'>
                  <a
                    href={externalLink}
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


                <div>

                  <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl '>
                    {product_name} <br />
                  </h1>

                  <p className='mt-4 mb-5 text-gray-500 xl:mt-6 '>
                    {description}
                  </p>



                </div>

              </div>


            </div>

            <hr className='my-12 border-gray-200 dark:border-gray-700' />
          </div>


          <hr className=' border-gray-200 dark:border-gray-700' />

          <ReviewSection></ReviewSection>
        </section>
      </Container>
    </>
  );
};

export default ProductDetail;