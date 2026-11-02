import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./main.css";
import { store, persistor } from "./App/store";
import ToDo from "./App/ToDo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDo />
      </PersistGate>
    </Provider>
  </StrictMode>
);
