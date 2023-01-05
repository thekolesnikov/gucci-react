import { Link } from 'react-router-dom';
import styles from './ShoesSection.module.css';

import OneItem from '../OneItem/OneItem';

function ShoesSectionContent({
    // filteredItemsCategory,
    // filteredItems,
    // checkboxCategoryActive,
    shoesCatalogue,
}) {
    return (
        <>
            <div className={styles.section__items}>
                <div className={styles.section__row_items}>
                    {shoesCatalogue.map((item) => {
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
            <button className={styles.showmore__button}>Show more</button>
        </>
    );
}

export default ShoesSectionContent;
