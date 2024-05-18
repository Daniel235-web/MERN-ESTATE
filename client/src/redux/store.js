import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  userReducer  from './user/userSlice';
import {persistReducer, persistStore  } from 'redux-persist';//persist reducer  package is used to store our credentials in our local storage
import storage from 'redux-persist/lib/storage';//this is a package from redux-persist


const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>  //this middleware function is to stop any error that will occure
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);