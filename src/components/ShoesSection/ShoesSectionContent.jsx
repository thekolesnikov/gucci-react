import { useState } from 'react';
import styles from './ShoesSection.module.css';

import OneItem from '../OneItem/OneItem';

function ShoesSectionContent({ params, shoesCatalogue }) {
    const [itemQty, setItemQty] = useState(
        !(params.category && params.size && params.color && params.material)
            ? 20
            : 47
    );
    function showMore() {
        setItemQty(itemQty + 10);
    }
    return (
        <>
            <div className={styles.section__items}>
                <div className={styles.section__row_items}>
                    {shoesCatalogue
                        .filter((elem) => elem.id <= itemQty)
                        .map((item) => {
                            return (
                                <OneItem
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />
                            );
                        })}
                </div>
            </div>
            <button
                onClick={() => showMore()}
                className={styles.showmore__button}
            >
                Show more
            </button>
        </>
    );
}

export default ShoesSectionContent;
