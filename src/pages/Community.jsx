import PropTypes from 'prop-types';
import { community } from '../utils/content';

function Community({locale}) {
  return (
    <>
      <h1>{community[locale].header}</h1>
      <span className="subheader">{community[locale].subheader}</span>
      <p>{community[locale].paragraph}</p>
    </>
  );
}

Community.propTypes = {
  locale : PropTypes.string, 
}

export default Community;
