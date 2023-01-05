import { Link } from 'react-router-dom';
import showmore from './../../img/ShowMore.svg';

function ShowMore() {
    return (
        <Link>
            <img src={showmore} alt="Show More" />
        </Link>
    );
}

export default ShowMore;
