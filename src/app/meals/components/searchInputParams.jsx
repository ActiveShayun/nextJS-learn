"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


const SearchInputParams = () => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])

    console.log('allMeals', meals);

    const router = useRouter();
    const pathName = usePathname()

    useEffect(() => {
        const searchQuery = { search };
        const searchQueryParams = new URLSearchParams(searchQuery)
        const url = `${pathName}?${searchQueryParams}`
        router.push(url)
    }, [search])
    return (
        <div>
            <input type="text" value={search} placeholder='Search meals'
                onChange={e => setSearch(e.target.value)} />
        </div>
    );
};

export default SearchInputParams;