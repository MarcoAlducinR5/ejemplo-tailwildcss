import React from 'react';

function Grid(){
    return(
        <React.Fragment>
            <br />
            <span>Grid Basico</span>
            <div className="flex">
                <div className="w-full p-4 bg-blue-800"></div>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4 bg-blue-800"></div>
                <div className="w-1/2 p-4 bg-blue-600"></div>
            </div>
            <div class="flex">
                <div class="w-1/3 p-4 bg-blue-800"></div>
                <div class="w-1/3 p-4 bg-blue-600"></div>
                <div class="w-1/3 p-4 bg-blue-500"></div>
            </div>
            <div class="flex">
                <div class="w-1/4 p-4 bg-blue-700"></div>
                <div class="w-1/4 p-4 bg-blue-400"></div>
                <div class="w-1/4 p-4 bg-blue-600"></div>
                <div class="w-1/4 p-4 bg-blue-500"></div>
            </div>
            <div class="flex">
                <div class="w-1/5 p-4 bg-blue-700"></div>
                <div class="w-1/5 p-4 bg-blue-400"></div>
                <div class="w-1/5 p-4 bg-blue-600"></div>
                <div class="w-1/5 p-4 bg-blue-500"></div>
                <div class="w-1/5 p-4 bg-blue-800"></div>
            </div>
            <div class="flex">
                <div class="w-1/6 p-4 bg-blue-700"></div>
                <div class="w-1/6 p-4 bg-blue-400"></div>
                <div class="w-1/6 p-4 bg-blue-600"></div>
                <div class="w-1/6 p-4 bg-blue-500"></div>
                <div class="w-1/6 p-4 bg-blue-300"></div>
                <div class="w-1/6 p-4 bg-blue-800"></div>
            </div>
            <span>Grid Responsivo con columnas de anchura fija</span>
            <div class="flex flex-wrap m-4">
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-green-700 mb-1"></div>
            </div>
            <span>Grid Responsivo con columnas de anchura variable</span>
            <div class="flex flex-wrap m-4">
                <div class="w-full sm:w-1/2 md:w-2/5 lg:w-1/6 xl:w-7/12 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/3 md:w-1/5 lg:w-3/6 xl:w-1/12 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/6 md:w-2/5 lg:w-2/6 xl:w-4/12 p-4 bg-green-900 mb-1"></div>

                <div class="w-full sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/12 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/3 md:w-3/5 lg:w-1/6 xl:w-5/12 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-1/5 lg:w-4/6 xl:w-6/12 p-4 bg-green-900 mb-1"></div>

                <div class="w-full sm:w-1/3 md:w-1/5 lg:w-2/6 xl:w-3/12 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/6 md:w-1/5 lg:w-2/6 xl:w-4/12 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/2 md:w-3/5 lg:w-2/6 xl:w-5/12 p-4 bg-green-900 mb-1"></div>

                <div class="w-full sm:w-1/2 md:w-3/5 lg:w-3/6 xl:w-8/12 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/6 md:w-1/5 lg:w-2/6 xl:w-2/12 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-2/12 p-4 bg-green-900 mb-1"></div>

                <div class="w-full sm:w-1/2 md:w-2/5 lg:w-2/6 xl:w-5/12 p-4 bg-green-700 mb-1"></div>
                <div class="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-3/12 p-4 bg-green-500 mb-1"></div>
                <div class="w-full sm:w-1/6 md:w-2/5 lg:w-3/6 xl:w-4/12 p-4 bg-green-900 mb-1"></div>
            </div>
        </React.Fragment>
    );
}

export {Grid};