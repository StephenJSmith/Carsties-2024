"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore((state) => state.setParams);
  const setSearchValue = useParamsStore((state) => state.setSearchValue);
  const searchValue = useParamsStore((state) => state.searchValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    if (pathname !== "/") router.push("/");

    setParams({ searchTerm: searchValue });
  };

  return (
    <div className="flex w-[50%] items-center border-2 rounded-full shadow-sm">
      <input
        type="text"
        value={searchValue}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onKeyDown={(e: any) => {
          if (e.key === "Enter") search();
        }}
        onChange={onChange}
        className="
          input-custom
          text-sm
          text-gray-600
        "
        placeholder="Search for cars by make, model or colour"
      />
      <button onClick={search}>
        <FaSearch
          size={34}
          className="bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
        />
      </button>
    </div>
  );
};

export default Search;
