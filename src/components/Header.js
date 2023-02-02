import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'

const Header = () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <header className="header">
            <h1 className="header_title">Map Mate</h1>
            <p className="header_subtitle">{message}</p>
        </header>
    )
}

export default Header;