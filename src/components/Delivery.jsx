import gofood from '../assets/brand/gofood.webp'
import grabfood from '../assets/brand/grabfood.webp'
import shopeefood from '../assets/brand/shopee_food.webp'

const Delivery = () => {
  return (
    <div className="w-full bg-[#D4A373] px-5 p-10 xl:p-20 flex flex-col xl:flex-row items-center justify-between" id="delivery">
      <h2 className="font-bold text-2xl mb-5 text-white">Bisa di pesan melalui</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="w-28 h-14  flex items-center justify-center">
          <img src={gofood} className="w-[500px]" />
        </div>
        <div className="w-28 h-14 flex items-center justify-center">
          <img src={grabfood} className="w-[500px]" />
        </div>
        <div className="w-28 h-14 flex items-center justify-center">
          <img src={shopeefood} className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}

export default Delivery;