import React from 'react';

//accepts cell content property and class used for td node
function StudentTableCell({ cellContent, nodeClass }) {
    let content = cellContent;
    return (
        <td className={nodeClass}>
            {content}
        </td>
    )
}

export default StudentTableCell;