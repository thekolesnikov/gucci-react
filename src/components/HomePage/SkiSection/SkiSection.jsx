import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './SkiSection.module.css';
import SkiImageBig from './img/SkiBigImage.png';
import SkiImageBig2 from './img/SkiBigImagePlaceholder.jpg';
import SkiImageSmall from './img/SkiSmallImage.png';
import SkiImageSmall2 from './img/SkiSmallImagePlaceholder.jpg';
import ShowMore from '../../ShowMore/ShowMore';

function SkiSection() {
    return (
        <section className="container">
            <div className={styles.ski__section}>
                <div className={styles.ski__left}>
                    <LazyLoadImage
                        src={SkiImageBig}
                        placeholderSrc={SkiImageBig2}
                        className={styles.ski__left_img}
                        alt="SkiImageBig"
                        effect="blur"
                    />
                    <div className={styles.ski__title}>APRÈS-SKI</div>
                </div>
                <div className={styles.ski__right}>
                    <LazyLoadImage
                        className={styles.ski__image_small}
                        src={SkiImageSmall}
                        placeholderSrc={SkiImageSmall2}
                        effect="blur"
                        alt="SkiImageSmall"
                    />
                </div>
                <div className={styles.showmore}>
                    <ShowMore />
                </div>
            </div>
        </section>
    );
}

export default SkiSection;
