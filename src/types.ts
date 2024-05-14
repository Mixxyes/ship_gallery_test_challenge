export type vehicleType = {
  id: string;
  name: string;
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  type: {
    name: string;
    title: string;
  };
  level: number;
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      large: string;
    };
  };
};

export type nationType = {
  name: string;
  title: string;
};

export type vehicleClassType = {
  name: string;
  title: string;
  icons: {
    normal: string;
    premium: string;
  };
};

export type filterSetType = {
  level: number;
  nation: string | null;
  vehicleClass: string | null;
};
