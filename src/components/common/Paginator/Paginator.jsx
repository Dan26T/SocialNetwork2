import React, {useState} from 'react';
import styles from "./paginators.module.css";

const Paginator = React.memo(({currentPage, totalItemsCount,
                                  onPageChanged, pageSize, portionSize}) => {
    debugger
    let pages = [];
    for (let i = 1; i <= totalItemsCount; i++) {
        pages.push(i);
    }
    let pagesCount = Math.ceil(totalItemsCount/pageSize)
    let portionsCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortion] = useState(1)
    let letfPortonBorder = (portionNumber -1) * pageSize + 1
    let rigthPortonBorder = Math.min((portionNumber * pageSize), pagesCount)


    return <div className={portionNumber === 1 ? styles.pages + ' ' + styles.pagesStart : styles.pages }>
            {portionNumber > 1 && <div className={styles.btn}
                                        onClick={() => {setPortion(portionNumber - 1)}}>
                <a>prev</a>
            </div>}
            {pages
                .filter(p => p>=letfPortonBorder && p <= rigthPortonBorder)
                .map(p => {
                return <span className={currentPage === p ? styles.active + ' ' +  styles.page :  styles.page } onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
            {portionsCount > portionNumber && <div className={styles.btn} onClick={() => {setPortion(portionNumber+=1)}}>
                <a>next</a>
                </div>}
        </div>

})

export default Paginator
