import React from "react";

const Stocktable = () => {
    return (
    <div>
        <div className="h-[calc(100vh-14.6rem)] xl:h-auto overflow-x-auto xl:overflow-visible border-t border-skin-grey">
            <table className="table-auto xl:table-fixed w-full bg-skin-white ">
                <thead className="bg-skin-white sticky group top-0 z-10 text-skin-base text-left xl:top-[7.775rem]">
                    <tr className="shadow-bottomBorder text-sm leading-17 text-skin-base select-none h-8">
                        <th className="sticky z-10 left-0 bg-skin-white font-normal whitespace-nowrap px-4 h-8 leading-8 shadow-rightBorder w-60 cursor-pointer">
                            <div className="flex items-center">
                                <p>Stock Name</p>
                                <div className="-mt-px">
                                    <div className="relative">
                                        <div className="relative ml-1 top-px w-[0.3438rem] flex flex-col items-center">
                                            <span className="w-0 h-0 border-solid border-t-0 border-x-[0.21rem] border-b-[0.34rem] border-x-transparent cursor-pointer mb-px text-skin-bold border-skin-bold"></span>
                                            <span className="w-0 h-0 border-solid border-x-[0.21rem] border-t-[0.34rem] border-b-0 border-x-transparent cursor-pointer text-skin-bold border-skin-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 text-right">
                            <p>Qty</p>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 text-right">
                            <p>LTP</p>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 border-r border-skin-background text-right">
                            <p>ATP</p>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 text-right cursor-pointer">
                            <div className="flex justify-end items-center">
                                <p>Inv.Amt</p>
                                <div className="-mt-px">
                                    <div className="relative">
                                        <div className="relative ml-1 top-px w-[0.3438rem] flex flex-col items-center">
                                            <span className="w-0 h-0 border-solid border-t-0 border-x-[0.21rem] border-b-[0.34rem] border-x-transparent cursor-pointer mb-px text-skin-bold border-skin-bold"></span>
                                            <span className="w-0 h-0 border-solid border-x-[0.21rem] border-t-[0.34rem] border-b-0 border-x-transparent cursor-pointer text-skin-bold border-skin-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 border-r border-skin-background text-right cursor-pointer">
                            <div className="flex justify-end items-center">
                                <p>Mkt Value</p>
                                <div className="-mt-px">
                                    <div className="relative">
                                        <div className="relative ml-1 top-px w-[0.3438rem] flex flex-col items-center">
                                            <span className="w-0 h-0 border-solid border-t-0 border-x-[0.21rem] border-b-[0.34rem] border-x-transparent cursor-pointer mb-px text-skin-blue border-skin-blue"></span>
                                            <span className="w-0 h-0 border-solid border-x-[0.21rem] border-t-[0.34rem] border-b-0 border-x-transparent cursor-pointer text-skin-bold border-skin-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 text-right cursor-pointer">
                            <div className="flex justify-end items-center">
                                <p>Overall G/L</p>
                                <div className="-mt-px">
                                    <div className="relative">
                                        <div className="relative ml-1 top-px w-[0.3438rem] flex flex-col items-center">
                                            <span className="w-0 h-0 border-solid border-t-0 border-x-[0.21rem] border-b-[0.34rem] border-x-transparent cursor-pointer mb-px text-skin-bold border-skin-bold"></span>
                                            <span className="w-0 h-0 border-solid border-x-[0.21rem] border-t-[0.34rem] border-b-0 border-x-transparent cursor-pointer text-skin-bold border-skin-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className="font-normal whitespace-nowrap px-4 h-8 leading-8 text-right cursor-pointer">
                            <div className="flex justify-end items-center">
                                <p>Day's G/L</p>
                                <div className="-mt-px">
                                    <div className="relative">
                                        <div className="relative ml-1 top-px w-[0.3438rem] flex flex-col items-center">
                                            <span className="w-0 h-0 border-solid border-t-0 border-x-[0.21rem] border-b-[0.34rem] border-x-transparent cursor-pointer mb-px text-skin-bold border-skin-bold"></span>
                                            <span className="w-0 h-0 border-solid border-x-[0.21rem] border-t-[0.34rem] border-b-0 border-x-transparent cursor-pointer text-skin-bold border-skin-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="p-5">
                    <tr className="border-b relative border-skin-background text-sm text-skin-base cursor-pointer bg-skin-hover" id="portfolio-row-0">
                        <td title="TATA CONSULTANCY SERV LT" className="sticky left-0 whitespace-nowrap uppercase px-4 h-[3.6875rem] w-80 shadow-rightBorder z-[8] bg-skin-hover">
                            <div className="relative flex justify-between items-center font-medium text-skin-bold">
                                <p>TCS</p>
                                <div className="absolute top-1/2 -translate-y-1/2 bg-skin-white z-10 md:ml-8 lg:ml-20 xl:ml-32 bg-skin-white capitalize">
                                    <div className=" undefined border border-skin-muted shadow-md text-skin-base p-[0.188rem] flex rounded">
                                        <div className="relative group">
                                            <button className="h-6 min-w-[3.5rem] px-1 xl:px-2 text-xs py-1 mr-1 flex items-center hover:rounded text-skin-up hover:bg-skin-buy hover:text-skin-up">
                                                <span className="icon-buy mr-1 text-sm w-4"></span>
                                                <span className="font-medium">Buy</span>
                                            </button>
                                        </div>
                                        <div className="relative group">
                                            <button className="h-6 min-w-[3.5rem] px-1 xl:px-2 text-xs py-1 mr-1 flex items-center hover:rounded text-skin-down hover:bg-skin-sell hover:text-skin-down">
                                                <span className="icon-sell mr-1 text-sm w-4"></span>
                                                <span className="font-medium">Sell</span>
                                            </button>
                                        </div>
                                        <div className="relative group">
                                            <button className="outline-none w-4 h-6 p-px hover:rounded hover:bg-skin-hover hover:text-skin-select">
                                                <span className="icon-three-dots text-xs"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium">
                            <p>3</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium">
                            <p>3,410.15</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium border-r border-skin-background">
                            <p className="group relative">3,885.04</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium">
                            <p className="group relative">11,655.12</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium border-r border-skin-background">
                            <p className="group relative">10,230.45</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium text-sm">
                            <p className="text-skin-down group relative">-1,424.67</p>
                            <p className="text-xs text-skin-base font-normal">-12.22%</p>
                        </td>
                        <td className="px-4 h-[3.6875rem] text-right font-medium">
                            <p className="text-skin-down group relative">-253.20</p>
                            <p className="text-xs text-skin-base font-normal">-2.42%</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    )
}

export default Stocktable;