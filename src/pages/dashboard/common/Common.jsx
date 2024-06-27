import useRole from "../../../hooks/useRole";

const Common = () => {
    const [role] = useRole()
    return (
        <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16 '>
            <p className="text-2xl font-bold">{`Welcome to ${role?.toUpperCase()} Dashboard.`}</p>
            <p className='font-light text-neutral-500 mt-2'>Navigate through left sidebar menu.</p>
        </div>
    );
};

export default Common;