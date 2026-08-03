type ProductProps = {
  name: string;
  price: number;
  image: string;
  addToCart: () => void;
};

export default function ProductCard({ name, price, image, addToCart }: ProductProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-xl font-bold mt-4">
        {name}
      </h3>

      <div className="text-yellow-500 mt-2">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-yellow-400 text-lg mt-2">
        {price} جنيه
      </p>

       <button
       onClick={addToCart}
  className="bg-yellow-500 text-black px-5 py-2 rounded-lg mt-4 font-bold"
>
  أضف للسلة 🛒
</button>
    </div>
  );
}