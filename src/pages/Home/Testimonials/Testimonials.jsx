import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";




const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="m-24">

            <SectionTitle
                subheading="What our client say"
                heading={'Testimonials'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(reviews => <SwiperSlide
                        key={reviews._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                            <p className="py-8">
                                {reviews.details}
                            </p>
                            <h3 className="text-2xl text-orange-500">{reviews.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;