import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platfroms";
import APIClient, {FetchedDataResponse} from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 1000 * 60 * 60,
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;