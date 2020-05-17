import { fireEvent, screen } from "@testing-library/react";

export const pageObject = {
  search(searchString: string) {
    const inputEl = screen.getByPlaceholderText("Что ищешь?");
    fireEvent.change(inputEl, { target: { value: searchString } });
    const buttonEl = screen.getByText("Найти");
    fireEvent.click(buttonEl);
  },

  getResult() {
    const resultEl = screen.getByTestId("search-result");
    return {
      title: resultEl.querySelector("h3")!.textContent,
      description: resultEl.querySelector("div")!.textContent,
    };
  },
};
