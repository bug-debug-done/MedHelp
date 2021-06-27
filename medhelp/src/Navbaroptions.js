import React from "react";

function Navbaroptions({ url, name, Icon }) {
    return ( < div className = "flex flex-wrap pl-3 cursor-pointer pt-3 pb-3 py-2 font-bold text-md mb-2 hover:bg-indigo-400 hover:text-white items-center border-30px rounded-full transition: 100ms ease-in-out" >
        <
        Icon / >
        <
        a href = { url }
        className = "pl-2" > { name } < /a> < /
        div > );
}

export default Navbaroptions;