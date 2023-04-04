import React from 'react';

function Display(){
    return (
        <React.Fragment>
            <br />
            <div className='mt-8 bg-gray-700'>
                <div className='block bg-gray-500 px-4 py-2'>1</div>
                <div className='block bg-gray-500 px-4 py-2 mt-2'>2</div>
                <div className='block bg-gray-500 px-4 py-2 mt-2'>3</div>
            </div>
            <div className='mt-8 bg-gray-700'>
                <div className='inline bg-gray-500 px-4 py-2'>1</div>
                <div className='inline bg-gray-500 px-4 py-2 mt-2'>2</div>
                <div className='hidden bg-gray-500 px-4 py-2 mt-2'>3</div>
                <div className='inline bg-gray-500 px-4 py-2 mt-2'>4</div>
            </div>
            <div className='mt-8 bg-gray-700'>
                <div className='inline-block bg-gray-500 px-4 py-2'>1</div>
                <div className='inline-block bg-gray-500 px-4 py-2 mt-2'>2</div>
                <div className='inline-block bg-gray-500 px-4 py-2 mt-2'>3</div>
            </div>
        </React.Fragment>
    );
}

export {Display};