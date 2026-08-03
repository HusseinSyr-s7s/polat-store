import { useState } from "react";
type CartProps = {
  items: { name: string; price: number }[];
};

export default function Cart({ items }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
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
          <p key={index} className="mt-2">
            {item.name} - {item.price} جنيه
          </p>
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
  onClick={() => {
    const message = `طلب جديد من POLAT STORE

الاسم: ${name}
الهاتف: ${phone}
العنوان: ${address}

المنتجات:
${items.map((item) => `${item.name} - ${item.price} جنيه`).join("\n")}

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