'use client';

import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    
    return (
        <div className="search flex flex-row items-center gap-5 bg-black/10 p-2">
            <img src="/Logo.png" alt="" />
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                style={{ width: '500px', backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'white' }}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;