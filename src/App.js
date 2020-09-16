import React from 'react';
// import Navbar from './components/Navbar';
// import Planets from './components/Planets';
// import People from './components/People';
import { useIsFetching } from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools';
import {ClimbingBoxLoader} from "react-spinners";
// import Query from "./components/Query";
import Pagination from "./components/Pagination";


function App() {
    // let [page, setPage] = useState('planets');
    const isFetching = useIsFetching()
    return (
        <>
            {/*<div className="App">*/}
            {/*<h1>Star Wars Info</h1>*/}
            {/*  <Navbar setPage={setPage} />*/}
            {/*  <div className="content">*/}
            {/*    { page === 'planets' ? <Planets /> : <People /> }*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="App">
                {isFetching ? <div className={'loading'}>
                    <ClimbingBoxLoader
                        size={20}
                        color={"#fff"}
                        loading={isFetching}
                    />
                </div> : null}
                {/*<Query/>*/}
                <Pagination/>
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </>
    );
}

export default App;
