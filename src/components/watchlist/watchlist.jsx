import React from 'react';
import Ticker from '../ticker/ticker';
const Watchlist = () => {
    return (
        <div className="!border-0 bg-skin-white">
            <div id='wldiv' className='overflow-y-auto -ml-1 pl-1 transition-all h-[calc(100vh_-_10.125rem)] '>
                <div id='wlContainer' aria-disabled='false' role='list' aria-describedby='dnd-zone-active' className='-mt-0.5' tabIndex={0}>
                    <Ticker />
                    <Ticker />
                    <Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker /><Ticker />
                    <Ticker />
                </div>
            </div>
        </div>
    );
};

export default Watchlist;
