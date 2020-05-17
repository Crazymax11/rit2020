import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Search } from "./index";
import "mobx-react/batchingForReactDom";
import { render, fireEvent, screen } from "@testing-library/react";
import { pageObject } from "./pageObject";
import { createApiMock } from "./apiMock";

const mock = new MockAdapter(axios);

const waitForRerender = () =>
  new Promise((resolve) => setTimeout(resolve, 100));

describe("Search", () => {
  describe("withoutPageObject", () => {
    it("должен запросить поиск и отобразить результаты поиска", async () => {
      const searchSpy = jest.fn();
      mock.onGet("/api/v1/search").replyOnce((request) => {
        searchSpy(request.params);
        return [200, { title: "TITLE", description: "DESCRIPTION" }];
      });

      render(<Search />);

      const inputEl = screen.getByPlaceholderText("Что ищешь?");
      fireEvent.change(inputEl, { target: { value: "ТЕСТ" } });
      const buttonEl = screen.getByText("Найти");
      fireEvent.click(buttonEl);

      await waitForRerender();

      expect(searchSpy).toHaveBeenCalledWith({ search: "ТЕСТ" });
      expect(screen.getByText("TITLE")).toBeInTheDocument();
    });
  });

  describe("withPageObject", () => {
    const apiMock = createApiMock(mock);
    it("должен запросить поиск и отобразить результаты поиска", async () => {
      const spy = apiMock.search({
        title: "TITLE",
        description: "DESCRIPTION",
      });

      render(<Search />);

      pageObject.search("ТЕСТ");

      await waitForRerender();

      expect(spy).toHaveBeenCalledWith({ search: "ТЕСТ" });
      expect(pageObject.getResult()).toEqual({
        title: "TITLE",
        description: "DESCRIPTION",
      });
    });
  });
});
