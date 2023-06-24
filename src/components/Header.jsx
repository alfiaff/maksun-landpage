import {  useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
//import { FaBeer } from 'react-icons/fa';
//import { RxCross2 } from 'react-icons/fa';
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  const handleClickMenu = () => {
    setIsMenu(!isMenu);
    setShowMenu(true);
  }
  
  const handleClickCross = () => {
    setShowMenu(false);
    setIsMenu(false);
  }
  
  
  const handleScrollHeader = () => {
    let scroll = window.scrollY > 0;
    setIsScroll(scroll)
  }
  
  const handleClickNav = () => {
    setShowMenu(false);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScrollHeader);
  }, [])
  
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [showMenu])
  
  return (
    <header className={`w-full p-5 xl:px-20 flex justify-between fixed  z-10 top-0 ${isScroll ? 'bg-black' : 'bg-transparent'} transition`}>
      <div>
        <h1 className={`font-bold text-2xl ${isScroll ? 'text-white' : 'text-black'}`}>
          <a href="#">Maksun</a>
        </h1>
      </div>
      
      <nav>
        <ul className={`gap-3 w-full xl:w-fit h-screen xl:h-fit fixed xl:static top-0 left-0 bg-black text-white ${showMenu ? 'flex' : 'hidden' } flex-col xl:flex-row font-bold text-6xl px-5 pt-20 xl:p-0 ${isScroll ? 'xl:text-white': 'text-black'} `}>
          <div className="flex items-center justify-end absolute top-3 right-6" onClick={handleClickCross}>
            <ImCross className="w-6"/>
          </div>
          <li onClick={handleClickNav}><a href="#">Home</a></li>
          <li onClick={handleClickNav}><a href="#about">About</a></li>
          <li onClick={handleClickNav}><a href="#ourmenu">Our menu</a></li>
          <li onClick={handleClickNav}><a href="#delivery">Delivery</a></li>
        </ul>
        
        <div className="w-10 h-10 flex flex-col gap-2 justify-center xl:hidden" onClick={handleClickMenu}>
          <span className={`${isMenu ? 'w-3' : 'w-8'} h-1 ${isScroll ? 'bg-white' : 'bg-black'} block self-end rounded transition-all`}></span>
          <span className={`w-5 h-1 ${isScroll ? 'bg-white' : 'bg-black'}  block self-end rounded transition`}></span>
          <span className={`${isMenu ? 'w-8' : 'w-3'} h-1 ${isScroll ? 'bg-white' : 'bg-black'}  block self-end rounded transition-all`}></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;