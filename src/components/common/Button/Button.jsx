import React from 'react'
import classNames from "classnames";
import styles from './Button.module.scss'


export const Button = ({fill,children,upper}) => {
    return (
        <button className={classNames(styles.button,{
            [styles.buttonFill] : fill
        })}>
            {upper ? children.toUpperCase() : children}
        </button>
    )
}
