import React from 'react';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
const Righsidebar = () => {
    return (
        <div className='w-full sm:w-[calc(100%_-_21.75rem)] border-skin-bgGrey relative border-l-4'>
            <Portfolio />
        </div>
    );
};

export default Righsidebar;
