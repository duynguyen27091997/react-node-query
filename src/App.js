import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { ReactQueryDevtools } from 'react-query-devtools';
import Query from "./components/Query";


function App() {
  let [page, setPage] = useState('planets');

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
           <Query/>
       </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
