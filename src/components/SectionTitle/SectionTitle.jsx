

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-4/12  mx-auto text-center my-8
        ">
            <p className="text-yellow-400 font-semibold">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;