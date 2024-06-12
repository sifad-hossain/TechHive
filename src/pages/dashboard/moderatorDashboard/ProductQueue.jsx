import { Link, useParams } from 'react-router-dom'
import useProducts from '../../../hooks/useProducts'
import { toast } from 'react-toastify'
import {  useState } from 'react'
import axios from 'axios'

const ProductQueue = () => {
    const [product, refetch, isLoading] = useProducts()
    
    const [featured, setFeatured] = useState('')
    const {id} = useParams()
    if (isLoading) return <p>loading</p>
    console.log(product)

    const featuredHandler = async (id) => {
        console.log('feauted', id);
        const {data} = await axios.patch(
            `http://localhost:4000/tech/${id}`, { isFeatured: true }
        )
        setFeatured(data)
        toast.success('Product is featured now')
        }
        console.log(featured);

    return (
        <>
            {product && Array.isArray(product) && product.length > 0 ? (
                <div className='container mx-auto px-4 sm:px-8'>
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead>
                                        <tr>
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
                                                Details
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Featured
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.map(p =>
                                                <>

                                                    <tr key={p._id}>

                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>{p?.product_name}</p>
                                                        </td>

                                                        <button className='bg-blue-200 text-blue-900 rounded-lg px-2 py-3 mt-10'>
                                                            <Link to={`/productDetail/${p?._id}`}> View Product</Link>
                                                        </button>

                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {/* {p?.isFeatured ? 'True' : 'False'} */}
                                                                {p?.isFeatured ? 'true' : 'false'} 
                                                            </p>
                                                        </td>
                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {p?.isApproved}
                                                            </p>
                                                        </td>

                                                        <td className='px-5 space-y-1 py-5 border-b border-gray-200 bg-white text-sm '>
                                                            <div className='space-x-1'>
                                                                <button
                                                                    // onClick={() => approveHandler(product._id, true)}
                                                                    className='bg-green-200 text-green-900 px-2 py-1 rounded-lg w-28 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500'
                                                                    disabled={p?.isApproved === 'Approved'}
                                                                >
                                                                    Accept
                                                                </button>


                                                                <button
                                                                    // onClick={() => approveHandler(product._id, false)}
                                                                    className='bg-red-200 text-red-900 px-2 py-1 rounded-lg w-28 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500'
                                                                    disabled={p?.isApproved === 'Rejected'}
                                                                >
                                                                    Reject
                                                                </button>



                                                            </div>
                                                            <div className='space-x-1'>
                                                                <button
                                                                    onClick={() => featuredHandler(p._id, !p?.isFeatured)}
                                                                    className='bg-green-200 text-green-900 px-2 py-1 rounded-lg w-28 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-200'
                                                                >
                                                                    {p?.isFeatured ? 'Revert' : 'Make Featured'}
                                                                </button>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <p>No Product Available🥴</p>
                </>
            )}
        </>
    )
}

export default ProductQueue