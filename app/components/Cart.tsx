type CartProps = {
  items: { name: string; price: number }[];
};

export default function Cart({ items }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

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
        className="w-full mt-4 p-2 rounded text-black"
      />

      <input
        placeholder="رقم الهاتف"
        className="w-full mt-3 p-2 rounded text-black"
      />

      <input
        placeholder="العنوان"
        className="w-full mt-3 p-2 rounded text-black"
      />

      <a
        href={`https://wa.me/201021409017?text=${encodeURIComponent(
          "طلب جديد من POLAT STORE\n\n" +
          items.map((item) => `${item.name} - ${item.price} جنيه`).join("\n") +
          `\n\nالإجمالي: ${total} جنيه`
        )}`}
        target="_blank"
        className="block bg-green-500 text-black font-bold px-5 py-3 rounded-lg mt-5"
      >
        تأكيد الطلب عبر واتساب 📱
      </a>
    </div>
  );
}