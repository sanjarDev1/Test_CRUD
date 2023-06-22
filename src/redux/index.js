import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slice';

export default configureStore({
  reducer: {
    customer: customerSlice,
  },
});
