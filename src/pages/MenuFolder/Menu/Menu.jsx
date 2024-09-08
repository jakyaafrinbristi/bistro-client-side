import menuImg from '../../../assets/menu/banner3.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] =useMenu()
    const desserts =menu.filter(items=>items.category === 'dessert')
    const soup =menu.filter(items=>items.category === 'soup')
    const salad =menu.filter(items=>items.category === 'salad')
    const pizza =menu.filter(items=>items.category === 'pizza')
    const offered =menu.filter(items=>items.category === 'offered')
    return (  
        <div>
           <Cover img={menuImg} title='Our Menu'></Cover>
           {/* main cover */}
           <SectionTitle
                heading='Todays Offer'
                subHeading="Don't miss"
            >

            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts}
                title="desserts"
                img={dessertImg}
                >

            </MenuCategory>
            <MenuCategory items={soup}
                title="soup"
                img={soupImg}
                >

            </MenuCategory>
            <MenuCategory items={salad}
                title="salad"
                img={saladImg}
                >

            </MenuCategory>
            <MenuCategory items={pizza}
                title="pizza"
                img={pizzaImg}
                >

            </MenuCategory>
         
        </div>
    );
};

export default Menu;