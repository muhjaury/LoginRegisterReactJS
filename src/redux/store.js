import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducer/login.reducer";
import { emailReducer } from "./reducer/email.reducer";
import { authReducer } from "./reducer/auth.reducer";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "user",
  storage: storageSession,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  loginStore: loginReducer,
  emailStore: emailReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(logger));
export const persistor = persistStore(store);
