import React, { useState } from "react";
import { Search } from "./Component";
import { SearchResult } from "./Service";

export default {
  title: "Search",
};

export const Start = () => <Search isLoading={false} onSearch={() => {}} />;

export const Loading = () => <Search isLoading={true} onSearch={() => {}} />;

export const Result = () => (
  <Search
    isLoading={false}
    onSearch={() => {}}
    result={{ title: "Эффективное тестирование вёрстки", description: "Учимся тестировать!" }}
  />
);

export const Interactive = () => {
  const [result, setResult] = useState<undefined| SearchResult>(undefined)
  const [isLoading, setIsLoading] = useState(false);
  return <Search
    isLoading={isLoading}
    onSearch={() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false)
        setResult({ title: "Эффективное тестирование вёрстки", description: "Учимся тестировать!"})
      }, 3000)
    }}
    result={result}
  />
}