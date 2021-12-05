import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import LandPage from "../Land-Page/LandPage";
import '../../components-style/normalize.css'
import Footer from "../Footer/Footer";
import axios from "axios";

function Home(props) {
    const [user, setUser] = useState(null)
    console.log(props)
    useEffect(() => {
      axios({
        method: "GET",
        withCredentials: true,
        url: `${process.env.REACT_APP_IS_LOGGEDIN}/${props.match.params.oauthid}`
        // url: `http://localhost:5000/*/${props.match.params.oauthid}`
      }).then((res) => {
        console.log(`--------------${JSON.stringify(res)}------------------`)
        setUser(res)
        sessionStorage.setItem('userToken', res)
      })
    }, [])
    return (
        <React.Fragment>
            <Header></Header>
            <LandPage></LandPage>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home