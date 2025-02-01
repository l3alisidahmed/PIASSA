'use client';

import React, { useState, useEffect } from 'react';
import { useSearch } from '@/providers/SearchProvider';

const Search = () => {

    const { search, setSearch } = useSearch();
    
    return (
        <div className="flex flex-row items-center gap-5 bg-black/15 p-2 rounded-sm">
            <img src="/Logo.png" alt="" />
            <p>|</p>
            <input
                className='bg-transparent outline-none border-none text-white w-96'
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;