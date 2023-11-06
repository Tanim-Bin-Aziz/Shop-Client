import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-12 text-center'>
            <SectionTitle
                subheading="Check it out"
                heading="From Our Menu"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mb-4'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
        </section>
    );
};

export default PopularMenu;