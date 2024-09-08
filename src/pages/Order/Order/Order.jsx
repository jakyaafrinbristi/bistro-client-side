import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";



const Order = () => {
    const categories =['desserts','salads','pizza','soup','drinks']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
const [menu] =useMenu()
const desserts =menu.filter(items=>items.category === 'dessert')
const soup =menu.filter(items=>items.category === 'soup')
const salad =menu.filter(items=>items.category === 'salad')
const pizza =menu.filter(items=>items.category === 'pizza')
const drinks =menu.filter(items=>items.category === 'drinks')
    return (
        <div>
            <Cover img={orderCover} title="Order Foods"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>desserts</Tab>
                    <Tab>salads</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>drinks</Tab>
                </TabList>
              
                <TabPanel>
                    <OrderTab
                    items={desserts}
                    ></OrderTab>
                  
                </TabPanel>
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
    );
};

export default Order;