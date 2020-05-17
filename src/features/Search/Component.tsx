import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { SearchResult } from "./Service";
import { CircularProgress } from "@material-ui/core";
import { observer } from "mobx-react";
interface Props {
  onSearch(search: string): any;
  isLoading: boolean;
  result?: SearchResult;
}

export function Search(props: Props) {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 300,
      }}
    >
      <SearchContent {...props} />
    </div>
  );
}

function SearchContent(props: Props) {
  const [searchValue, setSearchValue] = useState("");
  if (props.isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 300,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (props.result) {
    return (
      <div data-testid="search-result">
        <h3>{props.result.title}</h3>
        <div>{props.result.description}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
      }}
    >
      <TextField
        placeholder="Что ищешь?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div style={{ height: 16 }} />

      <Button
        onClick={() => props.onSearch(searchValue)}
        variant="contained"
        color="primary"
      >
        Найти
      </Button>
    </div>
  );
}
