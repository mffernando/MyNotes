import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

//Main reducer
import rootReducer from './reducers';

//Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(reducer);
export const persistor = persistStore(store);
