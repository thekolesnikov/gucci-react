import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './ArrivalsSection.module.css';
import OneItem from '../../OneItem/OneItem';

import item1 from './img/item1.png';
import item1place from './img/item1placeholder.jpg';
import item2 from './img/item2.png';
import item2place from './img/item2placeholder.jpg';
import item3 from './img/item3.png';
import item3place from './img/item3placeholder.jpg';
import item4 from './img/item4.png';
import item4place from './img/item4placeholder.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperArrivals() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop
            scrollbar={{ draggable: true, el: styles.swiper_scrollbar }}
            effect={'fade'}
            className={styles.swiper__container}
        >
            <SwiperSlide className={styles.swiper__slide}>
                <OneItem
                    id="49"
                    img={item1}
                    img2={item1place}
                    name="Men's 'Gucci' bag"
                    price="2120"
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <OneItem
                    id="50"
                    img={item2}
                    img2={item2place}
                    name="GG canvas goose down jacket"
                    price="2370"
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <OneItem
                    id="51"
                    img={item3}
                    img2={item3place}
                    name="GM 'Gucci' boots"
                    price="1770"
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <OneItem
                    id="52"
                    img={item4}
                    img2={item4place}
                    name="Men's 'GGH T-Shirt"
                    price="270"
                />
            </SwiperSlide>
        </Swiper>
    );
}
