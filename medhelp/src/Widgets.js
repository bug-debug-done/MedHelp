/* {This section consists profile and the live session part } */

import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";

let now = new Date().toLocaleTimeString();

const Widgets = () => {
    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    };
    setInterval(updateTime, 1000);

    return ( <
        div className = "flex-1 border-l-2 mr-40"
        onMouseOver = { updateTime } >
        <
        div className = "flex justify-between items-center p-2" >
        <
        h2 className = "text-md pl-2 font-bold" > Widgets < /h2> { /* {Login profile} */ } <
        div className = "flex flex-row items-center justify-end border border-gray-900 p-1 rounded-full" >
        <
        Avatar className = ""
        src = "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" / >
        <
        h2 className = "text-md pl-2 font-normal" > Medhelp_user < /h2> <
        /div>                     <
        /div> <
        div className = "flex items-center px-4" >
        <
        div className = "border border-gray-500 p-3 mt-5 rounded-2xl" >
        <
        div className = "flex p-2 items-center justify-between" >
        <
        div className = "flex items-center flex-row" >
        <
        Avatar className = ""
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvUHZsjkx-2HGCwBZrwue1Dv-M_kMqZkm5A&usqp=CAU" / >
        <
        h2 className = "pl-2" > Doctor_name < /h2> <
        /div> <
        div >
        <
        span className = "text-red-500" > • < /span> <
        p className = "text-red-500 text-xs font-medium inline-block" > LIVE < /p> <
        /div> <
        /div> <
        hr / >
        <
        p className = "text-gray-600 mt-3 mb-2 " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. < /p> <
        hr / >
        <
        div className = "flex flex-row justify-center text-base text-gray-700 mt-1" >
        <
        h1 > COUNTDOWN < /h1> <
        p className = "text-md font-normal pl-2" > { time } < /p> <
        /div>

        <
        /div>

        <
        /div>

        <
        div className = "flex items-center px-4" >
        <
        div className = "border border-gray-500 p-3 mt-5 rounded-2xl" >
        <
        div className = "flex p-2 items-center justify-between" >
        <
        div className = "flex items-center flex-row" >
        <
        Avatar className = ""
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvUHZsjkx-2HGCwBZrwue1Dv-M_kMqZkm5A&usqp=CAU" / >
        <
        h2 className = "pl-2" > Doctor_name < /h2> <
        /div> <
        div >
        <
        span className = "text-red-500" > • < /span> <
        p className = "text-red-500 text-xs font-medium inline-block" > LIVE < /p> <
        /div> <
        /div> <
        hr / >
        <
        p className = "text-gray-600 mt-3 mb-2 " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. < /p> <
        hr / >
        <
        div className = "flex flex-row justify-center text-base text-gray-700 mt-1" >
        <
        h1 > COUNTDOWN < /h1> <
        p className = "text-md font-normal pl-2" > { time } < /p> <
        /div>

        <
        /div>

        <
        /div>

        <
        div className = "flex items-center px-4" >
        <
        div className = "border border-gray-500 p-3 mt-5 rounded-2xl" >
        <
        div className = "flex p-2 items-center justify-between" >
        <
        div className = "flex items-center flex-row" >
        <
        Avatar className = ""
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvUHZsjkx-2HGCwBZrwue1Dv-M_kMqZkm5A&usqp=CAU" / >
        <
        h2 className = "pl-2" > Doctor_name < /h2> <
        /div> <
        div >
        <
        span className = "text-red-500" > • < /span> <
        p className = "text-red-500 text-xs font-medium inline-block" > LIVE < /p> <
        /div> <
        /div> <
        hr / >
        <
        p className = "text-gray-600 mt-3 mb-2 " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. < /p> <
        hr / >
        <
        div className = "flex flex-row justify-center text-base text-gray-700 mt-1" >
        <
        h1 > COUNTDOWN < /h1> <
        p className = "text-md font-normal pl-2" > { time } < /p> <
        /div>

        <
        /div>

        <
        /div>

        <
        div className = "flex items-center px-4" >
        <
        div className = "border border-gray-500 p-3 mt-5 rounded-2xl" >
        <
        div className = "flex p-2 items-center justify-between" >
        <
        div className = "flex items-center flex-row" >
        <
        Avatar className = ""
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvUHZsjkx-2HGCwBZrwue1Dv-M_kMqZkm5A&usqp=CAU" / >
        <
        h2 className = "pl-2" > Doctor_name < /h2> <
        /div> <
        div >
        <
        span className = "text-red-500" > • < /span> <
        p className = "text-red-500 text-xs font-medium inline-block" > LIVE < /p> <
        /div> <
        /div> <
        hr / >
        <
        p className = "text-gray-600 mt-3 mb-2 " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. < /p> <
        hr / >
        <
        div className = "flex flex-row justify-center text-base text-gray-700 mt-1" >
        <
        h1 > COUNTDOWN < /h1> <
        p className = "text-md font-normal pl-2" > { time } < /p> <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

    )
}

export default Widgets