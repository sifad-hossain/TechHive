import { useContext } from "react";
import { AuthContext } from "../../../../components/authProvider/AuthProvider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useProduct from "../../../../hooks/useProduct";
import { Link } from "react-router-dom";
import ProductUpdated from "../../../../components/form/ProductUpdated";

const MyProducts = () => {
  const { user } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const [tech, refetch] =  useProduct()

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


      <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Products</h2>

          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {tech.length}
          </span>
        </div>

        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200 overflow-x-auto'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-700 '
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-700 '
                      >
                        <button className='flex items-center gap-x-2'>
                          <span>Votes</span>
                        </button>
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-700 '
                      >
                        Status
                      </th>

                      <th className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-700 '>
                        Updated
                      </th>
                      <th
                        className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-700 '>
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                    {
                      tech?.map(product =>
                        <tr key={product?._id}>
                          <td className='px-4 py-4 text-sm text-gray-900 font-medium   whitespace-nowrap'>
                            {product?.product_name}
                          </td>

                          <td className='px-4 py-4 text-lg text-gray-900   whitespace-nowrap'>
                            {product?.upVote?.length}
                          </td>
                          <td className='px-4 py-4 text-sm font-medium  whitespace-nowrap'>
                            <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                              <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                              <h2 className='text-sm font-bold '>{product?.isApproved}</h2>
                            </div>
                          </td>
                          <Link to={`/productUpdate/${product?._id}`} className='px-4 py-4 text-sm whitespace-nowrap'>
                            <FaEdit  size={22} className="text-cyan-500 bg-white"></FaEdit>
                          </Link>

                          <td
                            onClick={() => handleDelete(product._id)}
                            className='px-4 py-4 text-sm whitespace-nowrap'>
                            <MdDeleteForever size={28} className="text-red-500 bg-white"></MdDeleteForever>
                          </td>

                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MyProducts;