
import { useState, useEffect } from 'react';
import fetchNewsData from './api';

const useNewsStore = () => {
const [newsData, setNewsData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [searchMessage, setSearchMessage] = useState('');

useEffect(() => {
    const fetchData = async () => {
    setSearchMessage('Searching...');

    const { error, data } = await fetchNewsData(searchTerm);

    if (error) {
        setSearchMessage(error);
    } else {
        setSearchMessage('');
        setNewsData(data);
    }
    };

    fetchData();
}, [searchTerm]);

const handleSearch = (e) => {
    e.preventDefault();
    setSearchMessage('Searching...');
    // Trigger a new fetch when the user performs a search
    setNewsData([]); // Clear existing newsData
    // setNewsData will trigger a new fetch due to the dependency in useEffect
};

return { newsData, searchTerm, searchMessage, setSearchTerm, handleSearch };
};

export default useNewsStore;


