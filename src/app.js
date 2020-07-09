import React, { useState, useEffect } from 'react';
import Filter from './filter';
import Table from './table';
import { useDispatch } from 'react-redux';
import { getFilteredData } from './tableSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilteredData());
  }, []);

  return (
    <>
      <Filter />
      <Table />
    </>
  )
}

export default App;