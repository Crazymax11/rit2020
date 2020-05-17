import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface Props {
  onSearch(search: string): any;
  isLoading: boolean;
  result: string;
}

function App(props: Props) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '100vh'
      }}
    >
      <div>
        <TextField placeholder="Что ищешь?" value={searchValue} onChange={(e) => {
          setSearchValue(e.target.value);
        }} />
        <Button onClick={() => {
          props.onSearch(searchValue)
        }} variant="contained" color="primary">
          Найти
        </Button>
      </div>
    </div>
  );
}

export default App;
