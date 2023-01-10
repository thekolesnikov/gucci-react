import { Link } from 'react-router-dom';

import OneItem from '../../OneItem/OneItem';
import styles from './Bestsellers.module.css';
import bigImage from './img/BestsellersBig.png';
import image1 from './img/Bestsellers1.png';
import image2 from './img/Bestsellers2.png';
import image3 from './img/Bestsellers3.png';

function Bestsellers() {
    return (
        <section className="container">
            <div className={styles.bestsellers}>
                <div className={styles.bestsellers__title}>
                    <p className={styles.bestsellers__text}>Bestsellers</p>
                    <Link to="/not-made" className={styles.bestsellers__link}>
                        View all
                    </Link>
                </div>
                <div className={styles.bestsellers__items}>
                    <div className={styles.bestsellers__items_2}>
                        <OneItem
                            id="53"
                            img={image1}
                            name="Men's 'Gucci' HA HA sneakers"
                            price="1120"
                        />
                        <OneItem
                            id="55"
                            img={image3}
                            name="Men's 'Gucci' HA HA cap"
                            price="120"
                        />
                    </div>
                    <div className={styles.bestsellers__items_1}>
                        <OneItem
                            id="54"
                            img={image2}
                            name="Gucci HA HA HA check jacket"
                            price="2350"
                        />
                    </div>
                    <Link
                        to={`/shoes/54`}
                        className={styles.bestsellers__bigimg}
                    >
                        <img src={bigImage} alt="bigImage" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Bestsellers;
