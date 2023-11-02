import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className=' bg-fixed featured-item text-white pt-8 my-20 '>
            <SectionTitle
                subheading="Check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 2023</p>
                    <p className='uppercase'>
                        where i can get some?
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit earum fuga beatae reprehenderit excepturi, rem animi exercitationem, vitae blanditiis voluptatibus corrupti iusto fugit cum harum dolorem, sit deserunt quia dolore!</p>
                    <button className="btn btn-outline  border-0 border-b-4 mt-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;