import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Container from "../shared/container/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";


const AllProducts = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [product, isLoading, refetch] = useProducts();


    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')



    useEffect(() => {
        const getData = async () => {
            const res = await axiosPublic.get(`/products-searching?search=${search}`)
            product(res)
        }
        getData()
    }, [axiosPublic, product, search])

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }
    console.log(search)


    const allProducts = product.filter(p => p.isApproved === 'Approved')

    console.log(allProducts);

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



    return (
        <>
            <Container>

                <div className='flex flex-col justify-center items-center max-w-2xl mx-auto md:px-8 pt-16 '>
                    {/* form Section */}



                    <form onSubmit={handleSearch} className='flex flex-col items-center w-full mb-4 md:flex-row'>
                        <input
                            // placeholder='Search by tags'
                            // value={searchValue}
                            // onChange={e => setSearchValue(e.target.value)}
                            // required=''
                            type='text'
                            name="search"
                            className='flex-grow w-full h-14 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-blue-400 focus:outline-none '
                        />




                        <button
                            // onClick={e => handleSearch(e, searchValue)}
                            type='submit'
                            value='seacrh'
                            className='relative  inline-flex items-center justify-center text-lg group disabled:cursor-not-allowed'
                        >
                            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                                <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                                <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                                <span className='relative'>Search</span>
                            </span>
                            <span
                                className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                                data-rounded='rounded-lg'
                            ></span>
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-3  mt-10 -z-10">

                    {
                        allProducts.map(tech =>
                            <div key={tech?._id} className="card space-y-5 mb-10 card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={tech?.product_image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between">
                                        <Link to={`/productDetail/${tech?._id}`} className="card-title">{tech?.product_name}</Link>


                                        {/* UpVote && DownVote */}
                                        <div className='flex items-center mt-4 text-gray-700 gap-2'>
                                            <button
                                                disabled={!user || (tech?.upVote && tech?.upVote?.includes(user?.email))}
                                                onClick={() =>
                                                    handleUpvote(
                                                        tech._id,
                                                        true,
                                                        tech.upVote,
                                                        tech.downVote,
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
                                                        {tech?.upVote?.length}
                                                    </span>
                                                </span>
                                                <span
                                                    className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                                                    data-rounded='rounded-lg'
                                                ></span>
                                            </button>
                                            <button
                                                disabled={!user || (tech.downVote && tech?.downVote.includes(user?.email))}
                                                onClick={() =>
                                                    handleUpvote(
                                                        tech._id,
                                                        false,
                                                        tech.upVote,
                                                        tech.downVote,
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
                                                        {tech?.downVote?.length}
                                                    </span>
                                                </span>
                                                <span
                                                    className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                                                    data-rounded='rounded-lg'
                                                ></span>
                                            </button>
                                        </div>
                                        {/* end vote */}
                                    </div>
                                    <ul className="flex gap-3">
                                        {
                                            //akta map tin ta jinis return kore(object, number(index), array)
                                            //akta object ke ui te show korte hole dot(.) die dekhate hoy example: tech.product_name
                                            //array ke shorasori dekhano jay shodumatro map ar modh de je parameter ta nei sei ta dile hoy 
                                            // example: tech.tag_input(object)?.map((tag(array), index) =>
                                            // <li>{tag}</li>
                                            // )

                                            tech.tag_input?.map((tag, index) =>
                                                <li key={index}>{tag}</li>
                                            )
                                        }
                                    </ul>

                                </div>
                            </div>
                        )
                    }
                </div>
            </Container>
        </>
    );
};

export default AllProducts;