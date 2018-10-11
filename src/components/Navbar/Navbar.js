import React from "react";
import "./Navbar.css";

const Navbar = props =>

    
        <div class="row">
        
            <div class="col-sm font-weight-bold text-success" >
                CLICKY GAME
    </div>
    <div class="col-sm font-weight-bold text-success">
                Do not click the same image
    </div>
            <div class="col-sm font-weight-bold text-success">
                <ul>
                    Score:{props.score}
                    
                      |Top Score:{props.topscore}
                    
             </ul>
            </div>
            
        </div>
    



export default Navbar;
