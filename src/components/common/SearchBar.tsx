import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <div className="mx-5 relative">
      <input
        value={search}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="bg-slate-200/50 rounded-lg pr-8 py-2 px-3 w-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-slate-200/70"
        type="text"
      />
      <IoSearch className="absolute top-[50%] translate-y-[-50%] right-2 text-2xl text-blue-300" />
      {search.length > 3 && inputFocus && (
        <div className="h-max p-4 w-full absolute top-12 rounded-md bg-slate-50">
          <p className="text-slate-700 font-semibold">No result found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
