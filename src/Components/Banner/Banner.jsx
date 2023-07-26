
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className=' mx-5 my-4'>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper rounded-3xl"
            >
                <SwiperSlide data-hash="slide1">
                <img src="https://i.ibb.co/cJDTCgM/2986531-1.png" alt="banner1" border="0"/>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                <img src="https://i.ibb.co/NZR0M5C/2986531.png" alt="banner2" border="0"/>
                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                <img src="https://i.ibb.co/cJDTCgM/2986531-1.png" alt="banner3" border="0"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;