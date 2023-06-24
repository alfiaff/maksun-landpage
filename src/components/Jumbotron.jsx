import {  useState  } from 'react';
import kupat from '../assets/img/kupat.webp'
import tutug_oncom from '../assets/img/tutug_oncom.webp'
import nasi_timbel from '../assets/img/nasi_timbel.webp'
import arrow_buttom from '../assets/icons/arrow-buttom.svg'

const Jumbotron = () => {
  return (
     <div className ="w-full bg-[#CCD5AE] px-5 py-24 xl:px-20 xl:py-32 flex   xl:flex-row justify-center xl:items-center relative">
        <div className="w-full flex flex-col xl:flex-row justify-between">
          <div className="mb-10">
            <h2 className="text-6xl font-light mb-3 ">Bikin lo jadi <br /> Ketagihan.</h2>
            <p>Apabila perut sudah keroncongan <br /> Maksun is solution.</p>
          </div>
          <div className="w-60 h-60 grid grid-cols-2 gap-2">
            <img src={kupat} className="w-full h-full object-cover row-span-2 rounded-lg" />
            <img src={tutug_oncom} className="w-full h-full object-cover rounded-lg" />
            <img src={nasi_timbel} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <span className="w-14 h-14 bg-[#E9EDC9] absolute bottom-[-25px]  rounded-full  flex items-center justify-center  shadow-lg ">
          <img src={arrow_buttom} className="w-6 animate-bounce" />
        </span>
     </div>
     
  );
}

export default Jumbotron;