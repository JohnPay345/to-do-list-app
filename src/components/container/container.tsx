import React from 'react'
import style from './container.module.css'

type Props = {
    children: React.ReactElement[] | React.ReactElement;
    isfdCol?: boolean;
    isfdColRev?: boolean;
    isWidthFlex?: boolean;
    width?: string | null;
}

export const Container: React.FC<Props> = ({ children, isfdCol, isfdColRev, isWidthFlex, width }) => {
    function swithWidth(width: string) {
        switch (width) {
            case 'w-1': return style.w1;
            case 'w-2': return style.w2;
            case 'w-3': return style.w3;
            case 'w-4': return style.w4;
            case 'w-5': return style.w5;
            default: break;
        }
    }

    return (
        <div className={
            `${style.container} ${isfdCol ? style.fdCol : ''} 
            ${isfdColRev ? style.fdColRev : ''}
            ${isWidthFlex ? swithWidth(width ?? "w-1") : ''}
            `
        }>{children}</div>
    )
}
