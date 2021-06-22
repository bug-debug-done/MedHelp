
import React from "react";

function Navbaroptions ({url,name,Icon}){
return (<div className = "flex flex-wrap pl-32 pt-5 font-light text-base hover:bg-indigo-700 hover:text-white rounded-full transition: 100ms ease-in-out">
<Icon/>
<a href = {url} className = "pl-2">{name}</a>
</div>);
}

export default Navbaroptions;