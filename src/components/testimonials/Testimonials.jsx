
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect,  useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/addedreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className="my-20">
         

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
               
                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className=" flex flex-col items-center my-16 mx-24 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            ></Rating>
                            <p className="py-8 text-2xl text-orange-500">{review.review}</p>
                            <p className="text-2xl text-orange-400">{review.name}</p>
                        </div>
                    </SwiperSlide>)                    
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;