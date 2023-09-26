const Search = () => {
  return (
    <div>
      <div className="text-center container mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mt-20 mb-10">
          I Grow By Helping People In Need
        </h3>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search here...."
          />
          <button className="btn join-item bg-[#FF444A] text-white">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
