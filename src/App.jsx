import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LocaleContext from './context/localeContext';
// import pages
import Home from './pages/Home'; 
import Tutorial from './pages/Tutorial';
import Community from './pages/Community';
// import component
import Navigation from './components/Navigation'


function App() {
  // state menyimpan context
  const [locale, setLocale] = React.useState('id'); 

  function toggleLocaleHandler() {
    setLocale((prevState) => {
      return prevState === 'id'? 'en' : 'id'; 
    }); 
  }
  
  // masukkan ke objek locale
  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale : toggleLocaleHandler,
    }
  }, [locale]);


  return (
    <LocaleContext.Provider value={localeContextValue}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home locale={locale} />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path='/komunitas' element={<Community locale={locale} />} />
        </Routes>
      </main>

    </LocaleContext.Provider>
  )
}

export default App
