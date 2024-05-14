import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
} from '@mui/material';

import { vehicleType } from '../types';

export const VehicleCard: React.FC<vehicleType> = ({
  title,
  description,
  icons,
  type,
  level,
  nation,
}) => {
  return (
    <Grid item xs={5}>
      <Card>
        <CardMedia sx={{ height: 320 }} image={icons.large} title={title} />
        <CardContent sx={{ height: 320 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontSize: 24, fontWeight: 300, mt: 1 }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 300, mt: 1 }}>
            {description.length > 200 ? description.substring(0, 200) + '...' : description}
          </Typography>
          <Typography sx={{ mt: 1 }} component="legend">
            Класс судна:
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>
            {type.title}
          </Typography>
          <Typography sx={{ mt: 1 }} component="legend">
            Уровень: {level}
          </Typography>
          <Rating name="read-only" size="small" max={10} value={level} readOnly />
          <Typography sx={{ mt: 1 }} component="legend">
            Страна: {nation.title}
          </Typography>
          <CardMedia
            component="img"
            sx={{ height: 60, objectFit: 'contain', width: 100 }}
            image={nation.icons.large}
            title={nation.title}
          />
        </CardContent>
        <CardActions>
          <Button sx={{ fontWeight: 300 }} size="small" href="https://korabli.su/">
            Узнать больше
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
