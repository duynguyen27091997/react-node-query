import React, {useState} from 'react';
import {usePaginatedQuery} from "react-query";


const fetchPagination = async (key, greeting, page) => {

    const res = await fetch(`/hey`);
    return res.json();
}

const Pagination = () => {
    const [page, setPage] = useState(1);
    const {resolvedData,latestData,error,isError,isLoading} = usePaginatedQuery(['pagination','hello duy',page],fetchPagination,{
        onSuccess : data => {

        }
    })
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                // `resolvedData` will either resolve to the latest page's data
                // or if fetching a new page, the last successful page's data
                <div>
                    {resolvedData.results.map((planet,index) => (
                        <p key={index}>{planet.name}</p>
                    ))}
                </div>
            )}
            <span>Current Page: {page}</span>
            <button
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={page === 0}
            >
                Previous Page
            </button>{' '}
            <button
                onClick={() =>
                    // Here, we use `latestData` so the Next Page
                    // button isn't relying on potentially old data
                    setPage(old => (!latestData || !latestData.next ? old : old + 1))
                }
                disabled={!latestData || !latestData.next}
            >
                Next Page
            </button>
        </div>
    );
};

export default Pagination;