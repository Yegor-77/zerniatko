
export default function Reviews() {


  const Reviews = [
    {
      com: ". . . . .",
      text: "Дуже задоволена покупкою! Кавоварка компактна, зручна й стильна. Кава виходить насичена, з кремовою пінкою — майже як у кав'ярні.",
      name: "Анна Коваленко"
    },
  ];

  return (

    <section className="reviews">


      <div className="top">

        <h2>Відгуки клієнтів</h2>

        <button>
          Залишити відгук
        </button>

      </div>

      <div className="list">
        {reviews.map((item,index)=>(
          <div className="card" key={index}>
            <div className="dots">
              {item.dots}
            </div>
            <p>
              {item.text}
            </p>
         <b>
              {item.name}
            </b>
        </div>
        ))}
      </div>
      <div className="buttons">

        <button>←</button>

        <button>→</button>

      </div>



    </section>

  );

}