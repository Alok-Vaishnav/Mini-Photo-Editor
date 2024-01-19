import React from 'react'
import Styles from '../Styles/Filter.module.css'
import img from '../assets/Filter image.jpg'
function Filter() {
    return (
        <div className={Styles.Filterdiv}>
            <div className={Styles.Filter} id={Styles.First}>
                <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww " alt="Filter Img" />
                <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Secound}><img src={""} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Third}><img src='' alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Fourth}><img src={img} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.fifth}><img src={img} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Sixth}><img src={img} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Seventh}><img src={img} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
            <div className={Styles.Filter} id={Styles.Eighth}><img src={img} alt="Filter Img" />
            <div className={Styles.mask}></div>
            </div>
        </div>
    )
}

export default Filter;
