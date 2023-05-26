import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { Reducer as AppReducer } from "./AppReducer/Reducer"
import { Reducer as AuthReducer } from "./AuthReducer/Reducer"
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import {persistStore,persistReducer} from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storageSession from 'redux-persist/lib/storage/session'
const persistConfig={
    transforms: [
        encryptTransform({
          secretKey: process.env.REACT_APP_STATE_ENC,
          onError: function (error) {
            console.log(error);
          },
        }),
      ],
    key:'persist-key',
    storage:storageSession
}
const RootReducer = combineReducers({app:AppReducer,auth:AuthReducer});
const persistedReducer=persistReducer(persistConfig,RootReducer)
const store = legacy_createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistedStore=persistStore(store);
export {store}
export {persistedStore}