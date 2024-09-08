import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 mt-12 mb-10  bg-slate-400 bg-opacity-40 ">
            <SectionTitle
            heading='from our menu'
            subHeading='check it out'
            >
             

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-32">
                    <div>
                        <img src={FeaturedImg} alt="" />

                    </div>
                    <div className="ml-10">
                        <h2>March 20,2024</h2>
                        <h4 className="uppercase">where can i get some?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id accusamus vero itaque quae molestias! Ea nihil dignissimos vitae laborum qui non quos tenetur, labore quasi, fuga quisquam voluptas quia exercitationem! Nemo nulla sunt voluptates recusandae exercitationem eaque quibusdam, esse in hic, natus maiores commodi doloremque aspernatur odit atque accusamus? </p>
                        <div className="mt-5">
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                   
                   
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Full Menu </span>
                </a>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
};

export default Featured;