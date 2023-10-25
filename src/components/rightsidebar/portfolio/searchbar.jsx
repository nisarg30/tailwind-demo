import React from 'react';

const Searchbar = () => {
    return (
        <div className="flex items-center justify-between relative z-20 bg-skin-white px-4 py-3 sticky border-b border-skin-grey top-16">
            <div className="flex">
                <div className="border border-skin-grey flex items-center h-9 pl-3 mr-2 w-80">
                    <em className="icon-search mr-2 text-skin-bold"></em>
                    <input className="focus:outline-0 w-full text-sm text-skin-black bg-skin-white" type="text" placeholder="Search for stock or company" id="portfolio-search" />
                </div>
                <div className="flex relative group">
                    <button id="btn_dropdownshow" className="icon-filter border relative border-skin-grey cursor-pointer flex items-center justify-center h-9 w-9 text-skin-bold"></button>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                        <span>Filter</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
