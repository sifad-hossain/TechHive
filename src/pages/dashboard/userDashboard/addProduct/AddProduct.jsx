import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../components/authProvider/AuthProvider";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    console.log(errors);
    const { user } = useContext(AuthContext)
    const [tags, setTags] = useState([]);
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.product_image[0]);
        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            console.log(response.data.data.display_url);
            const product = {
                product_name: data.product_name,
                product_image: response.data.data.display_url,
                description: data.description,
                user_name: user?.displayName,
                user_image: user?.photoURL,
                user_email: user?.email,
                tag_input: tags,
                external_Link: data.external_Link,
                upVote: [],
                downVote: [],
                isFeatured: false,
                isReported: false,
                isApproved: 'Pending',
            }
            console.log(product);

            const productItem = await axiosPublic.post('/products', product)
            console.log(productItem.data);
            if (productItem.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.product_name} is added to the techProduct.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Image upload failed:', error);
        }
    }

    return (
        <>
            
                <div className="">
                    <div className="pt-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex gap-10 mb-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </div>
                                    <input
                                        {...register("product_name", { required: true })}
                                        type="text"
                                        required
                                        placeholder="Product Name"
                                        className="input input-bordered font-medium w-full" />
                                </label>

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Product Image</span>
                                    </div>


                                    <input
                                        type="file"
                                        {...register('product_image', { required: true })}
                                        required
                                        placeholder="Product Image"
                                        className="input input-bordered font-medium w-full" />
                                </label>
                            </div>


                            <div className="flex gap-10 mb-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">User Name</span>
                                    </div>
                                    <input
                                        defaultValue={user?.displayName}
                                        {...register("user_name")}
                                        className="input input-bordered font-medium w-full" />
                                </label>


                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">User Image</span>
                                    </div>
                                    <input
                                        defaultValue={user?.photoURL}
                                        {...register("user_image")}
                                        className="input input-bordered font-medium w-full" />
                                </label>
                            </div>

                            <div className="flex gap-10 mb-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">User Email</span>
                                    </div>
                                    <input
                                        defaultValue={user?.email}
                                        {...register("user_email")}
                                        className="input input-bordered font-medium w-full" />
                                </label>


                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">External Link</span>
                                    </div>
                                    <input
                                        {...register("external_Link", { required: true })}
                                        type="text"
                                        id="link"
                                        required
                                        placeholder="Product_Link"
                                        className="input input-bordered font-medium w-full" />
                                </label>

                            </div>

                            <div className="mb-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Tag</span>
                                    </div>
                                    <pre>{JSON.stringify(tags)}</pre>
                                    <TagsInput
                                        {...register("tag_input")}
                                        value={tags}
                                        onChange={setTags}

                                        name="tag_input"
                                        placeHolder="Tags"
                                        className="input input-bordered font-medium w-full"
                                    />
                                    <em>press enter to add new tag</em>
                                </label>
                            </div>


                            <div className=" mb-8">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </div>
                                    <textarea
                                        {...register("description", { required: true })}
                                        type="text"
                                        required
                                        placeholder="Description"
                                        className="textarea textarea-bordered h-24" />
                                </label>
                            </div>



                            <button className="btn w-full bg-cyan-600 text-white text-xl font-semibold">
                                Add Product
                            </button>
                        </form>
                    </div>
                </div>
        </>
    );
};

export default AddProduct;