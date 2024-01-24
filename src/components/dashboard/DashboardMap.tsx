import worldMap from "@/assets/images/world-map.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
const DashboardMap = () => {
  const [country, setCountry] = useState("india");
  return (
    <div className="flex-[0_0_400px] flex flex-col  self-stretch border border-solid border-slate-400 rounded-md">
      <div className="flex justify-between px-6 my-4">
        <h2 className="text-2xl font-semibold">Geography</h2>
        <Select value={country} onValueChange={(value) => setCountry(value)}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select TimeFrame" className="font-bold" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative">
        <img src={worldMap} alt="map" className="mt-12" />
        {country === "india" ? (
          <div className="absolute bottom-12 right-12 shadow-country p-4 py-2 bg-white rounded-md">
            <h3 className="text-slate-400 font-bold">INDIA</h3>
            <h3 className="text-lg font-bold">12.4B</h3>
          </div>
        ) : (
          <div className="absolute top-12 left-12 shadow-country p-4 py-2 bg-white rounded-md">
            <h3 className="text-slate-400 font-bold">USA</h3>
            <h3 className="text-lg font-bold">54.2B</h3>
          </div>
        )}
      </div>
      <div className="w-auto mt-auto flex items-center justify-between px-4 gap-6 pb-3">
        <div className="flex-1">
          <h3 className="mb-2 font-semibold">Customer</h3>
          <div className="w-full h-2 bg-blue-50 rounded-xl">
            <div
              className={`h-full  bg-blue-500 rounded-xl ${
                country === "india" ? "w-[60%]" : "w-[20%]"
              }`}
            ></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 font-semibold">Conversions</h3>
          <div className="w-full h-2 bg-orange-50 rounded-xl">
            <div
              className={`h-full  bg-orange-500 rounded-xl ${
                country === "india" ? "w-[90%]" : "w-[60%]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMap;
