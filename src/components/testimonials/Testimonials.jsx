// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import "@smastrom/react-rating/style.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "./test-style.css"
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://tech-hive-server.vercel.app/addedreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'what our client say'}
                heading={'Testomonial'}
            ></SectionTitle>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper swiperes">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className=" flex flex-col items-center my-16 mx-24 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                            ></Rating>
                            <p className="py-8 text-2xl text-black">{review.review}</p>
                            <p className="text-2xl text-orange-400">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <p>hi i am developer</p>
        </section>
    );
};

export default Testimonials;