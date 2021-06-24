import React from 'react'
import styles from './list.module.scss'
export const List = ({children}) => {
    return (
       <ul className={styles.list}>
           <li>{children}</li>
           <li>About Us</li>
           <li>Careers</li>
           <li>Newsroom</li>
           <li>Contact</li>
       </ul>
    )
}
