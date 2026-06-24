import { useQuery } from "@tanstack/react-query";
import { locationsApi } from "../api/locationsApi";

export function useLocation(id) {
  return useQuery({
    queryKey: ["locations", id],
    queryFn: () => locationsApi.getById(id),
    enabled: Boolean(id),
  });
}
