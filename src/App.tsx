import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Gallery } from './components/GalleryBlock';
import { FilterBlock } from './components/FilterBlock';
import { filterSetType, vehicleType } from './types';

import { BASE_URL, QUARY_ALL_VEHICLES } from './utils/quaries';

import './App.css';

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  const [filter, setFilter] = useState<filterSetType>({
    level: 0,
    nation: null,
    vehicleClass: null,
  });

  const [renderQty, setRenderQty] = useState<number>(10);

  const onFilterChangeHandler = (filter: filterSetType) => {
    setFilter(filter);
    setRenderQty(10);
  };

  useEffect(() => {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: QUARY_ALL_VEHICLES }),
    })
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setVehicles(data.vehicles);
      });
  }, []);

  let filteredVehicles: vehicleType[] = vehicles;
  if (filter.level) {
    filteredVehicles = filteredVehicles.filter(
      (vehicle: vehicleType) => vehicle.level === filter.level
    );
  }
  if (filter.nation) {
    filteredVehicles = filteredVehicles.filter(
      (vehicle: vehicleType) => vehicle.nation.title === filter.nation
    );
  }
  if (filter.vehicleClass) {
    filteredVehicles = filteredVehicles.filter(
      (vehicle: vehicleType) => vehicle.type.title === filter.vehicleClass
    );
  }

  return (
    <Container sx={{ mt: 5, mb: 5 }} maxWidth="lg">
      <Box>
        <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: 42 }}>
          Галерея игровых моделей (проект Lesta games)
        </Typography>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: 20 }}>
          ознакомьтесь со множеством доступных вариантов кораблей и субмарин
        </Typography>
      </Box>
      <FilterBlock {...{ filter, onFilterChangeHandler }} />
      <Gallery {...{ filter, renderQty, filteredVehicles }} />
      {renderQty < filteredVehicles.length ? (
        <Button
          size="large"
          sx={{ fontWeight: 300, ml: '50%', transform: 'translate(-50%, 0)', mt: 4 }}
          onClick={() => {
            setRenderQty((renderQty) => renderQty + 10);
          }}>
          Показать больше кораблей
        </Button>
      ) : null}
    </Container>
  );
};

export default App;
