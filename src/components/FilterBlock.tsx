import React, { useEffect, useState } from 'react';
import { Box, TextField, Autocomplete, Rating, Typography } from '@mui/material';
import { BASE_URL, QUARY_ALL_NATIONS, QUARY_ALL_TYPES } from '../utils/quaries';
import { filterSetType, nationType, vehicleClassType } from '../types';

interface FilterBlockProps {
  filter: filterSetType;
  onFilterChangeHandler: any;
}

export const FilterBlock: React.FC<FilterBlockProps> = ({ filter, onFilterChangeHandler }) => {
  const [nations, setNations] = useState([]);
  const [vehicleClasses, setVehicleClasses] = useState([]);

  const nationOptions = nations.map((nation: nationType) => nation.title);
  const classOptions = vehicleClasses.map((vehicleClass: vehicleClassType) => vehicleClass.title);

  useEffect(() => {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: QUARY_ALL_NATIONS }),
    })
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setNations(data.nations);
      });

    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: QUARY_ALL_TYPES }),
    })
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setVehicleClasses(data.vehicleTypes);
      });
  }, []);

  return (
    <Box sx={{ mt: 6, mr: 'auto', ml: 8, maxWidth: 360 }}>
      <Autocomplete
        disablePortal
        options={nationOptions}
        sx={{ width: 330, mt: 1 }}
        renderInput={(params) => <TextField {...params} label="Страна" />}
        value={filter.nation ? filter.nation : null}
        onChange={(event: any, newValue: string | null) => {
          newValue
            ? onFilterChangeHandler({ ...filter, nation: newValue })
            : onFilterChangeHandler({ ...filter, nation: null });
        }}
      />
      <Autocomplete
        disablePortal
        options={classOptions}
        sx={{ width: 330, mt: 1 }}
        renderInput={(params) => <TextField {...params} label="Класс судна" />}
        value={filter.vehicleClass ? filter.vehicleClass : null}
        onChange={(event: any, newValue: string | null) => {
          newValue
            ? onFilterChangeHandler({ ...filter, vehicleClass: newValue })
            : onFilterChangeHandler({ ...filter, vehicleClass: null });
        }}
      />
      <Rating
        name="level-filter"
        sx={{ mt: 1 }}
        size="large"
        max={10}
        value={filter.level}
        onChange={(e, newValue: number | null) => {
          newValue
            ? onFilterChangeHandler({ ...filter, level: newValue })
            : onFilterChangeHandler({ ...filter, level: 0 });
        }}
      />
    </Box>
  );
};
