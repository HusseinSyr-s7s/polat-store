"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";

export default function Home() {
const [cartItems, setCartItems] = useState<
{ name: string; price: number; quantity: number }[]

> ([]);

const [category, setCategory] = useState("الكل");

const categories = [
"الكل",
...Array.from(new Set(products.map((product) => product.category))),
];

const filteredProducts =
category === "الكل"
? products
: products.filter((product) => product.category === category);

return ( <main className="min-h-screen bg-black text-white">

```
  <header className="flex justify-between items-center p-6 border-b border-yellow-500">

    <div className="flex items-center gap-3">

      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
        P
      </div>

      <h1 className="text-3xl font-bold text-yellow-500">
        POLAT STORE
      </h1>

    </div>


    <Cart
      items={cartItems}
      setCartItems={setCartItems}
    />


    <nav className="space-x-6">
      <span>الرئيسية</span>
      <span>المنتجات</span>
      <span>العروض</span>
      <span>تواصل معنا</span>
    </nav>

  </header>



  <section className="text-center py-32">

    <h2 className="text-5xl font-bold mb-6">
      إكسسواراتك بأسلوب فاخر
    </h2>


    <p className="text-gray-300 text-xl mb-8">
      أحدث المنتجات بأفضل الأسعار بالجنيه المصري
    </p>


    <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold">
      تسوق الآن
    </button>



    <div className="mt-10 flex justify-center gap-6 flex-wrap">

      <div className="bg-gray-900 p-5 rounded-xl border border-yellow-500">
        🔥 خصم 20% على الإكسسوارات
      </div>


      <div className="bg-gray-900 p-5 rounded-xl border border-yellow-500">
        🚚 شحن لجميع المحافظات
      </div>


      <div className="bg-gray-900 p-5 rounded-xl border border-yellow-500">
        💳 الدفع عند الاستلام
      </div>

    </div>


  </section>



  <section className="flex flex-wrap justify-center gap-3 px-10">

    {categories.map((item) => (

      <button
        key={item}
        onClick={() => setCategory(item)}
        className={
          category === item
            ? "bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold"
            : "bg-gray-900 text-white px-5 py-2 rounded-lg font-bold border border-yellow-500"
        }
      >
        {item}
      </button>

    ))}

  </section>



  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">


    {filteredProducts.map((product) => (

      <ProductCard

        key={product.name}

        name={product.name}

        price={product.price}

        image={product.image}


        addToCart={() => {

          const oldProduct = cartItems.find(
            (item) => item.name === product.name
          );


          if (oldProduct) {

            setCartItems(
              cartItems.map((item) =>
                item.name === product.name
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              )
            );


          } else {

            setCartItems([
              ...cartItems,
              {
                name: product.name,
                price: product.price,
                quantity: 1,
              },
            ]);

          }

        }}

      />

    ))}


  </section>


</main>

);

}
