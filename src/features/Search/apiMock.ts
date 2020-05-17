import MockAdapter from "axios-mock-adapter/types";
import { SearchResult } from "./Service";

export const createApiMock = (mock: MockAdapter) => ({
  search(searchResult: SearchResult) {
    const spy = jest.fn();
    mock.onGet("/api/v1/search").replyOnce((request) => {
      spy(request.params);
      return [200, searchResult];
    });
    return spy;
  },
});
