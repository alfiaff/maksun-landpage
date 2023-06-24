import { useState, useEffect } from 'react';
import CardMenu from './CardMenu';

const OurMenu = ({food, drink}) => {
  const [resultSearch, setResultSearch] = useState([]);
  const [search, setSearch] = useState([]);
  
  const [option, setOption] = useState([
    {id: 'makanan', isActive: true},
    {id: 'minuman', isActive: false}
  ])
  
  const handleClickOption = (index) => {
    option.map(obj => {
      obj.isActive = false;
    }) 
    const newOption = [...option];
    newOption[index].isActive = true;
    
    setOption(newOption);
  }
  
  const handleSearchMenu = (e) => {
    let value = e.target.value;
    setSearch(value);
    let newReg = new RegExp(value, 'gi')
 
    if (option[0].isActive) {
      const filterFood = food.filter(objFood => {
        if (objFood.name.toLowerCase().match(newReg)) {
          return objFood
        } else {
          setResultSearch([])
        }
      });
      setResultSearch(filterFood)
    } else {
      const filterDrink = drink.filter(objDrink => {
        if (objDrink.name.toLowerCase().match(newReg)) {
          return objDrink
        }  else {
          setResultSearch([])
        }
      });
      setResultSearch(filterDrink)
    };
  }
  useEffect(() => {
    console.log(resultSearch)
  }, [resultSearch])
  
  
  const displayListMenu = () => {
    if (search !== '') {
      if (resultSearch.length > 0) {
         return resultSearch.map(objResult => {
            return <CardMenu key={objResult.id} name={objResult.name} price={objResult.price} />
         });
      } 
    }
    
    if (resultSearch !== '' || resultSearch.length <= 0) {
      if (option[0].isActive ) {
        if (food.length > 0) {
          return food.map(objFood => {
            return <CardMenu key={objFood.id} name={objFood.name} price={objFood.price} />
          });
        } else {
          return null
        };
      } else {
        if (drink.length > 0) {
          return drink.map(objDrink => {
            return <CardMenu key={objDrink.id} name={objDrink.name} price={objDrink.price} />
          });
        } else {
          return null;
        };
      };
      
    }
  }
  
  
    
  return (
    <div className="w-full bg-[#FEFAE0] px-5 py-10 xl:px-20" id="ourmenu">
      <div className="w-fit py-3 px-5 bg-slate-100 flex gap-5 m-auto rounded-full shadow-lg font-bold">
        <span className={option[0].isActive ? 'opacity-1' : 'opacity-[0.5]'} onClick={() => handleClickOption(0)}>Makanan</span>
        <span className={option[1].isActive ? 'opacity-1' : 'opacity-[0.5]'} onClick={() => handleClickOption(1)}>Minuman</span>
      </div>
      
      <div className="w-full xl:w-2/3 bg-[#FAEDCD] mt-10 rounded-lg p-5 xl:p-10 m-auto">
         <h2 className="font-bold text-2xl mb-3">Our menu</h2>
          <form className=" flex items-center justify-center  mb-3">
              <input 
               placeholder="Mau cari apa?"
               className="w-80 px-5 py-2 rounded-full outline-none shadow-lg"
               onChange={handleSearchMenu}
               value={search}
              />
          </form>
         {
           displayListMenu()
         }
      </div>
    </div>
  )
}

export default OurMenu;