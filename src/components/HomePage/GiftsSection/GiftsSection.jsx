import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './GiftsSection.module.css';
import image1 from './img/gift1.png';
import image1place from './img/gift1place.jpg';
import image2 from './img/gift2.png';
import image2place from './img/gift2place.jpg';
import image3 from './img/gift3.png';
import image3place from './img/gift3place.jpg';
import ShowMore from '../../ShowMore/ShowMore';

function GiftsSection() {
    return (
        <section className="container">
            <div className={styles.gifts}>
                <div className={styles.gifts__description}>
                    <div className={styles.gifts__description_title}>
                        Gucci gifts
                    </div>
                    <div className={styles.gifts__description_text}>
                        In the Gucci Gift universe, wishes become reality in the
                        shape of dream-like objects. Shopping for yourself or
                        someone special, choose from selection of gifts.
                    </div>
                </div>
                <div className={styles.gifts__description_label}>
                    <ShowMore />
                </div>
                <div className={styles.gifts__images}>
                    <div>
                        <LazyLoadImage
                            loading="lazy"
                            placeholderSrc={image1place}
                            effect="blur"
                            src={image1}
                            alt="gift"
                        />
                    </div>
                    <div>
                        <LazyLoadImage
                            loading="lazy"
                            placeholderSrc={image2place}
                            effect="blur"
                            src={image2}
                            alt="gift"
                        />
                    </div>
                    <div>
                        <LazyLoadImage
                            loading="lazy"
                            placeholderSrc={image3place}
                            effect="blur"
                            src={image3}
                            alt="gift"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GiftsSection;
