import React from 'react'
import Topic from '../Topic/Topic'
import '../../components-style/Topic.css'
import '../../components-style/LandPage.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Loading from '../Loading/Loading'



/**
 *
 * @description This component will dynamically load all the cards based on count and render at once.
 * @link https://stackoverflow.com/questions/45500682/react-iterate-and-insert-components-based-on-count-of-array
 * @return {*} 
 */
function LandPage(params) {
    const [pageData, updatedData] = useState(null)
    useEffect(() => {
        Axios.get(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=Home-Page-Content`).then((response) => {
            updatedData(response)
        })
    }, [])

    const FLAG = params.searchkeys ? true : false
    let newObjects = []
    if (FLAG && pageData != null) {
        for (const key of params.searchkeys) {
            for (const props of pageData.data) {
                if (props.keys.includes(key.toLowerCase())) {
                    newObjects.push(props)
                }
            }
        }
        newObjects.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i) // to remove duplicate entries in array of searched elements.
        return (
            <React.Fragment>
                <Header></Header>
                <body className='Component-Topic-body'>
                    <div className="Component-Topic-cards">
                        {newObjects.map(item => <Topic key={item} Topic_Props={item} />)}
                    </div>
                </body>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <body className='Component-Topic-body'>
                    <div className="Component-Topic-cards">
                        {!pageData ? <Loading></Loading> : pageData.data.map(item => <Topic key={item} Topic_Props={item} />)}
                    </div>
                </body>
            </React.Fragment>
        )
    }
}

export default LandPage