import React from 'react';

function Tipografia(){
    return (
        <React.Fragment>
            <br />
            <h1 className='text-3xl font-sans'>
                Hello World!
            </h1>
            <p className='text-xl font-serif'>Fugiat ex sunt sint ea voluptate ad ad Lorem duis ipsum voluptate.</p>
            <p className='text-xs font-mono'>Id anim laborum irure qui elit elit tempor officia sunt do cupidatat laboris cupidatat do.</p>
            <ul className='text-4xl'>
                <li className='italic'>lorem ipsum</li>
                <li className='font-bold'>lorem ipsum</li>
                <li className='font-extrabold'>lorem ipsum</li>
                <li className='font-light'>lorem ipsum</li>
                <li className='font-hairline'>lorem ipsum</li>
            </ul>
        </React.Fragment>
    );
}

export {Tipografia};