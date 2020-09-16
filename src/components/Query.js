import React from 'react';
import {useQuery} from "react-query";

const fetchQuery = (key,num,obj)=> {
    console.log(key,num,obj)
    return fetch(
        "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
}

const Query = () => {
    const user = 1;
    const {isIdle,
        isLoading,
        isError,
        data,
        error,
        refetch,
        isFetching} = useQuery(['query', 5, { preview: true,other:undefined },],fetchQuery,{enabled:false});

    return (
        <div>
            <h2>Query tutorials</h2>
            {isIdle ? (
                'Not ready...'
            ) : isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <div>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <strong><span aria-label={'icon'} role={'img'}>👀</span> {data.subscribers_count}</strong>{" "}
                        <strong><span aria-label={'icon'} role={'img'}>✨</span> {data.stargazers_count}</strong>{" "}
                        <strong><span aria-label={'icon'} role={'img'}>🍴</span> {data.forks_count}</strong>
                    </div>
                </>
            )}
        </div>
    );
};

export default Query;