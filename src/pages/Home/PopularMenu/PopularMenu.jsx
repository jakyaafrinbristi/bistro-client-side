
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] =useMenu()
    const popular =menu.filter(items=>items.category === 'popular')
    // const [menu,setMenu] =useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //       const popularItems=data.filter(items=>items.category === 'popular')
    //         setMenu(popularItems)})
    // },[])
    return (
        <section className="mb-10">
            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Items'
            >

            </SectionTitle>
          <div className="grid md:grid-cols-2 space-y-4 gap-8 mt-12 mb-10">
          {
               popular.map(item=><MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
            }

          </div>
      
          <div className="text-center">
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                   
                   
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Full Menu </span>
                </a>
            </div>
  
        </section>
    );
};

export default PopularMenu;