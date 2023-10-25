import React from 'react';
import Header from '../components/header/header'

const Home = ({ onSwitchMode }) => {
    return (
        <div className='w-full sm:w-[calc(100%_-_21.75rem)] border-skin-bgGrey relative border-l-4'>
            <div className='divide-x-4 divide-skin-grey bg-skin-white'>
                <div className='bg-skin-grey'>
                    <p>home content</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
