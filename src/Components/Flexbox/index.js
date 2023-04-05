import React from 'react';

function Flexbox(){
    return (
        <React.Fragment>
            <br />
            <div className='p-8 bg-gray-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex p-8 bg-green-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row p-8 bg-yellow-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-col p-8 bg-gray-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row-reverse p-8 bg-blue-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-col-reverse p-8 bg-pink-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex justify-start p-8 bg-purple-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex justify-end p-8 bg-cyan-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex justify-between p-8 bg-gray-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex justify-around p-8 bg-red-800'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row items-center justify-around h-64 p-8 bg-orange-400'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row items-start justify-around h-64 p-8 bg-fuchsia-500'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row items-end justify-around h-64 p-8 bg-indigo-900'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row items-stretch justify-around h-64 p-8 bg-lime-400'>
                <div className='block bg-gray-300 px-4 py-2 m-2'>1</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
            <div className='flex flex-row items-baseline justify-around p-8 bg-rose-300'>
                <div className='border-2 order-3 border-gray-300'>hello</div>
                <div className='block order-2 bg-gray-300 px-4 py-2 m-2'>2</div>
                <div className='block order-1 bg-gray-300 px-4 py-2 m-2'>3</div>
                <div className='block order-10 bg-gray-300 px-4 py-2 m-2'>3</div>
            </div>
        </React.Fragment>
    );
}

export {Flexbox};