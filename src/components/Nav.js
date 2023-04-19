import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus, setLibraryStatus})=> {
    return(
        <nav>
            <h1></h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library &nbsp;
                <FontAwesomeIcon icon={faHeadphones}/>
            </button>
        </nav>
    )
}

export default Nav;