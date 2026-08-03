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
<a
  href={`https://wa.me/201021409017?text=${encodeURIComponent(
    "أريد طلب:\n" +
    items.map((item) => `${item.name} - ${item.price} جنيه`).join("\n") +
    `\nالإجمالي: ${total} جنيه`
  )}`}
  target="_blank"
  className="block bg-green-500 text-black font-bold px-5 py-3 rounded-lg mt-5"
>
  اطلب عبر واتساب 📱
</a>
<a
  href="https://wa.me/201021409017?text=مرحبا%20أريد%20طلب%20من%20POLAT%20STORE"
  target="_blank"
  className="block bg-green-500 text-black px-5 py-2 rounded-lg mt-4 font-bold"
>
  اطلب عبر واتساب 📱
</a>
    </div>
  );
}