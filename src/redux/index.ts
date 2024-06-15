import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // padrão é localStorage para web
import itemReducer from "./Item/itemReducer";
import cartReducer from "./Cart/cartReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persister = persistStore(store);

persister.purge()

export { store, persister };
