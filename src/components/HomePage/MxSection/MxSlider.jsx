import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './MxSection.module.css';
import image1 from './img/mx1.png';
import image2 from './img/mx2.png';
import image3 from './img/mx3.png';
import arrow from './img/Union.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export default () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <Swiper
            loop
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            centeredSlides={true}
            className={styles.swiper__container}
            slideActiveClass={'swiper-slide-active'}
        >
            <SwiperSlide className={styles.swiper__slide}>
                <Link to="/gucci-react/shoes/57">
                    <img
                        loading="lazy"
                        className={styles.swiper__img}
                        src={image1}
                        alt=""
                    />
                </Link>
                <div className={styles.item_description}>
                    <p className={styles.item_name}>
                        Cashmere jacket with label detail
                    </p>
                    <p className={styles.item_price}>£ 2950</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <Link to="/gucci-react/shoes/58">
                    <img
                        loading="lazy"
                        className={styles.swiper__img}
                        src={image2}
                        alt=""
                    />
                </Link>
                <div className={styles.item_description}>
                    <p className={styles.item_name}>
                        GG canvas goose down coat
                    </p>
                    <p className={styles.item_price}>£ 3470</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <Link to="/gucci-react/shoes/56">
                    <img
                        loading="lazy"
                        className={styles.swiper__img}
                        src={image3}
                        alt=""
                    />
                </Link>
                <div className={styles.item_description}>
                    <p className={styles.item_name}>
                        Equestrian print cotton coat
                    </p>
                    <p className={styles.item_price}>£11,300</p>
                </div>
            </SwiperSlide>
            <div className={styles.swiper__navigation}>
                <img
                    src={arrow}
                    className={styles.prevslide}
                    ref={navigationPrevRef}
                />
                <img
                    src={arrow}
                    className={styles.nextslide}
                    ref={navigationNextRef}
                />
            </div>
        </Swiper>
    );
};
