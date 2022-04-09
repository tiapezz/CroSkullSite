import React from "react";
import './home.css'
import { Link } from "react-router-dom";


const ipfsUri128 = "https://croskull.mypinata.cloud/ipfs/QmZn1HvYE1o1J8LhNpxFTj5k8LQb2bWT49YvbrhB3r19Xx/"
const ipfsUri480 = "https://croskull.mypinata.cloud/ipfs/QmWu9bKunKbv8Kkq8wEWGpCaW47oMBbH6ep4ZWBzAxHtgj/"
const ipfsUriFull = "https://croskull.mypinata.cloud/ipfs/"
const Home = () => {


    return (
        <>
            <div>
                New Home
            </div>
            <div>
                <Link to="/graveyard" className="nav-link"><button>GRAVEYARD</button></Link>
            </div>
        </>
    )
}

export default Home;