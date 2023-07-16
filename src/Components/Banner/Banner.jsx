
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
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
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">
                <img src="https://i.ibb.co/gM7RkG5/banner1.jpg" alt="banner1" border="0"/>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                <img src="https://i.ibb.co/xLS2KHQ/banner2.jpg" alt="banner2" border="0"/>
                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                <img src="https://i.ibb.co/wrkBPY2/banner3.jpg" alt="banner3" border="0"/>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Banner;