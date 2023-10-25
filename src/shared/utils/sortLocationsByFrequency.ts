import { UserModelData } from '@/database/firebase';

export interface CityFrequency {
  city: string;
  quantity: number;
}

// Helper function to count the frequency of each location


// Main function to sort locations in descending order based on frequency
export const sortLocationsByFrequency = (
  locations: string[]
): CityFrequency[] => {
  
  const locationsFrequency: CityFrequency[] = [];
  const sortedLocations: CityFrequency[] = [];
  const sortedLocationsFormatted: CityFrequency[] = [];

  locations.forEach((location) => {
    const locationIndex = locationsFrequency.findIndex(
      (locationFrequency) => locationFrequency.city === location
    );

    if (locationIndex === -1) {
      locationsFrequency.push({ city: location, quantity: 1 });
    } else {
      locationsFrequency[locationIndex].quantity++;
    }
  });

  locationsFrequency.forEach((locationFrequency) => {
    sortedLocations.push(locationFrequency);
  });

  sortedLocations.sort((a, b) => b.quantity - a.quantity);

  sortedLocations.forEach((location) => {
    sortedLocationsFormatted.push({
      city: location.city,
      quantity: location.quantity,
    });
  });

  return sortedLocationsFormatted;
};
