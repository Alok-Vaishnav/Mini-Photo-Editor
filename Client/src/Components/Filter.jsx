import React from 'react'
import Styles from '../Styles/Filter.module.css'
function Filter() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Filterdiv}>
                <div className={Styles.Filter}>1
                </div>
                <div className={Styles.Filter}>2</div>
                <div className={Styles.Filter}>3</div>
                <div className={Styles.Filter}>4</div>
                <div className={Styles.Filter}>5</div>
                <div className={Styles.Filter}>6</div>
                <div className={Styles.Filter}>7</div>
                <div className={Styles.Filter}>8</div>
            </div>
        </div>
    )
}

export default Filter;
