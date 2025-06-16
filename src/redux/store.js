import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tabs-slice';

export default configureStore({
  reducer: {
    tab: tabReducer,
  },
});
