import React, { useEffect } from "react";
import Navi1 from "./navi1";
import { useState } from "react";
import { auth } from "../firebase";

function Home(props){
    
    return(
        <div>
    <Navi1/>
    <h2>{props.name ? "welcome - ${props.name}": "Login please"}</h2>
    
</div>
    );
}

export default Home;