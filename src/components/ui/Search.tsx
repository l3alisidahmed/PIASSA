'use client';

import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    
    return (
        <div className="flex flex-row items-center gap-5 bg-black/15 p-2 rounded-sm">
            <img src="/Logo.png" alt="" />
            <p>|</p>
            <input
                className='bg-transparent outline-none border-none text-white w-96'
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;