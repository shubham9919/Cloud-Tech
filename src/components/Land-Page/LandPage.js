import React from 'react'
import Topic from '../Topic/Topic'
//  import data from '../../content/Home-Page-Content.json'
import '../../components-style/Topic.css'
import '../../components-style/LandPage.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import Axios from 'axios'



/**
 *
 * @description This component will dynamically load all the cards based on count and render at once.
 * @link https://stackoverflow.com/questions/45500682/react-iterate-and-insert-components-based-on-count-of-array
 * @return {*} 
 */
function LandPage(params) {
    const state = useState()
    const [pageData, updatedData] = useState(null)
    useEffect(() => {
        Axios.get(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=Home-Page-Content`).then((response) => {
            console.log(response)
            updatedData(response)
        })
    }, [])

    // console.log("params in LandPage ---> " + JSON.stringify(params))
    const FLAG = params.searchkeys ? true : false
    let newObjects = []
    if (FLAG && pageData != null) {
        for (const key of params.searchkeys) {
            for (const props of pageData.data) {
                // console.log("props -->" + JSON.stringify(props))
                // console.log("key -->" + JSON.stringify(key))
                if (props.keys.includes(key.toLowerCase())) {
                    newObjects.push(props)
                }
            }
        }
        newObjects.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i) // to remove duplicate entries in array of searched elements.
        return (
            <React.Fragment>
                <Header></Header>
                <div className="LandPage">
                    <div className="flexbox-container">
                        {newObjects.map(item => <Topic key={item} Topic_Props={item} />)}
                    </div>
                </div>

            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="LandPage">
                    <div className="flexbox-container">
                        {!pageData ? <h1>Loading</h1> : pageData.data.map(item => <Topic key={item} Topic_Props={item} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LandPage