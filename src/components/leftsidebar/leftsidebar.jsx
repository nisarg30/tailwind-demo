import React from 'react';
import Watchlist from '../watchlist/watchlist';
import Stickylefttop from '../stickylefttop/stickylefttop';
const WatchControl = () => {
    
    return (
        <div className="w-[21.75rem] relative hidden sm:block bg-skin-white h-[calc(100vh-4rem)]">
            <div className="divide-y-2 divide-skin-bgGrey scroll-smooth w-[21.75rem] bg-skin-white h-[calc(100vh-4rem)] rounded-t top-16 fixed">
                <Stickylefttop />
                <Watchlist />
            </div>
        </div>
    );
}

export default WatchControl;
