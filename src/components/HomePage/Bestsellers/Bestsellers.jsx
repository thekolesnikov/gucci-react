import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import OneItem from '../../OneItem/OneItem';
import styles from './Bestsellers.module.css';
import bigImage from './img/BestsellersBig.png';
import bigImagePlace from './img/BestsellersBigplace.jpg';
import image1 from './img/Bestsellers1.png';
import image1place from './img/Bestsellers1place.jpg';
import image2 from './img/Bestsellers2.png';
import image2place from './img/Bestsellers2place.jpg';
import image3 from './img/Bestsellers3.png';
import image3place from './img/Bestsellers3place.jpg';

function Bestsellers() {
    return (
        <section className="container">
            <div className={styles.bestsellers}>
                <div className={styles.bestsellers__title}>
                    <p className={styles.bestsellers__text}>Bestsellers</p>
                    <Link
                        to="/gucci-react/not-made"
                        className={styles.bestsellers__link}
                    >
                        View all
                    </Link>
                </div>
                <div className={styles.bestsellers__items}>
                    <div className={styles.bestsellers__items_2}>
                        <OneItem
                            id="53"
                            img={image1}
                            img2={image1place}
                            name="Men's 'Gucci' HA HA sneakers"
                            price="1120"
                        />
                        <OneItem
                            id="55"
                            img={image3}
                            img2={image3place}
                            name="Men's 'Gucci' HA HA cap"
                            price="120"
                        />
                    </div>
                    <div className={styles.bestsellers__items_1}>
                        <OneItem
                            id="54"
                            img={image2}
                            img2={image2place}
                            name="Gucci HA HA HA check jacket"
                            price="2350"
                        />
                    </div>
                    <Link
                        to={`/gucci-react/shoes/54`}
                        className={styles.bestsellers__bigimg}
                    >
                        <LazyLoadImage
                            loading="lazy"
                            src={bigImage}
                            placeholderSrc={bigImagePlace}
                            effect="blur"
                            alt="bigImage"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Bestsellers;
