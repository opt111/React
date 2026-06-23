import { useRouteError } from "react-router-dom";

export default function ErrorRoute() {
  useRouteError();

  return <h1>Something went wrong</h1>;
}
