import axios from "axios";

export interface SearchResult {
  title: string;
  description: string;
}

export class SearchService {
  async search(search: string): Promise<SearchResult> {
    const { data, status } = await axios.get(`/api/v1/items?search=${search}`);

    if (status !== 200) {
      throw new Error("что-то пошло не так");
    }

    return data;
  }
}
