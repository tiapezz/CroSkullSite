import React, { useEffect, useState } from "react";
import './home.css'
import { useDispatch } from "react-redux";


const ipfsUri128 = "https://croskull.mypinata.cloud/ipfs/QmZn1HvYE1o1J8LhNpxFTj5k8LQb2bWT49YvbrhB3r19Xx/"
const ipfsUri480 = "https://croskull.mypinata.cloud/ipfs/QmWu9bKunKbv8Kkq8wEWGpCaW47oMBbH6ep4ZWBzAxHtgj/"
const ipfsUriFull = "https://croskull.mypinata.cloud/ipfs/"
const Home = () => {
    let dispatch = useDispatch()


    useEffect( () => {

    }, [])


    return (
        <>
            <div>
                PAGINA HOME
            </div>
        </>
    )
}

export default Home;