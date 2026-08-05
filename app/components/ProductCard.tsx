type ProductProps = {
name: string;
price: number;
image: string;
category?: string;
addToCart: () => void;
};

export default function ProductCard({
name,
price,
image,
category,
addToCart,
}: ProductProps) {

return ( <div className="bg-gray-900 rounded-xl p-5 text-center border border-gray-800 hover:border-yellow-500 transition duration-300 hover:scale-105">

```
  <img
    src={image}
    alt={name}
    className="w-full h-52 object-cover rounded-lg"
  />


  {category && (
    <p className="text-gray-400 text-sm mt-3">
      {category}
    </p>
  )}


  <h3 className="text-xl font-bold mt-3">
    {name}
  </h3>


  <div className="text-yellow-500 mt-2">
    ⭐⭐⭐⭐⭐
  </div>


  <p className="text-yellow-400 text-xl font-bold mt-3">
    {price} جنيه
  </p>


  <button
    onClick={addToCart}
    className="bg-yellow-500 text-black w-full px-5 py-3 rounded-lg mt-5 font-bold hover:bg-yellow-400 transition"
  >
    أضف للسلة 🛒
  </button>

</div>


);
}
