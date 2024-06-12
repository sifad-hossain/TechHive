
// import { useQuery } from '@tanstack/react-query'
// import Loader from '../../../components/Shared/Loader'
// import { getAllProducts } from '../../../api/products'
import ProductQueueRow from '../../../components/form/ProductQueueRow'
import useProducts from '../../../hooks/useProducts'

function sortByStatus(a, b) {
    const statusOrder = { Pending: 0, Rejected: 1, Approved: 2 }
    return statusOrder[a.isApproved] - statusOrder[b.isApproved]
}

const ProductQueue = () => {
    const [product, refetch, isLoading] = useProducts()
    // const {
    //     refetch,
    //     data: products = [],
    //     isLoading,
    // } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => await getAllProducts(),
    // })
    if (isLoading) return <p>loading</p>
    console.log(product.sort(sortByStatus))
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
                                        {product &&
                                            product
                                                .sort(sortByStatus)
                                                .map(product => (
                                                    <ProductQueueRow
                                                        key={product?._id}
                                                        product={product}
                                                        refetch={refetch}
                                                    />
                                                ))}
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