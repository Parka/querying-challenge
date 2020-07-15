import React, { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  set_id,
  set_CUIT,
  set_name,
  set_active,
  set_inactive,
  getFilteredData
} from './tableSlice';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const Filter = () => {
  const dispatch = useDispatch();
  const {id, CUIT, name, active, inactive} = useSelector(state => state.table);
  const [
    onSet_id,
    onSet_CUIT,
    onSet_name,
    onSet_active,
    onSet_inactive,
    onGetFilteredData
  ] = useMemo(()=>[
    e => dispatch(set_id(e.target.value)),
    e => dispatch(set_CUIT(e.target.value)),
    e => dispatch(set_name(e.target.value)),
    (e, val) => dispatch(set_active(val)),
    (e, val) => dispatch(set_inactive(val)),
    () => dispatch(getFilteredData()),
  ],[
    set_id,
    set_CUIT,
    set_name,
    set_active,
    set_inactive,
    getFilteredData,
  ]);

  return (
    <div>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" style={{paddingBottom: 20}}>Filtros</FormLabel>
        <Paper elevation={3} style={{padding: 20}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', paddingBottom:20}}>
            <TextField id="id" label="id" value={id} onChange={onSet_id}/>
            <TextField id="CUIT" label="CUIT" value={CUIT} onChange={onSet_CUIT}/>
            <TextField id="name" label="Comercio" value={name} onChange={onSet_name}/>
            <div style={{marginLeft:40}}>
              <FormControlLabel
                control={
                  <Checkbox checked={active} onChange={onSet_active} name="active" />
                }
                label="Solo activos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={inactive} onChange={onSet_inactive} name="inactive" />
                }
                label="Solo inactivos"
              />
            </div>
            <Button variant='contained' color='primary' onClick={onGetFilteredData}>Filtrar</Button>
          </div>
        </Paper>
      </FormControl>
    </div>
  )
}

export default Filter;