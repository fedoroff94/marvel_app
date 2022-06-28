import { apiService } from "../../../services/apiService";
import { IPlanet } from "../../../types/planets";

export interface IGetAllPlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanet[];
}

export const getAll = async () => {
  const response = await apiService.get<IGetAllPlanetsResponse>(`planets`);
  console.log(response);
  return response.data;
}
