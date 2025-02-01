'use client';

import { createContext, useState, useContext } from "react";

interface SearchContextType {
    search: string;
    setSearch: (search: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }:{ children: React.ReactNode }) => {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}

export default SearchProvider;