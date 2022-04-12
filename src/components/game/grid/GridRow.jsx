import React from 'react'

import { GridSection } from './GridSection'

export const GridRow = ({ turn }) => {
    return (
        <tbody>
            <tr>
                <GridSection turn={ turn } />
                <GridSection turn={ turn } />
                <GridSection turn={ turn } />
            </tr>
        </tbody>
    )
}
