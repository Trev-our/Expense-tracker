import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div style={{ marginBlockEnd: "40px" }}>
            <input
                type="text"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
        </div>
    );
}

export default SearchBar;