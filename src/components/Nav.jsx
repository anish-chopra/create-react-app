import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="main-nav">
            <ul className="container">
                <Link to="/cats"> Cats </Link>

                <Link to="/dogs"> Dogs </Link>

                <Link to="/computer"> Cats </Link>

            </ul>
        </div>
    );
}

export default Nav;