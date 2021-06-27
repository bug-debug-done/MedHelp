import React from 'react'
import Avatar from "@material-ui/core/Avatar"
/* {These are the components under the post section} */
import { FiBookmark } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";

const Feedbar = () => {
    return ( <
        div className = "flex w-4/7 md:block border-l-2 border-gray-300 px-4 ml-96" >
        <
        div >

        <
        hr className = "" / >
        <
        /div> { /* {This is the post feed section} */ } <
        div className = "Feed-section" > { /* {this is post 1} */ } <
        div className = "post-card border-b-2" >
        <
        div className = "flex flex-row p-2 items-center mt-2.5" >
        <
        Avatar className = "h-8 w-8"
        alt = "profile"
        src = "https://media.istockphoto.com/vectors/stethoscope-heart-icon-vector-id1139549801?k=6&m=1139549801&s=612x612&w=0&h=b6UMApNZb0I5QdRDRSkUfl7ZMPwM5pb4vxB9IS9-Lso=" /
        >
        <
        div className = "ml-4" >
        <
        h4 className = "font-bold text-sm mb-1.25" > Doctor_username < /h4> <
        /div> <
        /div> <
        img className = "w-3/7"
        src = "https://image.freepik.com/free-vector/flat-world-health-day-instagram-posts-collection_52683-57896.jpg"
        alt = "" / >
        <
        p className = "text-md text-gray-500 font-medium py-2 flex flex-shrink" > Description < /p> <
        div className = "flex justify-between py-3 text-2xl" >
        <
        BiHeart / >
        <
        FiMessageSquare / >
        <
        FiNavigation / >
        <
        FiBookmark / >
        <
        /div> <
        /div> <
        /div> { /* {This is post 2} */ } <
        div className = "post-card border-b-2 " >
        <
        div className = "flex flex-row p-2 items-center mt-2.5" >
        <
        Avatar className = "h-8 w-8"
        alt = "profile"
        src = "https://media.istockphoto.com/vectors/stethoscope-heart-icon-vector-id1139549801?k=6&m=1139549801&s=612x612&w=0&h=b6UMApNZb0I5QdRDRSkUfl7ZMPwM5pb4vxB9IS9-Lso=" /
        >
        <
        div className = "ml-4" >
        <
        h4 className = "font-bold text-sm mb-1.25" > Doctor_username < /h4> <
        /div> <
        /div> <
        img className = "w-3/7"
        src = "https://image.freepik.com/free-vector/flat-world-health-day-instagram-posts-collection_52683-57896.jpg"
        alt = "" / >
        <
        p className = "text-md text-gray-500 font-medium py-2 flex flex-shrink" > Description < /p> <
        div className = "flex justify-between py-3 text-2xl" >
        <
        BiHeart / >
        <
        FiMessageSquare / >
        <
        FiNavigation / >
        <
        FiBookmark / >
        <
        /div> <
        /div> <
        /div>


    )
};

export default Feedbar