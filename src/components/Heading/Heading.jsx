import React from "react";
import SearchBar from "./SearchBar";

function Heading({ onSubmitSearch, onSearchChange, value }) {
    return (
        <div className='heading'>
            <h1 className='heading-title'>Notes App</h1>
            <SearchBar onSubmit={onSubmitSearch} onChange={onSearchChange} value={value} />
            <h1 className='heading-title'>Versi 1.0</h1>
        </div>
    )
}
export default Heading;