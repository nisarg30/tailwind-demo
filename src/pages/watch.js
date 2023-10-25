import React from "react";

import Header from "../components/header/header";
import Leftsidebar from "../components/leftsidebar/leftsidebar";
import Righsidebar from "../components/rightsidebar/rightsidebar";
const Watchpage = () => {
    return (
        <div className='bg-skin-grey tabular-nums min-h-screen'>
            <Header />
            <div className="container mx-auto sm:pt-14 pt-0">
                <div className="h-2 bg-skin-grey fixed w-full left-0 z-[12] hidden sm:block top-14">
                    <div className="container relative mt-2 mx-auto">
                        <div className="flex mx-auto bg-skin-white">
                            <Leftsidebar />
                            <Righsidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watchpage;