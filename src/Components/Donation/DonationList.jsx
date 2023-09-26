import { Link } from "react-router-dom";

const DonationList = ({ d }) => {
  const {id,
    picture,
    title,
    category,
    text_color,
    card_bg_color,
    category_bg_color,
    price
  } = d;
  console.log(d);
  return (
    <div>
      <div style={{ backgroundColor: card_bg_color }}>
        <div className="md:flex">
          <img src={picture} alt="" />
          <div>
            <p
              className="h-8 p-1 w-20 flex justify-center items-center text-sm font-medium ml-5 mt-5"
              style={{ color: text_color, backgroundColor: category_bg_color }}
            >
              {category}
            </p>
            <p className="text-xl font-semibold ml-5 mt-3">{title}</p>
            <p className="text-base font-semibold ml-5 mt-2" style={{color: text_color}}>${price}</p>
            <Link to={`/details/${id}`}><button className="p-1 rounded mt-2 normal-case ml-5 text-white border-0 mb-4" style={{backgroundColor:text_color}}>View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationList;
