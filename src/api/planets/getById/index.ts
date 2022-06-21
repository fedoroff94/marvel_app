import { apiService } from "../../../services/apiService";
import { IPlanet } from "../../../types/planets";

export const getById = async ({ id }: { id: string }) => {
  const response = await apiService.get<IPlanet>(`planets/${id}`);
  return response.data;
}
