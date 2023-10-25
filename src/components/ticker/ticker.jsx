import React from 'react';

const Ticker = () => {

  return (
    <div className="flex flex-row px-3 justify-between items-center py-1 group cursor-pointer relative border-b border-skin-grey last:border-b-0 h-[3.188rem] focus:outline-none pl-8 bg-skin-white hover:bg-skin-hover" id="watchlist-row-0" draggable="false" tabIndex="0" role="listitem" style={{'userSelect': 'none', 'cursor': 'grab'}}>
      <div className="flex justify-center flex-col">
          <div>
              <div className="flex flex-row items-center">
                  <h4 className="font-medium text-sm leading-[1.07rem] mr-1 text-skin-bold">COALINDIA</h4>
                  <span className="bg-skin-grey group-hover:bg-skin-white text-xxs divide-x divide-skin-grey mr-2 px-0.5 py-px text-skin-bold font-medium rounded-sm">NSE</span>
              </div>
          </div>
      </div>
      <div className="flex flex-col items-end">
          <span className="font-medium text-sm leading-[1.07rem] text-skin-down ">312.40<span className="text-[0.5rem] ml-1 relative -top-[0.125rem] icon-triangle rotate-180 inline-block"></span></span>
          <span className="text-xs leading-[0.875rem] font-medium text-skin-base mt-1">-2.40 (-0.76%)</span>
      </div>
      <div className="hidden group-hover:block absolute left-[4.6875rem] top-0">
          <div id="0" data-ind="0" className="group block min-h-min absolute z-5 top-10 bottom-0 left-0 transition-opacity duration-100 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <div className="group bg-skin-white px-2 border border-skin-overlapMuted h-12 rounded-lg flex flex-row items-center max-w-63 shadow-watchlistHover justify-between w-[15.75rem]">
                  <div className="h-2.5 w-2.5 bg-skin-white absolute origin-bottom-left rotate-45 transform border-skin-overlapMuted rounded-sm left-5 -ml-2 z-10 border-l border-t -top-2.5"></div>
                  <div className="relative group">
                      <button className="text-skin-up hover:text-skin-white hover:bg-skin-up rounded w-7 h-7 flex items-center justify-center font-medium text-lg transition-all duration-100 ease-in-out outline-none">B</button>
                  </div>
                  <div className="relative group">
                      <button className="text-skin-down hover:text-skin-white hover:bg-skin-down rounded mx-2 w-7 h-7 flex items-center justify-center font-medium text-lg outline-none">S</button>
                  </div>
                  <div className="relative group">
                      <button role="presentation" className="text-skin-base hover:text-skin-blue hover:bg-skin-grey rounded w-7 h-7 flex items-center justify-center mr-2 outline-none">
                          <span className="icon-basket-order text-20"></span>
                      </button>
                  </div>
                  <div className="relative group">
                      <button className="rounded w-7 h-7 flex items-center justify-center mr-2 text-skin-base hover:text-skin-blue hover:bg-skin-grey outline-none" role="presentation">
                          <span className="icon-overview text-20"></span>
                      </button>
                  </div>
                  <div className="relative group">
                      <button role="presentation" className="text-skin-base hover:text-skin-blue hover:bg-skin-grey rounded w-7 h-7 flex items-center justify-center mr-2 outline-none&quot;">
                          <span className="icon-option-chain text-base"></span>
                      </button>
                  </div>
                  <div className="relative group">
                      <button className="rounded w-7 h-7 flex items-center justify-center mr-2 text-skin-base hover:text-skin-blue hover:bg-skin-grey outline-none" role="presentation">
                          <span className="icon-flag text-lg"></span>
                      </button>
                  </div>
                  <div>
                      <button role="presentation" className="rounded relative w-5 h-7 flex items-center justify-center hover:text-skin-blue hover:bg-skin-grey outline-none text-skin-base">
                          <span className="icon-three-dots"></span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      <div className="flex flex-row items-center absolute z-1 top-0 bottom-0 left-3 group-hover:opacity-100 opacity-0">
          <span className="icon-drag text-skin-bold font-bold text-xs"></span>
      </div>
      <span className="absolute -left-1 top-1/2 -mt-1.5"></span>
    </div>
  );
};

export default Ticker;
