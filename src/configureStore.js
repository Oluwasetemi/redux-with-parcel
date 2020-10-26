import { throttle } from "lodash";
import { createStore } from "redux";
import { loadState, saveState } from "./local-storage";
import todoApp from "./reducers";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000)
  );

  return store;
};

export default configureStore;