import { Link } from 'react-router-dom';

import styles from './BlueSection.module.css';
import OneItem from '../../OneItem/OneItem';
import imageBig from './img/blueBig.png';
import image1 from './img/blue2.png';
import image2 from './img/blue3.png';
import ShowMore from '../../ShowMore/ShowMore';

function BlueSection() {
    return (
        <section className="container">
            <div className={styles.blue}>
                <div className={styles.blue__title}>
                    <div className={styles.blue__text}>Shop by look</div>
                    <Link
                        to="/gucci-react/not-made"
                        className={styles.blue__link}
                    >
                        View all
                    </Link>
                </div>
                <div className={styles.blue__images}>
                    <Link
                        to="/gucci-react/shoes/59"
                        className={styles.blue__image_big}
                    >
                        <img loading="lazy" src={imageBig} alt="BigImage" />
                    </Link>
                    <OneItem
                        id="59"
                        img={image1}
                        name="Good Game cotton sweatshirt"
                        price="1450"
                    />
                    <OneItem
                        id="60"
                        img={image2}
                        name="Men's Good Game Gucci Basket sneaker"
                        price="670"
                    />
                </div>
                <div className={styles.blue__showmore}>
                    <ShowMore />
                </div>
            </div>
        </section>
    );
}

export default BlueSection;
