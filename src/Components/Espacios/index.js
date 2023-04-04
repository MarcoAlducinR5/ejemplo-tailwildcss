import React from 'react';

function Espacios(){
    return (
        <div className='mx-4'>
            <br />
            <h1 className='
                h-32 w-1/5
                my-8 mx-auto
                bg-yellow-500 
                text-red-600'
            >
                {/* pt-8 pl-4
                ml-8 mt-16 mb-16 */}
                Hello World!
            </h1>
            <input className="
                py-1 px-4
                border-2 
                border-blue-500 
                placeholder-green-500" 
            type='text' placeholder='Lorem ipsum' />
        </div>
    );
}

export {Espacios};