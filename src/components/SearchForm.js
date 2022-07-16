import {React, useState} from "react";
import search from "../icons/search.svg";
export { SearchForm };

function SearchForm({handleResponse, city}) {
  const [value, setValue] = useState(city);

  function handleSubmit(event) {
    handleResponse(value);
    event.preventDefault();
    setValue("");
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} id="#form">
        <input
          type="text"
          value={value}
          id="input-city"
          placeholder="Enter the city"
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <input
          type="image"
          className="search-button"
          src={search}
        ></input>
      </form>
    </div>
  );
}
