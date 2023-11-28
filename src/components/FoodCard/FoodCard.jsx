import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-80 bg-base-100 shadow-xl mt-10 my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <figure><img src={image} alt="Shoes" /></figure>

            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions items-center space-x-8">
                    <p className='text-2xl font-bold'>${price}</p>
                    <button className="btn btn-error text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;