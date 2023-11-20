import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Shop | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle
                subheading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* offered items */}
            <MenuCategory
                items={offered}
            ></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
                items={dessert}
                title={"Dessert"}
                img={menuImg2}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={menuImg2}
            ></MenuCategory>
        </div>

    );
};

export default Menu;