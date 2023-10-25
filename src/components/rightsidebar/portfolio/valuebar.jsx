import React from "react";

const Valuebar = () => {
    return (
    <div className="xl:p-3 p-2 bg-skin-hover">
        <h3 className="text-sm font-medium text-skin-base mb-2.5">Equity Portfolio Overview</h3>
        <div className="items-center border border-skin-grey bg-skin-white shadow-all px-5 xl:px-6 py-3 xl:py-[1.188rem] h-[5.188rem] xl:h-[4.375rem] flex flex-col xl:flex-row">
            <div className="flex w-full xl:w-auto">
                <div className="w-1/2 xl:w-auto xl:mr-8">
                    <div className="flex items-center">
                        <div className="items-center hidden sm:flex justify-center bg-skin-royalblue rounded-full xl:h-8 xl:w-8 h-6 w-6 mr-2 text-skin-white text-xxs xl:text-sm">
                            <span className="icon-rupee"></span>
                        </div>
                        <div className="xl:items-start xl:flex xl:flex-col flex items-center justify-start">
                            <p className="text-xs text-skin-base xl:w-32 font-normal mb-1 inline">Investment Amount</p>
                            <h2 className="font-semibold text-base leading-4 inline xl:block ml-1 xl:ml-0 whitespace-nowrap min-w-[6.688rem] text-skin-bold relative group">
                                <span className="icon-rupee text-xs font-medium mr-px"></span>11,655.00
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 xl:w-auto">
                    <div className="flex items-center">
                        <div className="items-center hidden sm:flex justify-center bg-skin-royalblue rounded-full xl:h-8 xl:w-8 h-6 w-6 mr-2 text-skin-white text-xxs xl:text-sm">
                            <span className="icon-market-value"></span>
                        </div>
                        <div className="xl:items-start xl:flex xl:flex-col flex items-center justify-start">
                            <p className="text-xs text-skin-base xl:w-32 font-normal mb-1 inline">Market Value</p>
                            <h2 className="font-semibold text-base leading-4 inline xl:block ml-1 xl:ml-0 whitespace-nowrap min-w-[6.688rem] text-skin-bold relative group">
                                <span className="icon-rupee text-xs font-medium mr-px"></span>10,230.00
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-10">
                    <div className="w-px h-10 bg-skin-greyBg"></div>
                </div>
            </div>
            <div className="flex xl:ml-8 w-full xl:w-auto">
                <div className="w-1/2 xl:w-auto">
                    <div className="flex xl:flex-col flex-row mt-4 xl:mt-0 justify-items-start">
                        <div className="flex justify-start items-center mb-1">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center rounded-full h-3 w-3 mr-1 ml-1.5 xl:ml-0 text-skin-white bg-skin-down rotate-180">
                                    <img src="https://cdn.angelone.in/sparkweb/icons/arrow-icon.svg" />
                                </div>
                                <p className="text-xs text-skin-base font-normal whitespace-nowrap">Overall Loss</p>
                            </div>
                        </div>
                        <div className="flex justify-start min-w-[10rem] w-auto">
                            <div className="flex">
                                <h3 className="font-semibold text-sm leading-4 block xl:inline whitespace-nowrap ml-1 xl:ml-0 relative group text-skin-down">
                                    <span className="icon-rupee text-[0.6875rem] font-bold mr-px"></span>1,424.67
                                </h3>
                                <p className="text-xs text-skin-muted font-medium ml-1 block xl:inline whitespace-nowrap">-12.22%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 xl:w-auto">
                    <div className="flex xl:flex-col flex-row mt-4 xl:mt-0 justify-items-start">
                        <div className="flex justify-start items-center mb-1">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center rounded-full h-3 w-3 mr-1 ml-1.5 xl:ml-0 text-skin-white bg-skin-down rotate-180">
                                    <img src="https://cdn.angelone.in/sparkweb/icons/arrow-icon.svg" />
                                </div>
                                <p className="text-xs text-skin-base font-normal whitespace-nowrap">Today's Loss</p>
                            </div>
                        </div>
                        <div className="flex justify-start min-w-[10rem] w-auto">
                            <div className="flex">
                                <h3 className="font-semibold text-sm leading-4 block xl:inline whitespace-nowrap ml-1 xl:ml-0 relative group text-skin-down">
                                    <span className="icon-rupee text-[0.6875rem] font-bold mr-px"></span>253.20
                                </h3>
                                <p className="text-xs text-skin-muted font-medium ml-1 block xl:inline whitespace-nowrap">-2.17%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Valuebar;