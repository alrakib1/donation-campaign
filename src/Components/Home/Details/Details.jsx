import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const [detail, setDetail] = useState({});
  const { picture, title, description, price, text_color } = detail;
  console.log(detail);

  useEffect(() => {
    const findDetail = details?.find((detail) => detail.id === parseInt(id));
    setDetail(findDetail);
  }, [id, details]);

  const handleDonate = () => {
    const addedDonation = [];
    const donations = JSON.parse(localStorage.getItem("donation"));
    if (!donations) {
      addedDonation.push(detail);
      localStorage.setItem("donation", JSON.stringify(addedDonation));
      toast("Thanks For Your Donation");
    } else {
        const isExists = donations.find(donate=>donate.id==id)
        if(!isExists){
          addedDonation.push(...donations, detail);
        localStorage.setItem("donation", JSON.stringify(addedDonation));
      toast("Thanks For Your Donation");
        }else{
          toast('Already Donated Here') 
        }
    }
  };
  return (
    <div>
      <div className="container flex justify-center items-center mx-auto mt-12">
        <div className="md:relative">
          <div className="relative">
            <img
              className="w-[300px] md:w-[600px] lg:w-[1000px] mx-auto"
              src={picture}
              alt=""
            />
            <div className="md:absolute md:bottom-0 left-0 right-0 md:bg-[#0B0B0B80] md:h-32 flex justify-center items-center">
              <button
                onClick={handleDonate}
                className="btn mt-4 md:mt-0 md:absolute left-10 text-white border-0 font-semibold text-xl normal-case"
                style={{ backgroundColor: text_color }}
              >
                Donate ${price}
              </button>
            </div>
          </div>
          <div className="md:w-[600px] lg:w-[1000px] mx-auto mt-12">
            <h3 className="mb-6 text-3xl md:text-4xl font-bold">{title}</h3>
            <p className="mb-24 text-[#0B0B0BB3] font-normal text-base">
              {description}
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Details;
