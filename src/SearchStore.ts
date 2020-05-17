import { SearchService, SearchResult } from "./SearchService";
interface State {
  result?: SearchResult;
  isLoading: boolean;
  hasError?: Error;
}
// TODO: взять mobx
export class Store {
  state: State = {
    isLoading: false,
  };

  constructor(private searchService: SearchService) {}
  async search(searchString: string): Promise<void> {
      this.state.isLoading = true;
        this.searchService.search(searchString)
    
  }
}
