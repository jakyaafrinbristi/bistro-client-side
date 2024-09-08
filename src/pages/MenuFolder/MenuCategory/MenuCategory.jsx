import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
             <div className="grid md:grid-cols-2 space-y-4 gap-8 mb-10 my-16">
             {
               items.map(item=><MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
            }

          </div>
          <div className="mt-5">
                        <Link to={`/order/${title}`}className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                   
                   
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Full Menu </span>
                </Link>
                        </div>
            
        </div>
    );
};

export default MenuCategory;