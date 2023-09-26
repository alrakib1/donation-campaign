import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('category.json').then(res=>res.json()).then(data=>setCards(data));
    },[])
    console.log(cards)
   
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mt-24">
       {
        cards.map(card=><Card key={card.id} card={card}></Card>)
       }
      </div>
    </div>
  );
};

export default Cards;
