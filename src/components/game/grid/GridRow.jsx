import React from 'react'

import { GridSection } from './GridSection'

export const GridRow = () => {
    return (
        <tbody>
            <tr>
                <GridSection />
                <GridSection />
                <GridSection />
            </tr>
        </tbody>
    )
}
