import { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../context/localeContext";

function Navigation () {
    const {locale, toggleLocale} = useContext(LocaleContext);

    return(
        <nav>
            <ul>
                <li> <Link to="/">Beranda</Link></li>
                <li> <Link to="/tutorial">Tutorial</Link></li>
                <li> <Link to="/komunitas">Komunitas</Link></li>
            </ul>
            <button onClick={toggleLocale}>{locale === 'id' ? 'Bahasa' : 'English'}</button>
        </nav>
    );
}

export default Navigation;