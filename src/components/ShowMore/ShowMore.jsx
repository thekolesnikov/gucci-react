import { Link } from 'react-router-dom';
import showmore from './../../img/ShowMore.svg';
import styles from './ShowMore.module.css';

function ShowMore() {
    return (
        <Link className={styles.showmore} to="/gucci-react/not-made">
            <img src={showmore} alt="Show More" />
        </Link>
    );
}

export default ShowMore;
