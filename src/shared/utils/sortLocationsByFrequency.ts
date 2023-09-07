import UserModel from "@/models/UserModel";

export interface CityFrequency {
  city: string;
  quantity: number;
}

// Helper function to count the frequency of each location
const countLocationFrequency = (list: UserModel[]): Record<string, number> => {
  const frequency: Record<string, number> = {};
  for (const item of list) {
    if (frequency[item.location]) {
      frequency[item.location]++;
    } else {
      frequency[item.location] = 1;
    }
  }
  return frequency;
};

// Main function to sort locations in descending order based on frequency
export const sortLocationsByFrequency = (list: UserModel[]): CityFrequency[] => {
  const frequency = countLocationFrequency(list);

  const sortedLocations = Object.entries(frequency).sort((a, b) => {
    return b[1] - a[1]; // sort in descending order
  });

  const sortedLocationsFormatted: CityFrequency[] = sortedLocations.map(
    ([city, quantity]) => {
      return { city, quantity };
    }
  );

  return sortedLocationsFormatted;
};
