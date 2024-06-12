import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";


const ReportedProducts = () => {

    const [product, isLoading, refetch] = useProducts();
    const axiosPublic = useAxiosPublic()
    if (isLoading) return <p>Loading....</p>

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/products/${id}`)
                    .then(res => {
                        console.log(res);
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
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
                                            Action
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            View Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.filter(p => p.downVote.length).map(tech => (
                                        <tr key={tech._id}>

                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{tech?.product_name}</p>
                                            </td>

                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <div className='space-x-1'>
                                                    <td
                                                        onClick={() => handleDelete(tech._id)}
                                                        className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <MdDeleteForever size={28} className="text-red-500 bg-white"></MdDeleteForever>
                                                    </td>
                                                </div>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <button className='bg-blue-200 text-blue-900 px-2 py-1 rounded-lg w-28'>
                                                    <Link to={`/productDetail/${tech?._id}`}> View Product</Link>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportedProducts