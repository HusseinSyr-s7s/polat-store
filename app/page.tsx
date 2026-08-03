 "use client";
 import ProductCard from "./components/ProductCard";
 import Cart from "./components/Cart";
 import { useState } from "react";
 export default function Home() {
  const [cartItems, setCartItems] = useState<
  { name: string; price: number }[]
>([]);
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-6 border-b border-yellow-500">
        <div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
    P
  </div>

  <h1 className="text-3xl font-bold text-yellow-500">
    POLAT STORE
  </h1>
</div>
<Cart items={cartItems} />
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

  <ProductCard
    name="ساعة رجالية كلاسيك"
    price={249}
    image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
   addToCart={() =>
  setCartItems([
    ...cartItems,
    { name: "ساعة رجالية كلاسيك", price: 249 }
  ])
}
  />

  <ProductCard
    name="نظارة شمسية فاخرة"
    price={199}
    image="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    addToCart={() => setCartItems([...cartItems, "نظارة شمسية فاخرة"])}
  />

  <ProductCard
    name="سلسلة ستانلس"
    price={149}
    image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
    addToCart={() => setCartItems([...cartItems, "سلسلة ستانلس"])}
  />
<ProductCard
  name="محفظة جلد فاخرة"
  price={299}
  image="https://images.unsplash.com/photo-1627123424574-724758594e93"
  addToCart={() => setCartItems([...cartItems, "محفظة جلد فاخرة"])}
/>

<ProductCard
  name="خاتم رجالي"
  price={179}
  image="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
  addToCart={() => setCartItems([...cartItems, "خاتم رجالي"])}
/>

<ProductCard
  name="سماعة لاسلكية"
  price={399}
  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  addToCart={() => setCartItems([...cartItems, "سماعة لاسلكية"])}
/>
</section>
    </main>
  );
}