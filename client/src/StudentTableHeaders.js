import React from "react";

function StudentTableHeaders({ tableHeaders }) {
    //hard coded table headers
    return (
        <tr className='student-table-row'>
            {tableHeaders.map((h, index) => {
                return (
                    <th key={`student-table-header-${index}`} className='student-table-header'>{h}</th>
                )
            })}
        </tr>
    )
}

export default StudentTableHeaders;