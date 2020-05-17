import React, {  useState } from "react";
import { observer } from "mobx-react";
import { Search as Component } from "./Component";
import { SearchStore } from "./Store";

const ObserverSearch = observer(Component);

const useStore = (): SearchStore => {
    const [store, setStore]= useState<SearchStore | null>(null)
    
    if (!store) {
        let temp =new SearchStore()
        setStore(temp)
        return temp;
    }

    return store;
}

export const Search = observer(() => {
  const store = useStore();

  return (
    <Component
      isLoading={store.isLoading}
      result={store.result}
      onSearch={store.search}
    />
  );
});
