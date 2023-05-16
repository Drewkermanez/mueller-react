import React from "react";

function FilterBar ({filterCallback}) {

    return (
        <>
            <input 
                placeholder='filter'
                onChange={e => filterCallback(e.target.value)}
            />
        </>
    )
}

export default FilterBar;