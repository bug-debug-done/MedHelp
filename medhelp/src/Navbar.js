import Navbaroptions from "./Navbaroptions";
import { FaMedrt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { BiMessageSquareAdd} from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { RiNotification3Line } from "react-icons/ri";
import { FaQuestion} from "react-icons/fa";
import {ImProfile } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";


const Navbar = ()=> { 
return (<>
{/* this part is for mobile view part in this part i have taken logo and one button */}
<div className = " mobilemenu bg-indigo-700 md:hidden flex justify-between items-center " >
<div className = " animate-pulse text-red-600 pl-4 inline-flex"><FaMedrt className = "w-5 h-5 "/><h1 className = " pl-2 " >Med Hunt</h1></div>
<button className = "p-4 focus:outline-none focus:bg-gray-300 text-white" ><TiThMenuOutline/></button>
</div>

{/* this part is for logo Med hunt and here i have taken a div and put the icon and word all together */}
<div className = " navbar cursor-pointer border-r-2 w-64 h-screen border-solid border-gray-300 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">

<div className = " animate-pulse flex flex-wrap pl-32 pt-8 pb-5 text-red-600 ">
<FaMedrt className = "w-5 h-5 "/><h1 className = "pl-2" >Med Hunt</h1></div>

{/* this part is for navbaroptions such as home messages ,etc icons and words i have created a component of navbar options and imported components here and created navbar options */}
<nav >
<Navbaroptions url = "#" name = "Home" Icon = {RiHomeHeartFill} />
<Navbaroptions url = "#" name = "Messages" Icon = {BiMessageSquareAdd}/>
<Navbaroptions url = "#" name = "Explore" Icon = {HiHashtag}/>
<Navbaroptions url = "#" name = "Notifications" Icon = {RiNotification3Line}/>
<Navbaroptions url = "#" name = "FAQ" Icon = {FaQuestion}/>
<Navbaroptions url = "#" name = "Profile" Icon = {ImProfile}/>
</nav>
</div></>);
}
export default Navbar;
