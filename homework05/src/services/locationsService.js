import fallbackLocations from "../data/locations.json";

const BASE_URL = "https://6a3b0d49e4a07f202e14883f.mockapi.io/locations";

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response("Not Found", { status: response.status });
  }

  return response.json();
}

async function getById(id) {
  // GET /locations/:id нестабільно віддає 404 на цьому MockAPI-проєкті
  // (ймовірно, через розсинхрон внутрішнього id після імпорту даних),
  // тож беремо весь список і фільтруємо на клієнті — список працює надійно.
  const all = await fetchJson(BASE_URL);
  const location = all.find((item) => String(item.id) === String(id));

  if (!location) {
    throw new Response("Location not found", { status: 404 });
  }

  return location;
}

async function get(id) {
  try {
    return id ? await getById(id) : await fetchJson(BASE_URL);
  } catch (error) {
    console.warn(
      "[locationsService] MockAPI недоступний, використовую локальні дані:",
      error.message || error
    );

    if (id) {
      const location = fallbackLocations.find(
        (item) => String(item.id) === String(id)
      );

      if (!location) {
        throw new Response("Location not found", { status: 404 });
      }

      return location;
    }

    return fallbackLocations;
  }
}

export const locationsService = { get };