import React from "react";
import Searchbar from "./searchbar";
import Valuebar from "./valuebar";
import Stocktable from "./stocktick";
const Portfolio = () => {
    return (
        <div>
            <Searchbar />
            <Valuebar />
            <Stocktable />
        </div>
    )
}

export default Portfolio;