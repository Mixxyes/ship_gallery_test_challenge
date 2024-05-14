export const BASE_URL = 'https://vortex.korabli.su/api/graphql/glossary/';

export const QUARY_ALL_VEHICLES = `query AllVehicles($languageCode: String = "ru", $filteredIds: [String]) {
  vehicles(lang: $languageCode, vehicleIds: $filteredIds) {
    id
    name
    title
    description
    icons {
      large
      small
    }
    type {
      name
      title
    }
    level
    nation {
      name
      title
      color
      icons {
        large
      }
    }
  }
}`;

export const QUARY_ALL_NATIONS = `query AllNations($languageCode: String = "ru") {
  nations(lang:$languageCode) {
    name
    title
  }
}`;

export const QUARY_ALL_TYPES = `query AllVehiclesType ($languageCode: String = "ru") {
  vehicleTypes(lang: $languageCode) {
    name
    title
    icons{
      normal
      premium
    }
  }
}`;
