import { apiService } from "../../../services/apiService";
import { IPerson } from "../../../types/person";

export interface IGetAllPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

export const getAll = async () => {
  const response = await apiService.get<IGetAllPeopleResponse>(`people`);
  return response.data;
}
