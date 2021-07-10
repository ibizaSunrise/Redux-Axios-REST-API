import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-gray-900 h-16 text-white">
            <div className= "pl-4">LOGO</div>
            <ul className= "flex items-center text-base justify-center pr-4">
                <li className="pr-4">Home</li>
                <li>About</li>
            </ul>
        </div>
    )
}
