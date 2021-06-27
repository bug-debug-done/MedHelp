/*This is for the mobile view when the user clicks on the menu icon this section displays the contents of the menu */
import React from 'react'
import { Link } from "react-router-dom";

const Dropdown = () => {
    return ( <
        div className = "grid grid-rows-6 text-center items-center bg-indigo-700 text-indigo-100" >
        <
        Link to = "/" > Home < /Link> <
        Link to = "/Messages" > Messages < /Link> <
        Link to = "/Explore" > Explore < /Link> <
        Link to = "/Notifications" > Notifications < /Link> <
        Link to = "/FAQ" > FAQ < /Link> <
        Link to = "/Profile" > Profile < /Link> <
        Link to = "/Logout" > Logout < /Link> < /
        div >
    )
}

export default Dropdown