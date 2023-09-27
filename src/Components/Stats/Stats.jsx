import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";
import { useDonationLength } from "../Donation/DonationLength";

const Stats = () => {
  const donationLength = useDonationLength();
  const totalDonation = 12;

  const donationPercentage = (donationLength / totalDonation) * 100;
  const totalPercentage = 100 - donationPercentage;

  const data = [
    { name: "Donation Length", value: donationPercentage },
    { name: "Total Donation", value: totalPercentage },
  ];
  const colors = ["#00C49F", "#FF444A"];

  return (
    <div>
      <div className="mx-auto flex flex-col justify-center items-center mt-20">
        <h2 className="text-center text-4xl font-bold">Donation Statistics</h2>
        <PieChart width={200} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
