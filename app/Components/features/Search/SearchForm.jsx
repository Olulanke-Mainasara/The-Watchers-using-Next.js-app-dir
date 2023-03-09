import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchForm() {
  return (
    <div className="flex flex-col w-[90%] max-w-3xl bg-white text-black rounded-lg overflow-hidden">
      <form className="w-full flex gap-6 allT:gap-3 px-3 items-center border-none border-b-black">
        <FontAwesomeIcon className="text-lg text-black" icon={faSearch} />
        <input
          type="search"
          className="w-full rounded-lg py-3 outline-none"
          placeholder="Search encyclopedia"
        />
        <button>
          <FontAwesomeIcon className="text-lg text-black" icon={faClose} />
        </button>
      </form>
      <hr />
      <div className="w-full min-h-[150px] p-6 flex items-center justify-center">
        <p>No recent searches</p>
      </div>
    </div>
  );
}

export default SearchForm;
