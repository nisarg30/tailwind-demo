import React from 'react';

const Header = () => {
    return (
    <div className="bg-skin-white py-[0.8438rem] px-3 xl:px-4 fixed left-0 right-0 top-0 z-30 w-full h-[3.75rem] sm:flex items-center hidden shadow-bottom ">
    <nav className="container mx-auto flex items-center justify-between h-[2.0625rem]">
        <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
                <img src="https://d2u8j8b25aupc8.cloudfront.net/assets/icons/logo.svg" alt="AngelOne Logo" className="h-5 w-5 mr-3" />
                <div className="relative group flex">
                    <div className="px-3 group-hover:rounded group-hover:bg-skin-select peer flex items-center h-[2.0625rem] py-1 min-w-[15rem]">
                        <span className="font-medium text-xs leading-3.5 mr-1 uppercase text-skin-bold">NIFTY</span>
                        <div className="flex items-center">
                            <span className="font-semibold text-sm leading-17 mr-1 text-color-text-red">19,542.65</span>
                            <span className="icon-triangle text-[0.5rem] mr-1 mt-px inline-block text-skin-down icon-triangle rotate-180"></span>
                            <span className="text-xs leading-3.5 text-skin-base font-medium">-82.05 (-0.42%)</span>
                        </div>
                    </div>
                    <div className="hidden peer-hover:flex hover:flex absolute pt-4 left-1/2 -ml-20 top-8">
                        <div className="bg-skin-white p-3 rounded-lg border border-skin-grey shadow-bottom">
                            <div className="h-3 w-3 bg-skin-white absolute origin-bottom-left rotate-45 transform border-l border-t border-skin-grey rounded-sm top-1 left-1/2 -ml-2"></div>
                            <ul>
                                <li className="flex justify-start items-center px-3 py-2 text-skin-bold font-medium cursor-pointer text-sm rounded hover:text-skin-blue hover:bg-skin-grey hover:py-2 hover:px-3">
                                    <span className="mr-3">
                                        <div className="icon-option-chain"></div>
                                    </span>
                                    <span className="whitespace-nowrap">Option Chain</span>
                                </li>
                                <li className="flex justify-start items-center px-3 py-2 text-skin-bold font-medium cursor-pointer text-sm rounded hover:text-skin-blue hover:bg-skin-grey hover:py-2 hover:px-3">
                                    <span className="mr-3">
                                        <div className="icon-charts"></div>
                                    </span>
                                    <span className="whitespace-nowrap">Charts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-0.5 h-5 bg-color-border-grey py-4 mx-1 last:hidden"></div>
                <div className="relative group flex">
                    <div className="px-3 group-hover:rounded group-hover:bg-skin-select peer flex items-center h-[2.0625rem] py-1 min-w-[15rem]">
                        <span className="font-medium text-xs leading-3.5 mr-1 uppercase text-skin-bold">BANK NIFTY</span>
                        <div className="flex items-center">
                            <span className="font-semibold text-sm leading-17 mr-1 text-skin-down">43,723.05</span>
                            <span className="icon-triangle text-[0.5rem] mr-1 mt-px inline-block text-skin-down icon-triangle rotate-180"></span>
                            <span className="text-xs leading-3.5 text-skin-base font-medium">-31.45 (-0.07%)</span>
                        </div>
                    </div>
                    <div className="hidden peer-hover:flex hover:flex absolute pt-4 left-1/2 -ml-20 top-8">
                        <div className="bg-skin-white p-3 rounded-lg border border-skin-grey shadow-bottom">
                            <div className="h-3 w-3 bg-skin-white absolute origin-bottom-left rotate-45 transform border-l border-t border-skin-grey rounded-sm top-1 left-1/2 -ml-2"></div>
                            <ul>
                                <li className="flex justify-start items-center px-3 py-2 text-skin-bold font-medium cursor-pointer text-sm rounded hover:text-skin-blue hover:bg-skin-grey hover:py-2 hover:px-3">
                                    <span className="mr-3">
                                        <div className="icon-option-chain"></div>
                                    </span>
                                    <span className="whitespace-nowrap">Option Chain</span>
                                </li>
                                <li className="flex justify-start items-center px-3 py-2 text-skin-bold font-medium cursor-pointer text-sm rounded hover:text-skin-blue hover:bg-skin-grey hover:py-2 hover:px-3">
                                    <span className="mr-3">
                                        <div className="icon-charts"></div>
                                    </span>
                                    <span className="whitespace-nowrap">Charts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className="xl:pr-0 pr-6">
            <div className="flex space-between flex-wrap grid-end-1">
                <div className="relative group">
                    <div className="cursor-pointer px-3 py-2 left-0 xl:text-base text-sm leading-17 xl:leading-19 text-skin-base font-medium hover:bg-skin-overlapHover hover:text-skin-select hover:rounded relative">
                        <span className="icon-home"></span>
                        <span className="ml-2">Home</span>
                    </div>
                </div>
                <div className="relative group">
                    <div className="cursor-pointer px-3 py-2 left-0 xl:text-base text-sm leading-17 xl:leading-19 text-skin-base font-medium hover:bg-skin-overlapHover hover:text-skin-select hover:rounded relative">
                        <span className="icon-watchlist"></span>
                        <span className="ml-2">Watchlist</span>
                    </div>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                        <span>Watchlist<span className="px-1 h-4 leading-4 ml-1 text-center inline-block rounded-sm font-semibold bg-skin-base">Shift + W</span></span>
                    </div>
                </div>
                <div className="relative group">
                    <div className="cursor-pointer px-3 py-2 left-0 xl:text-base text-sm leading-17 xl:leading-19 text-skin-base font-medium hover:bg-skin-overlapHover hover:text-skin-select hover:rounded relative">
                        <span className="icon-portfolio"></span>
                        <span className="ml-2">Portfolio</span>
                    </div>
                    <div className="flex flex-row items-center absolute z-20 whitespace-nowrap pointer-events-none rounded bg-skin-dark text-xs font-medium text-skin-white opacity-0 py-2 px-3 group-hover:opacity-100 ease-in-out duration-300 delay-100 top-full left-1/2 mt-3 -translate-x-1/2 top-8">
                        <span className="absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-skin-dark ease-in-out duration-300 delay-100 top-[-3px] left-1/2 -translate-x-1/2"></span>
                        <span>Portfolio<span className="px-1 h-4 leading-4 ml-1 text-center inline-block rounded-sm font-semibold bg-skin-base">F9</span></span>
                    </div>
                </div>
                <div className="relative group">
                    <div className="text-skin-select rounded cursor-pointer px-3 py-2 left-0 xl:text-base text-sm leading-17 xl:leading-19 text-skin-base font-medium hover:bg-skin-overlapHover hover-text-skin-select hover:rounded relative">
                        <span className="icon-orders"></span>
                        <span className="ml-2">Orders</span>
                    </div>
                </div>
                <div className="relative group">
                    <div className="cursor-pointer px-3 py-2 left-0 xl:text-base text-sm leading-17 xl:leading-19 text-skin-base font-medium hover:bg-skin-overlapHover hover:text-skin-select hover:rounded relative">
                        <span className="icon-account"></span>
                        <span className="ml-2">Account</span>
                    </div>
                </div>
            </div>
        </nav>
    </nav>
</div>

    );
};

export default Header;
