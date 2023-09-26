const Card = ({ card }) => {
  const {
    picture,
    title,
    category,
    text_color,
    card_bg_color,
    category_bg_color,
  } = card;
  return (
    <div>
      <div className="hover:cursor-pointer">
        <div className="card bg-base-100 shadow-xl" style={{backgroundColor:card_bg_color}}>
          <figure>
            <img className="w-full"
              src={picture}
              alt={'picture of'+{title}}
            />
          </figure>
          <p className="w-20 p-1 text-center mt-4 ml-4 mb-3 text-sm font-medium" style={{color:text_color, backgroundColor: category_bg_color}}>{category}</p>
          <div className="ml-4 mb-4">
            <h2 className="card-title font-semibold text-xl" style={{color: text_color}}>{title}</h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
