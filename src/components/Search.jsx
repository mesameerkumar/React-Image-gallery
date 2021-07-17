import React from "react";

const Search =()=>{
    return(
        <div className="max-w-sm rounded overflow-hidden my-11 mx-auto">
        <form className="w-full max-w-sm">
        <div className="items-center flex border-b border-b-2 border-purple-500 py-2">
        <input className="bg-transparent border-none w-full text-gray-600 mr-3 px-2 py-1 leading-tight focus:outline-none appearance-none"
        type="text" placeholder="Image Term" />
        <button  type="submit" className="bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white px-2 py-1 rounded flex-shrink-0" >
        Search
        </button>
        </div>

        </form>
        </div>
    )
}

export default Search;