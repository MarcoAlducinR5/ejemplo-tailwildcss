import React from 'react';

function Utilerias(){
    return (
        <React.Fragment>
            <div className='sm:rotate-45 hover:zoom mx-auto mt-16 h-40 w-40 bg-green-500'></div>
            <br />
            {/*  hover:bg-sky-700 */ }
            {/* <button class="bg-sky-500 dark:md:hover:bg-fuchsia-600"> */}
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Save changes
            </button>
            <button disabled className='disabled:opacity-75 bg-blue-500'>
                Submit
            </button>
        </React.Fragment>
    );
}

export {Utilerias};