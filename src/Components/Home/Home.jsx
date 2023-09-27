import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
const [searchValue, setSearchValue] = useState('');
const handleSearchValue = e =>{
  setSearchValue(e.target.value);
}
const handleSearch = () => {
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const filteredCardData = cards.filter(
    (card) => card.category.toLowerCase() === lowerCaseSearchValue
  );
  
  if (filteredCardData.length > 0) {
    setCards(filteredCardData);
    const noData = document.getElementById('no-data');
    noData.classList.add('hidden');
  } else {
    const noData = document.getElementById('no-data');
    noData.classList.remove('hidden');
    setCards([]); 
  }

};
  return (
    <div>
      <div className="text-center container mx-auto">
        <h3 className="text-3xl lg:text-5xl font-bold mt-20 mb-10">
          I Grow By Helping People In Need
        </h3>
        <section className="bg-cover bg-center" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
          <div className="join">
            <input onChange={handleSearchValue}
              id="input-filed"
              className="input input-bordered join-item"
              placeholder="Search here...."
            />
            <button onClick={handleSearch} className="btn join-item bg-[#FF444A] text-white">
              Search
            </button>
          </div>
          <h2 id="no-data" className="text-center hidden mt-20 text-4xl font-bold">No Data Found</h2>
        </section>
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mt-24">
          {cards?.map(card => <Card key={card.id} card={card}></Card>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
