import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Container from "../../pages/shared/container/Container";
import { useLoaderData } from "react-router-dom";


const ProductUpdated = () => {
    const { register, handleSubmit } = useForm()

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const tech = useLoaderData() || {}
        console.log(tech);

    const { user } = useAuth()
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (tech.tag_input) {
            setTags(tech.tag_input);
        }
    }, [tech]);

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onSubmit = async (data) => {
        const product = {
            product_name: data.product_name,
            // product_image: response.data.data.display_url,
            product_image: data.product_image,
            description: data.description,
            user_name: user?.displayName,
            user_image: user?.photoURL,
            user_email: user?.email,
            tag_input: tags,
            external_Link: data.external_Link
        }
        console.log(product);
    }

    const { product_name, description, external_Link } = tech || [];

    return (
        <>
            <Container>
                <div className="">
                    <div className="pt-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex gap-10 mb-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </div>
                                    <input
                                        {...register("product_name")}
                                        type="text"
                                        defaultValue={product_name}
                                        placeholder="Product Name"
                                        className="input input-bordered font-medium w-full" />
                                </label>

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">Product Image</span>
                                    </div>


                                    <input
                                        type="file"
                                        {...register('product_image')}

                                        onChange={handleFileChange}
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
                                        readOnly
                                        className="input input-bordered font-medium w-full" />
                                </label>


                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">User Image</span>
                                    </div>
                                    <input
                                        defaultValue={user?.photoURL}
                                        readOnly
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
                                        readOnly
                                        {...register("user_email")}
                                        className="input input-bordered font-medium w-full" />
                                </label>


                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-semibold">External Link</span>
                                    </div>
                                    <input
                                        {...register("external_Link")}
                                        type="text"
                                        id="link"
                                        required
                                        defaultValue={external_Link}
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
                                        {...register("description")}
                                        type="text"
                                        required
                                        defaultValue={description}
                                        placeholder="Description"
                                        className="textarea textarea-bordered h-24" />
                                </label>
                            </div>



                            <button className="btn w-full bg-cyan-600 text-white text-xl font-semibold">
                                Updated Product
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProductUpdated;