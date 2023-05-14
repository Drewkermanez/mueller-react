import React from 'react';

function StudentTableCell({ cellContent, nodeClass }) {
    let content = cellContent;
    return (
        <td className={nodeClass}>
            {content}
        </td>
    )
}

export default StudentTableCell;