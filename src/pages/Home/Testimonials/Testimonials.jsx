import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
   useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data))
   },[])
    return (
        <section className="my-20">
            <SectionTitle
                heading='testimonials'
                subHeading='what our client say'
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-16 flex flex-col items-center ">
                            <Rating className="pb-5"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                      <div className="pb-5 text-4xl">     <FaQuoteLeft /></div>

                          

                            <p className="mb-5">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </section>
    );
};

export default Testimonials;