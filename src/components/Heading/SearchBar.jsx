import React from "react";

function SearchBar({ onSubmit, onChange, value }) {
    return (
        <form className="heading-search" onSubmit={onSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Cari judul atau nama catatanmu disini..."
                value={value}
                onChange={onChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}
export default SearchBar