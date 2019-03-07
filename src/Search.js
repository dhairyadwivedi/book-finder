import React from "react";

const Search = props => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="get">
        <div className="inner-form">
          <div>
            <input
              onChange={props.handleSearch}
              type="text"
              placeholder="Enter Book Name..."
            />
          </div>
          <div>
            <button type="submit" className="search-btn">
              <i className="fa fa-search fa-2x" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
