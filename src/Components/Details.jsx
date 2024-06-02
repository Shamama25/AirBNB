
export default function Details() {
  const cards = [
    {
      title: "Charming Castle Hill Flat",
      desc:
        "Exquisite flat nestled in the enchanting ambiance of Castle Hill, offering charm and elegance in every corner.",
      price: "$55",
      image: "/one.jpeg",
    },
    {
      title: "Fell Alfama at BCB | Cascao18",
      desc:
        "Experience the allure of Alfama at BCB | Cascao18, where historic charm meets contemporary comfort.",
      price: "$48",
      image: "/two.jpeg",
    },
    {
      title: "Dulex & Terace with a river view",
      desc:
        "Enjoy the riverside vista from your luxurious duplex with a spacious terrace, the epitome of urban elegance.",
      price: "$86",
      image: "/three.jpeg",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card lg:card-side bg-base-100 shadow-xl w-full  box-border"
        >
          <figure>
            <img src={card.image} alt="Image" className="w-96 h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.desc}</p>
            <div className="card-actions flex justify-between items-center">
              <span className="text-lg">{card.price}</span>
              <button className="btn w-24 bg-[#007F73]">Book</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
