import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MUSIC_CIRCLE_LIST } from "./common/Helper";
import notfound from "../Component/Image/notfound.webp"

const Search = () => {
    // State to store the search query
    const [filterData, setFilterData] = useState("");
    // State to manage the number of cards displayed
    const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 cards
    const [loading, setLoading] = useState(false);

    // Filter the music list based on the search query
    const filteredList = MUSIC_CIRCLE_LIST.filter((obj) =>
        obj.description.toLowerCase().includes(filterData.toLowerCase())
    );


    const handleViewMore = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisibleCount(nextvalue => nextvalue + 3);
        }, 1000);
    };

    return (
        <div className="App bg-zinc-100 flex flex-col p-16">
            <form className="sticky top-0" action="">
                <div className="py-2 bg-zinc-100">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[1180px] p-3 border rounded"
                        value={filterData}
                        onChange={(e) => setFilterData(e.target.value)} // Update search query
                    />
                </div>
            </form>

            <p className="font-medium my-5">Latest Post</p>

            {/* Check if there are any filtered items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredList.length === 0 ? (
                    <div className=" flex flex-col items-center justify-center h-full bg-gradient-to-r from-zinc-50 to-indigo-100 p rounded-xl shadow-xl">
                    <img className="" src={notfound} alt="" />
                   
                   
                  
                </div>
                
                ) : (
                    filteredList.slice(0, visibleCount).map((obj, i) => (
                        <div

                            key={i}
                            className="bg-white overflow-hidden group relative after:absolute after:w-full after:h-0 hover:after:h-full after:duration-300 duration-300 
                            after:bg-opacity-20 after:bg-black after:top-0 after:left-0 p-8 border-2 border-slate-300 hover:border-black !border-opacity-25 hover:shadow-xl hover:shadow-gray-500 rounded shadow-lg flex flex-col w-[370px]"
                        >
                            <Link className="z-20 duration-300 group-hover:left-1/2 bg-black top-1/2 -left-[130%]  text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800  -translate-x-1/2 -translate-y-1/2 absolute p-3 px-5 rounded-lg " to={`/blog/${obj.url}`}>Read More</Link>
                            <img src={obj.Image} alt="" />

                            <p className="text-2xl line-clamp-3 font-medium">{obj.description}</p>
                            <div className="flex pt-4 gap-3 items-center">
                                <img className="w-10" src={obj.profile} alt="" />
                                <div className="flex gap-3 ">
                                    <h2 className="font-medium">{obj.title}</h2>
                                    <p>{obj.dob}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {visibleCount < filteredList.length && (
                <div className="flex justify-center">
                    <button
                        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        onClick={handleViewMore}
                    >
                        {loading ? "Loading ...." : "  View More"}

                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
