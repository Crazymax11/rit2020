import { SearchService, SearchResult } from "./Service";
import { observable, action, runInAction } from "mobx";

export class SearchStore {
  @observable
  isLoading: boolean = false;

  @observable
  result?: SearchResult;

  @observable
  error?: Error;

  constructor(private searchService: SearchService = new SearchService()) {}

  @action.bound
  async search(searchString: string): Promise<void> {
    this.isLoading = true;
    return this.searchService.search(searchString).then(
      (result) => {
        
        runInAction(() => {
          this.result = result;
        })
        
      },
      (error) => {
        this.error = error;
      }
    ).finally(() => {
      this.isLoading = false;
    })
  }
}
