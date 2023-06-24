import React from 'react'
const CardMenu = ({name, price}) => {
  return (
    <div className="w-full flex items-center justify-between p-3 xl:p-5">
      <h2 className="font-bold xl:text-2xl">{name}</h2>
      <hr className="w-10 xl:w-60 border-black border-solid"/>
      <p>{price}</p>
    </div>
  );
}

export default CardMenu;