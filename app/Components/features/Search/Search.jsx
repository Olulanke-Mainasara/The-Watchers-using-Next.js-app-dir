import React from "react";
import SearchForm from "./SearchForm";
import useStore from "../../providers/navStore";

function Search() {
  const { search } = useStore();

  return (
    <div className={`absolute w-screen h-screen z-40 bg-gray-800/0 backdrop-blur-lg ${search ? "flex" : "hidden"} items-center justify-center`}>
      <SearchForm />
    </div>
  );
}

export default Search;
