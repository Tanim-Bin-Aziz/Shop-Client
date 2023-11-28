import { useState } from 'react';
import orderCoverImg from '../../assets/shop/order.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className='text-center mt-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab
                            items={salad}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default Order;