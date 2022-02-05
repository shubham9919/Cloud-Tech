import React, { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react/cjs/react.development'
import '../../components-style/Promotions.css'
import Promotions from './Promotions'
import Loading from '../Loading/Loading'


/**
 *
 * @description Wrapper for promotions component.
 * @return {*} 
 */
function PromotionsTiles() {
    const [promotionData, promotionsDataLoaded] = useState(null)

    useEffect(() => {
        Axios.get(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=promotionsData`).then((response) => {
            promotionsDataLoaded(response)
        })
    }, [])

    return (
        <React.Fragment>
            <div className='blogPosts'>
                <h2>Check Below Courses</h2>
            </div>
            <div className="component-Promotions-promotions">
                <div className='component-Promotions-tiles'>
                    {!promotionData ? <Loading></Loading> : promotionData.data.map(adv => <Promotions key={adv.No} advProps={adv}></Promotions>)}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#F5F5F5" fillOpacity="1" d="M0,128L360,0L720,224L1080,256L1440,320L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>

        </React.Fragment>
    )
}

export default PromotionsTiles