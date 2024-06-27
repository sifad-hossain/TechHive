/* eslint-disable react/prop-types */


const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-34/12 mx-auto text-center my-8 ">
            <p className="text-black font-medium text-[28px] mb-2">---{subHeading}---</p>
            <h3 className="text-xl  border-y-4 py-4">{heading}</h3>

        </div>
    );
};

export default SectionTitle;