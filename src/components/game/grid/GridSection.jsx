import React from 'react';

export const GridSection = ({ turn }) => {

    const classNames = ["button-select"];

    if (turn) classNames.push("button-sel");

    return (
        <td>
            <button className={ classNames.join(" ") } type="button"></button>
        </td>
    )
}
