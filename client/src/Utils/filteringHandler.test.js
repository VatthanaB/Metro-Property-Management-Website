import { filterData } from "./filteringHandler"; // replace with the actual path
import { describe, test, expect } from "@jest/globals";

// your tests here
describe("filterData function", () => {
  test("returns empty array when data and filters are empty", () => {
    const data = [];
    const filters = {
      type: [],
      location: [],
      bedrooms: null,
      bathrooms: null,
      minPrice: null,
      maxPrice: null,
      parking: null,
      amenities: [],
      vicinity: [],
    };
    expect(filterData(data, filters)).toEqual([]);
  });

  test("returns all properties when data is non-empty and filters are empty", () => {
    const data = [
      // your data here
    ];
    const filters = {
      type: [],
      location: [],
      bedrooms: null,
      bathrooms: null,
      minPrice: null,
      maxPrice: null,
      parking: null,
      amenities: [],
      vicinity: [],
    };
    expect(filterData(data, filters)).toEqual(data);
  });

  test("returns filtered properties when data and filters are non-empty", () => {
    const data = [
      // your data here
    ];
    const filters = {
      type: ["Apartment"],
      location: ["New York"],
      bedrooms: 2,
      bathrooms: null,
      minPrice: null,
      maxPrice: null,
      parking: true,
      amenities: ["Gym"],
      vicinity: ["Park"],
    };
    expect(filterData(data, filters)).toEqual([data[0]]);
  });

  test("returns empty array when data is non-empty and filters do not match", () => {
    const data = [
      // your data here
    ];
    const filters = {
      type: ["House"],
      location: ["New York"],
      bedrooms: 3,
      bathrooms: null,
      minPrice: null,
      maxPrice: null,
      parking: true,
      amenities: ["Gym"],
      vicinity: ["Park"],
    };
    expect(filterData(data, filters)).toEqual([]);
  });
});
