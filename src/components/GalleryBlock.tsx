import React from 'react';
import { Grid } from '@mui/material';
import { VehicleCard } from './VehicleCard';
import type { vehicleType, filterSetType } from '../types';

interface GalleryPropType {
  filter: filterSetType;
  renderQty: number;
  filteredVehicles: vehicleType[];
}

export const Gallery: React.FC<GalleryPropType> = ({ filter, renderQty, filteredVehicles }) => {
  return (
    <Grid container justifyContent="space-around" sx={{ marginTop: 2 }} rowSpacing={4}>
      {filteredVehicles.slice(0, renderQty).map((vehicle: vehicleType) => (
        <VehicleCard key={vehicle.id} {...vehicle}></VehicleCard>
      ))}
    </Grid>
  );
};
