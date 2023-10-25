import React from "react";

const Stickylefttop = () => {
    return (
    <div className="sticky top-0 z-10 border-b border-skin-grey">
        <div className="border-b border-skin-grey px-3 flex justify-between items-center text-skin-bold">
            <div className="flex items-center">
                <div className="group relative">
                    <button className="min-w-[2.5rem] h-[2.57rem] truncate max-w-[6rem] border-b-2 border-skin-white hover:text-skin-blue font-medium px-1 xl:px-2 leading-6 text-sm outline-none text-skin-select font-semibold">watch</button>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 -ml-8 translate-x-0 top-8">
                    <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2 left-3 translate-x-0"></span>
                    <span className="truncate max-w-[7rem]">watch</span>
                </div>
            </div>
            <div className="group relative">
                <button className="min-w-[2.5rem] h-[2.57rem] truncate max-w-[6rem] border-b-2 border-skin-white hover:text-skin-blue font-medium px-1 xl:px-2 leading-6 text-sm outline-none">2</button>
                <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                    <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                    <span className="truncate max-w-[7rem]">mywatchlist</span>
                </div>
            </div>
                <div className="group relative">
                    <button className="min-w-[2.5rem] h-[2.57rem] truncate max-w-[6rem] border-b-2 border-skin-white hover:text-skin-blue font-medium px-1 xl:px-2 leading-6 text-sm outline-none">3</button>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                    <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                    <span className="truncate max-w-[7rem]">ops</span>
                </div>
            </div>
            <div className="group relative">
                <button className="min-w-[2.5rem] h-[2.57rem] truncate max-w-[6rem] border-b-2 border-skin-white hover:text-skin-blue font-medium px-1 xl:px-2 leading-6 text-sm outline-none">4</button>
                <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                    <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                    <span className="truncate max-w-[7rem]">Current</span>
                </div>
            </div>
            <div className="group relative">
                <button className="min-w-[3.06rem] h-[2.57rem] border-b-2 border-skin-white hover:text-skin-select font-medium p-3 text-xs" role="presentation">
                    <span className="icon-plus font-bold"></span>
                </button>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                        <span className="">Create new watchlist</span>
                    </div>
                </div>
            </div>
            <div className="relative">
                <button className="hover:text-skin-select font-medium right-0 group relative" role="presentation">
                    <span className="icon-setting text-base" id="watchlistSetting"></span>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8 -ml-[6.25rem] translate-x-0">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2 left-[6.25rem]"></span>
                        <span className="">Manage Watchlist</span>
                    </div>
                </button>
                <button className="hover:text-skin-select font-medium ml-3 group relative hover:z-[21]" role="presentation">
                    <span className="icon-expand-watchlist text-base" id="expandWatchList"></span>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8 -ml-[6.25rem] translate-x-0">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2 left-[6.25rem]"></span>
                        <span className="">Expand Watchlist</span>
                    </div>
                </button>
            </div>
        </div>
        <div className="px-3 flex flex-row items-center py-2">
            <div className="flex-1 -ml-2 relative group">
                <div className="flex flex-row">
                    <div className=" px-2 border-skin-grey flex flex-row items-center h-9  w-full max-w-xs">
                        <span className="icon-search text-skin-bold text-sm"></span>
                            <input className="focus:outline-none px-3 w-full text-sm leading-5 font-normal text-skin-black h-8 placeholder:text-skin-muted outline-none bg-skin-white  " type="text" placeholder="Stocks, Futures &amp; Options" />
                    </div>
                </div>
                <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100  ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8 ">
                    <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2  "></span>
                    <span className=" ">Search <span className="w-auto px-1 h-4 leading-4 ml-1 text-center inline-block rounded-sm font-semibold bg-skin-base">Ctrl + S</span></span>
                </div>
            </div>
            <div className="relative">
                <button className="mx-2 border border-skin-grey h-8 w-8 text-xs text-center leading-8 text-skin-bold group relative hover:z-[21]" role="presentation">
                    <span className="icon-align-left" id="watchlistSortFilter"></span>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100  ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2   ">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2  "></span>
                        <span className=" ">Sort by</span>
                    </div>
                </button>
            </div>
            <div className="relative">
                <button id="watchlistFilterID" className="border border-skin-grey h-8 w-8 text-sm text-center leading-8 text-skin-bold group relative" role="presentation">
                    <span className="icon-filter" id="watchlistTypeFilter"></span>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100  ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2   ">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2  "></span>
                        <span className=" ">Filter</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Stickylefttop;