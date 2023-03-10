import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './GendorSection.module.css';
import female1 from './img/Female/Female1.png';
import female1place from './img/Female/Female1place.jpg';
import female2 from './img/Female/Female2.png';
import female2place from './img/Female/Female2place.jpg';
import female3 from './img/Female/Female3.png';
import female3place from './img/Female/Female3place.jpg';

import male1 from './img/Male/Male1.png';
import male1place from './img/Male/Male1place.jpg';
import male2 from './img/Male/Male2.png';
import male2place from './img/Male/Male2place.jpg';
import male3 from './img/Male/Male3.png';
import male3place from './img/Male/Male3place.jpg';
import arrow from '../../../img/Arrow.svg';

function GendorSection() {
    const [gendor, setGendor] = useState('woman');

    return (
        <section className="container">
            <div className={styles.gendor}>
                <div className={styles.gendor__left}>
                    <Link
                        to={
                            gendor === 'woman'
                                ? '/gucci-react/shoes/61'
                                : '/gucci-react/shoes/56'
                        }
                    >
                        <LazyLoadImage
                            loading="lazy"
                            className={cn(styles.gendor__img)}
                            src={gendor === 'woman' ? female1 : male1}
                            placeholderSrc={
                                gendor === 'woman' ? female1place : male1place
                            }
                            alt="Woman"
                            effect="blur"
                        />
                    </Link>
                    <div className={styles.gendor__description}>
                        <div className={styles.gendor__categories}>
                            <span
                                className={cn(
                                    styles.gendor__categorie,
                                    gendor === 'man' ? styles.active : ''
                                )}
                                onMouseEnter={() => setGendor('man')}
                            >
                                Men
                            </span>
                            <div
                                className={cn(
                                    styles.gendor__categorie,
                                    gendor === 'woman' ? styles.active : ''
                                )}
                                onMouseEnter={() => setGendor('woman')}
                            >
                                Women
                            </div>
                        </div>
                        <div className={styles.gendor__items}>
                            <div className={styles.gendor__item}>
                                <Link>
                                    <p className={styles.gendor__item_text}>
                                        gucci good game
                                    </p>
                                </Link>
                                <Link>
                                    <img
                                        src={arrow}
                                        alt="Buy"
                                        className={styles.gendor__item_link}
                                    ></img>
                                </Link>
                            </div>
                            <div className={styles.gendor__item}>
                                <Link>
                                    <p className={styles.gendor__item_text}>
                                        gucci valigeria
                                    </p>
                                </Link>
                                <Link>
                                    <img
                                        src={arrow}
                                        alt="Buy"
                                        className={styles.gendor__item_link}
                                    ></img>
                                </Link>
                            </div>
                            <div className={styles.gendor__item}>
                                <Link>
                                    <p className={styles.gendor__item_text}>
                                        lensed by vogue
                                    </p>
                                </Link>
                                <Link>
                                    <img
                                        src={arrow}
                                        alt="Buy"
                                        className={styles.gendor__item_link}
                                    ></img>
                                </Link>
                            </div>
                            <div className={styles.gendor__item}>
                                <Link>
                                    <p className={styles.gendor__item_text}>
                                        Gucci Marmont
                                    </p>
                                </Link>
                                <Link>
                                    <img
                                        src={arrow}
                                        alt="Buy"
                                        className={styles.gendor__item_link}
                                    ></img>
                                </Link>
                            </div>
                            <div className={styles.gendor__item}>
                                <Link>
                                    <p className={styles.gendor__item_text}>
                                        Gucci ha ha ha
                                    </p>
                                </Link>
                                <Link>
                                    <img
                                        src={arrow}
                                        alt="Buy"
                                        className={styles.gendor__item_link}
                                    ></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gendor__right}>
                    <Link
                        to="/gucci-react/not-made"
                        className={styles.gendor__text}
                    >
                        View all
                    </Link>
                    <div className={styles.gendor__images}>
                        <Link
                            to={
                                gendor === 'woman'
                                    ? '/gucci-react/shoes/61'
                                    : '/gucci-react/shoes/56'
                            }
                        >
                            <LazyLoadImage
                                loading="lazy"
                                className={styles.gendor__image}
                                src={gendor === 'woman' ? female2 : male2}
                                placeholderSrc={
                                    gendor === 'woman'
                                        ? female2place
                                        : male2place
                                }
                                alt="Woman"
                                effect="blur"
                            />
                        </Link>
                        <Link
                            to={
                                gendor === 'woman'
                                    ? '/gucci-react/shoes/61'
                                    : '/gucci-react/shoes/56'
                            }
                        >
                            <LazyLoadImage
                                loading="lazy"
                                className={styles.gendor__image}
                                src={gendor === 'woman' ? female3 : male3}
                                placeholderSrc={
                                    gendor === 'woman'
                                        ? female3place
                                        : male3place
                                }
                                alt="Woman"
                                effect="blur"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GendorSection;
