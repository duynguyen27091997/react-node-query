import React, {Fragment, useState} from 'react';
import {usePaginatedQuery} from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, greeting, page) => {

    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [page, setPage] = useState(1);
    const {resolvedData, latestData, status} = usePaginatedQuery(['planets', 'hello duy', page], fetchPlanets, {
        onSuccess: () => console.log('data fetched with no problems'),
    });

    return (
        <div>
            <h2>Planets</h2>
            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <Fragment>
                    <button onClick={()=> setPage(old => Math.max(old-1,1))}>Prev page</button>
                    <span>{page}</span>
                    <button onClick={()=> setPage(old => !latestData || !latestData.next ? old : old + 1)}>Next page</button>
                    <div>
                        {resolvedData.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default Planets;