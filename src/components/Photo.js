import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Photo() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 100;

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                setPhotos(response.data);
            })
    }, []);

    const totalPages = Math.ceil(photos.length / recordPerPage) || 1;
    const maxVisiblePages = 5; // Adjust this value according to your preference

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust startPage and endPage if needed to ensure we always show maxVisiblePages
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const numbers = [...Array(endPage - startPage + 1).keys()].map(n => startPage + n);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changePage = (index) => {
        setCurrentPage(index);
    }

    const nextPage = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const firstIndex = (currentPage - 1) * recordPerPage;
    const lastIndex = currentPage * recordPerPage;
    const records = photos.slice(firstIndex, lastIndex);

    return (
        <div className='m-5'>
            <p>Photo Page</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {records.map((item, id) => (
                    <div className='bg-slate-400 flex text-white p-4 rounded-lg border border-gray-300' key={id}>
                        <img src={item.thumbnailUrl} alt={`content of $(id)`} />
                        <div className="text-sm mx-2">
                            <p className="text-black">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <ul className='pagination flex flex-row justify-center'>
                <li className='page-item'><Link to="#" className='page-link mx-2' onClick={prevPage}>Prev</Link></li>
                {numbers.map((n, index) => (
                    <li className={`page-item mx-2 ${n === currentPage ? 'active' : ''}`} key={index}><Link to="#" className='page-link' onClick={() => changePage(n)}>{n}</Link></li>
                ))}
                <li className='page-item'><Link to="#" className='page-link mx-2' onClick={nextPage}>Next</Link></li>
            </ul>
        </div>
    )
}

export default Photo;
