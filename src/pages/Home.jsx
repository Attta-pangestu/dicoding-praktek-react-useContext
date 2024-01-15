import { home } from "../utils/content";
import PropTypes from 'prop-types';

function Home({locale}) {
    return (
        <>
            <h1>{home[locale].header}</h1>
            <span className="subheader">{home[locale].subheader}</span>
            <p>{home[locale].paragraph}</p>
        </>
    );
}

Home.propTypes = {
    locale : PropTypes.string, 
}

export default Home;