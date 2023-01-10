import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './ShoesSection.module.css';
import arrow from '../../img/ArrowFilter.svg';

import ShoesSectionContent from './ShoesSectionContent';

function ShoesSection({ shoesCatalogue, setShoesCatalogue }) {
    //Search params
    const params = {};
    const [searchParams, setSearchParams] = useSearchParams();

    const categories = [
        'All',
        'Driving for Men',
        'Sandals',
        'Boots & Anile boot',
        'Loafers & Moccasins',
        'Gucci Essentials - Shoes',
    ];
    const sizes = ['All', '38', '39', '40', '41', '42', '43', '44', '45', '46'];
    const colors = ['All', 'Black', 'White', 'Brown', 'Blue', 'Other'];
    const materials = [
        'All',
        'Denim',
        'Fabric',
        'Leather',
        'Rubber',
        'Canvas',
        'Suede',
        'Other',
    ];
    const sorts = [
        { name: 'Newest', sort: 'new' },
        { name: 'Most Popular', sort: 'rating' },
        { name: 'Price', sort: 'price' },
    ];

    const [filterActiveCategory, setFilterActiveCategory] = useState(false);
    const [checkboxCategoryActive, setCheckboxCategoryActive] = useState([
        searchParams.has('category') ? searchParams.get('category') : 'All',
    ]);
    const [filterActiveSize, setFilterActiveSize] = useState(false);
    const [checkboxSizeActive, setCheckboxSizeActive] = useState([
        searchParams.has('size') ? searchParams.get('size') : 'All',
    ]);
    const [filterActiveColors, setFilterActiveColors] = useState(false);
    const [checkboxColorsActive, setCheckboxColorsActive] = useState([
        searchParams.has('color') ? searchParams.get('color') : 'All',
    ]);
    const [filterActiveMaterial, setFilterActiveMaterial] = useState(false);
    const [checkboxMaterialsActive, setCheckboxMaterialsActive] = useState([
        searchParams.has('material') ? searchParams.get('material') : 'All',
    ]);

    const [filterActiveSort, setFilterActiveSort] = useState(false);
    const [checkboxSortActive, setCheckboxSortActive] = useState([
        {
            name:
                searchParams.get('sortBy') == 'price'
                    ? 'Price'
                    : searchParams.get('sortBy') == 'new'
                    ? 'Newest'
                    : 'Most Popular',
            sort: searchParams.has('sortBy')
                ? searchParams.get('sortBy')
                : 'rating',
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `https://63b2de5b5e490925c5244e4b.mockapi.io/items?${
                    checkboxCategoryActive.find((item) => item === 'All')
                        ? ''
                        : checkboxCategoryActive.map(
                              (elem) => `&category=${elem}`
                          )
                }${
                    checkboxColorsActive.find((item) => item === 'All')
                        ? ''
                        : checkboxColorsActive.map((elem) => `&color=${elem}`)
                }${
                    checkboxMaterialsActive.find((item) => item === 'All')
                        ? ''
                        : checkboxMaterialsActive.map(
                              (elem) => `&material=${elem}`
                          )
                }&sortBy=${checkboxSortActive[0].sort}`
            );
            const json = await data.json();
            setShoesCatalogue(json);
        };

        if (!checkboxCategoryActive.find((item) => item === 'All')) {
            params.category = checkboxCategoryActive[0];
        }
        if (!checkboxSizeActive.find((item) => item === 'All')) {
            params.size = checkboxSizeActive[0];
        }
        if (!checkboxColorsActive.find((item) => item === 'All')) {
            params.color = checkboxColorsActive[0];
        }
        if (!checkboxMaterialsActive.find((item) => item === 'All')) {
            params.material = checkboxMaterialsActive[0];
        }

        params.sortBy = checkboxSortActive[0].sort;
        setSearchParams(params);
        fetchData();
    }, [
        checkboxCategoryActive,
        checkboxSizeActive,
        checkboxSortActive,
        checkboxColorsActive,
        checkboxMaterialsActive,
    ]);

    function addFilterCategory(state, setState, item) {
        if (state.find((elem) => item === elem)) {
            state.splice(
                state.findIndex((elem) => item === elem),
                1
            );
            setState([...state]);
        } else {
            if (state.find((elem) => elem == 'All')) {
                state.splice(
                    state.findIndex((elem) => item === elem),
                    1
                );
                setState([...state, item]);
            } else {
                setState([...state, item]);
            }
        }
    }

    return (
        <main className="container">
            <div className={styles.section__title}>SHOES</div>
            <div className={styles.section__content}>
                <div className={styles.section__filters}>
                    <div className={styles.section__filter_left}>
                        <div
                            onMouseEnter={() => setFilterActiveCategory(true)}
                            onMouseLeave={() => setFilterActiveCategory(false)}
                            className={styles.section__filter}
                        >
                            <div className={styles.section__filter_name}>
                                Category
                            </div>
                            <img
                                src={arrow}
                                className={
                                    filterActiveCategory
                                        ? styles.section__filter_arrow_rotate
                                        : styles.section__filter_arrow
                                }
                                alt="filter"
                            />
                            {filterActiveCategory && (
                                <div
                                    className={
                                        styles.section__filter_categories
                                    }
                                >
                                    {categories.map((item) => {
                                        return (
                                            <div
                                                key={item}
                                                className={
                                                    styles.section__filter_category
                                                }
                                            >
                                                <button
                                                    onClick={() => {
                                                        addFilterCategory(
                                                            checkboxCategoryActive,
                                                            setCheckboxCategoryActive,
                                                            item
                                                        );
                                                    }}
                                                    className={
                                                        checkboxCategoryActive.find(
                                                            (elem) =>
                                                                item === elem
                                                        )
                                                            ? styles.section__filter_button_active
                                                            : styles.section__filter_button
                                                    }
                                                ></button>
                                                <p
                                                    className={
                                                        styles.section__filter_type
                                                    }
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        <div
                            onMouseEnter={() => setFilterActiveSize(true)}
                            onMouseLeave={() => setFilterActiveSize(false)}
                            className={styles.section__filter}
                        >
                            <div className={styles.section__filter_name}>
                                Size
                            </div>
                            <img
                                src={arrow}
                                className={styles.section__filter_arrow}
                                alt="filter"
                            />
                            {filterActiveSize && (
                                <div className={styles.section__filter_size}>
                                    {sizes.map((item) => {
                                        return (
                                            <div
                                                key={item}
                                                className={
                                                    styles.section__filter_category
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        addFilterCategory(
                                                            checkboxSizeActive,
                                                            setCheckboxSizeActive,
                                                            item
                                                        )
                                                    }
                                                    className={
                                                        checkboxSizeActive.find(
                                                            (elem) =>
                                                                item === elem
                                                        )
                                                            ? styles.section__filter_button_active
                                                            : styles.section__filter_button
                                                    }
                                                ></button>
                                                <p
                                                    className={
                                                        styles.section__filter_type
                                                    }
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        <div
                            onMouseEnter={() => setFilterActiveColors(true)}
                            onMouseLeave={() => setFilterActiveColors(false)}
                            className={styles.section__filter}
                        >
                            <div className={styles.section__filter_name}>
                                Colors
                            </div>
                            <img
                                src={arrow}
                                className={styles.section__filter_arrow}
                                alt="filter"
                            />
                            {filterActiveColors && (
                                <div className={styles.section__filter_colors}>
                                    {colors.map((item) => {
                                        return (
                                            <div
                                                key={item}
                                                className={
                                                    styles.section__filter_category
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        addFilterCategory(
                                                            checkboxColorsActive,
                                                            setCheckboxColorsActive,
                                                            item
                                                        )
                                                    }
                                                    className={
                                                        checkboxColorsActive.find(
                                                            (elem) =>
                                                                item === elem
                                                        )
                                                            ? styles.section__filter_button_active
                                                            : styles.section__filter_button
                                                    }
                                                ></button>
                                                <p
                                                    className={
                                                        styles.section__filter_type
                                                    }
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        <div
                            onMouseEnter={() => setFilterActiveMaterial(true)}
                            onMouseLeave={() => setFilterActiveMaterial(false)}
                            className={styles.section__filter}
                        >
                            <div className={styles.section__filter_name}>
                                Material
                            </div>
                            <img
                                src={arrow}
                                className={styles.section__filter_arrow}
                                alt="filter"
                            />
                            {filterActiveMaterial && (
                                <div className={styles.section__filter_colors}>
                                    {materials.map((item) => {
                                        return (
                                            <div
                                                key={item}
                                                className={
                                                    styles.section__filter_category
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        addFilterCategory(
                                                            checkboxMaterialsActive,
                                                            setCheckboxMaterialsActive,
                                                            item
                                                        )
                                                    }
                                                    className={
                                                        checkboxMaterialsActive.find(
                                                            (elem) =>
                                                                item === elem
                                                        )
                                                            ? styles.section__filter_button_active
                                                            : styles.section__filter_button
                                                    }
                                                ></button>
                                                <p
                                                    className={
                                                        styles.section__filter_type
                                                    }
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.section__filter}>
                        <div
                            onMouseEnter={() => setFilterActiveSort(true)}
                            onMouseLeave={() => setFilterActiveSort(false)}
                            className={styles.section__filter}
                        >
                            <div className={styles.section__filter_name}>
                                Sort by:
                                <span>{searchParams.get('sortBy')}</span>
                            </div>
                            <img
                                src={arrow}
                                className={
                                    filterActiveSort
                                        ? styles.section__filter_arrow_rotate
                                        : styles.section__filter_arrow
                                }
                                alt="filter"
                            />
                            {filterActiveSort && (
                                <div
                                    className={
                                        styles.section__filter_categories
                                    }
                                >
                                    {sorts.map((item) => {
                                        return (
                                            <div
                                                key={item.name}
                                                className={
                                                    styles.section__filter_category
                                                }
                                            >
                                                <button
                                                    onClick={() => {
                                                        setCheckboxSortActive([
                                                            {
                                                                name: item.name,
                                                                sort: item.sort,
                                                            },
                                                        ]);
                                                    }}
                                                    className={
                                                        checkboxSortActive.find(
                                                            (elem) =>
                                                                item.name ===
                                                                elem.name
                                                        )
                                                            ? styles.section__filter_button_active
                                                            : styles.section__filter_button
                                                    }
                                                ></button>
                                                <p
                                                    className={
                                                        styles.section__filter_type
                                                    }
                                                >
                                                    {item.name}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <ShoesSectionContent
                    params={params}
                    shoesCatalogue={shoesCatalogue}
                />
            </div>
        </main>
    );
}

export default ShoesSection;
