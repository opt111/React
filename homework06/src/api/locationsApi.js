import apiClient from "./axios";
import fallbackLocations from "../data/locations.json";

async function getAll() {
  try {
    const { data } = await apiClient.get("/locations");
    return data;
  } catch (error) {
    console.warn(
      "[locationsApi] MockAPI недоступний, використовую локальні дані:",
      error.message
    );
    return fallbackLocations;
  }
}

async function getById(id) {
  const all = await getAll();
  const location = all.find((item) => String(item.id) === String(id));

  if (!location) {
    throw new Error("Location not found");
  }

  return location;
}

export const locationsApi = { getAll, getById };
