import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainComopnent from './Components/MainComopnent';


const App = () => {

  const [toShowItems, setToShowItems] = useState(false)
  const [isHamburgerClicked, setHamburgerClicked] = useState()

  const toggleHeader = (value) => {
    setToShowItems(value)
    setHamburgerClicked(value)
  }

  const onItemClick = () => {
    setToShowItems(!toShowItems)
  }

  return (
   <>
      <Header toggleHeader = {toggleHeader} isHamburgerClicked={isHamburgerClicked}/>
      <MainComopnent toShowItems = {toShowItems} onItemClick = {onItemClick}/>
      {!toShowItems && <Footer  />}
   </>
  );
}

export default App;
