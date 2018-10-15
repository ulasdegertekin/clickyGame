import React from "react";
import "./Navbar.css";

const Navbar = props =>

<div class="container border bg-primary">
  
    <div class="row m-5 bg-primary ">

        <div class="col-sm font-weight-bold text-white" >
            CLICKY GAME
        </div>
        <div class="col-sm font-weight-bold text-white">
            Do not click the same image

        </div>
        <div class="col-sm font-weight-bold text-white">
            <ul>
                Score: {props.score} |  Top Score: {props.topscore}

            </ul>
        </div>

    </div>
    </div>





export default Navbar;
