import { apiService } from "../../../services/apiService";
import { IPerson } from "../../../types/person";

export const getById = async ({ id }: { id: string }) => {
  const response = await apiService.get<IPerson>(`people/${id}`);
  return response.data;
}
