import { useState } from "react";

type CartProps = {
  items: { name: string; price: number; quantity: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<
      { name: string; price: number; quantity: number }[]
    >
  >;
};

export default function Cart({ items, setCartItems }: CartProps) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="bg-gray-900 p-5 rounded-xl text-center">
      <h2 className="text-xl font-bold">
        🛒 السلة ({items.length})
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-300 mt-3">
          السلة فارغة حاليًا
        </p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="mt-4 border-b border-gray-700 pb-3">

            <p>
              {item.name}
            </p>

            <p className="text-yellow-400">
              {item.price} جنيه
            </p>

            <div className="flex justify-center items-center gap-3 mt-2">

              <button
                onClick={() =>
                  setCartItems(
                    items.map((product, i) =>
                      i === index
                        ? {
                            ...product,
                            quantity: product.quantity + 1,
                          }
                        : product
                    )
                  )
                }
                className="bg-green-500 text-black px-3 py-1 rounded"
              >
                +
              </button>

              <span className="font-bold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  setCartItems(
                    items.map((product, i) =>
                      i === index && product.quantity > 1
                        ? {
                            ...product,
                            quantity: product.quantity - 1,
                          }
                        : product
                    )
                  )
                }
                className="bg-yellow-500 text-black px-3 py-1 rounded"
              >
                -
              </button>


              <button
                onClick={() =>
                  setCartItems(
                    items.filter((_, i) => i !== index)
                  )
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                حذف
              </button>

            </div>

          </div>
        ))
      )}

      <p className="text-yellow-400 font-bold mt-4">
        الإجمالي: {total} جنيه
      </p>


      <input
        placeholder="الاسم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mt-4 p-2 rounded text-black"
      />


      <input
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mt-3 p-2 rounded text-black"
      />


      <input
        placeholder="العنوان"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full mt-3 p-2 rounded text-black"
      />


      <button
        onClick={() => setCartItems([])}
        className="block w-full bg-red-600 text-white font-bold px-5 py-3 rounded-lg mt-5"
      >
        🗑️ تفريغ السلة
      </button>


      <button
        onClick={() => {
          const message = `طلب جديد من POLAT STORE

الاسم: ${name}
الهاتف: ${phone}
العنوان: ${address}

المنتجات:
${items
  .map(
    (item) =>
      `${item.name} - ${item.price} جنيه × ${item.quantity}`
  )
  .join("\n")}

الإجمالي: ${total} جنيه`;

          window.open(
            `https://wa.me/201021409017?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }}
        className="block w-full bg-green-500 text-black font-bold px-5 py-3 rounded-lg mt-5"
      >
        تأكيد الطلب عبر واتساب 📱
      </button>

    </div>
  );
}