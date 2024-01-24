import statsData from "@/constants/statsData";
import StatsCard from "./StatsCard";
const Stats = () => {
  console.log(statsData);
  return (
    <div className="flex my-4 max-[870px]:flex-wrap mx-4 gap-4">
      {statsData.map((item, index) => (
        <StatsCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Stats;
