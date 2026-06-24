import apiClient from "./axios";

const FALLBACK_USER = {
  id: "demo",
  name: "Demo User",
  email: "john@example.com",
  password: "password123",
};

async function getAllUsers() {
  const { data } = await apiClient.get("/users");
  return data;
}

async function login({ email, password }) {
  let users;

  try {
    users = await getAllUsers();
  } catch (error) {
    console.warn(
      "[authApi] MockAPI users недоступний, перевіряю демо-користувача:",
      error.message
    );

    if (email === FALLBACK_USER.email && password === FALLBACK_USER.password) {
      return FALLBACK_USER;
    }

    throw new Error("Невірний email або пароль");
  }

  const user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    throw new Error("Невірний email або пароль");
  }

  return user;
}

async function register({ name, email, password }) {
  const { data: user } = await apiClient.post("/users", {
    name,
    email,
    password,
  });

  return user;
}

export const authApi = { login, register };
