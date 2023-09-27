import { useEffect, useState } from "react";

export function useDonationLength() {
  const [donationLength, setDonationLength] = useState(0);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donation"));
    if (donations) {
      setDonationLength(donations.length);
    } else {
      console.log("no data");
    }
  }, []);

  return donationLength;
}
