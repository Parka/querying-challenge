import React, { useState, useEffect } from 'react';
import Filter from './filter';
import Table from './table';
import fetch from './fetch';

const App = () => {
  const [listado, setListado] = useState([]);
  useEffect(() => {
    const getData = async () =>{
      const response = await fetch();
      const results = await response.json();
      console.log(results);
    };
    getData();
  }, []);

  return (
    <>
      <Filter />
      <Table />
    </>
  )
}

export default App;