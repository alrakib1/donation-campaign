import { useEffect } from "react";
import { useState } from "react";
import DonationList from "./DonationList";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [dataLength, setDataLength]= useState(4);
  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donation"));
    if (donations) {
      setDonation(donations);
    } else {
      // console.log('no data found');
    }
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 container mx-auto mt-20">
          {donation.slice(0, dataLength).map((d) => (
            <DonationList key={d.id} d={d}></DonationList>
          ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button onClick={()=>setDataLength(donation.length)} className={dataLength === donation.length ? 'hidden' : 'btn text-center bg-[#009444] text-white border-0'}>Show All</button>
      </div>
    </div>
  );
};

export default Donation;
