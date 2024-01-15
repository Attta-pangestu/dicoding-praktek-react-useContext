import { tutorial } from '../utils/content';
import { useContext } from 'react';
import LocaleContext from '../context/localeContext';

function Posts() {
  const {locale} = useContext(LocaleContext);
  return (
    <ul className="posts">
      {tutorial[locale].map((title) => (
        <li key={title}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}


export default Posts;
