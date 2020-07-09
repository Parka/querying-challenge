import { createSlice } from '@reduxjs/toolkit';
import fetch from './fetch';

export const tableSlice = createSlice({
  name:'table',
  initialState:{
    id: '',
    CUIT: '',
    name: '',
    active: false,
    inactive: false,
    result:{},
    loading: false,
  },
  reducers:{
    set_id: (state, action) => {
      state.id = action.payload;
    },
    set_CUIT: (state, action) => {
      state.CUIT = action.payload;
    },
    set_name: (state, action) => {
      state.name = action.payload;
    },
    set_active: (state, action) => {
      state.active = action.payload;
      state.inactive = action.payload?false:state.inactive;
    },
    set_inactive: (state, action) => {
      state.inactive = action.payload;
      state.active = action.payload?false:state.active;
    },
    set_result: (state, action) => {
      state.result = action.payload;
    },
    set_loading: (state, action) => {
      state.loading = action.payload;
    }
  }
})

export const {
  set_id,
  set_CUIT,
  set_name,
  set_active,
  set_inactive,
  set_result,
  set_loading
} = tableSlice.actions;

const filterTemplate = ({field, value}) => typeof value === "boolean" ?
  `{"${field}": ${value}}`:
  `{"${field}": {"$regex": ".*${value}.*"}}`;

const queryTemplate = (filters) => filters.length?`?q={"$and":[${filters.map(filterTemplate).join(',')}]}` : '';

export const getFilteredData = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const {id='', CUIT='', name='', active=false, inactive=false} = state.table;
  const filters = [
    ...id.split(' ').filter(Boolean).map(value => ({field: 'ID', value})),
    ...CUIT.split(' ').filter(Boolean).map(value => ({field: 'CUIT', value})),
    ...name.split(' ').filter(Boolean).map(value => ({field: 'Comercio', value})),
    active && {field: 'active', value: true},
    inactive && {field: 'active', value: false},
  ].filter(Boolean);
  const response = await fetch(queryTemplate(filters));
  const result = await response.json();
  dispatch(set_result(result))
  dispatch(set_loading(false));
}

export default tableSlice.reducer;
