import { Link } from 'react-router-dom';
import styles from './ArrivalsSection.module.css';
import SwiperArrivals from './SwiperArrivals';

import OneItem from '../../OneItem/OneItem';

import item1 from './img/item1.png';
import item1place from './img/item1placeholder.jpg';
import item2 from './img/item2.png';
import item2place from './img/item2placeholder.jpg';
import item3 from './img/item3.png';
import item3place from './img/item3placeholder.jpg';
import item4 from './img/item4.png';
import item4place from './img/item4placeholder.jpg';

function ArrivalsSection() {
    return (
        <section className="container">
            <div className={styles.arrivals}>
                <div className={styles.arrivals__title}>
                    <div className={styles.arrivals__title_text}>
                        New arrivals
                    </div>
                    <Link
                        to="/gucci-react/not-made"
                        className={styles.arrivals__title_link}
                    >
                        View all
                    </Link>
                </div>
                <div className={styles.arrivals__items}>
                    <OneItem
                        id="49"
                        img={item1}
                        img2={item1place}
                        name="Men's 'Gucci' bag"
                        price="2120"
                    />
                    <OneItem
                        id="50"
                        img={item2}
                        img2={item2place}
                        name="GG canvas goose down jacket"
                        price="2370"
                    />
                    <OneItem
                        id="51"
                        img={item3}
                        img2={item3place}
                        name="GM 'Gucci' boots"
                        price="1770"
                    />
                    <OneItem
                        id="52"
                        img={item4}
                        img2={item4place}
                        name="Men's 'GGH T-Shirt"
                        price="270"
                    />
                </div>
                <div className={styles.arrivals__swiper}>
                    <SwiperArrivals />
                </div>
            </div>
        </section>
    );
}

export default ArrivalsSection;
