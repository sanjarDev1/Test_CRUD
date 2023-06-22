import { createSlice } from '@reduxjs/toolkit';
import { data } from '../componets/mock/data';
const customerSlice = createSlice({
  name: 'customerSlice',
  initialState: {
    data: data,
    modalName: 'add',
    selectedUser: {},
  },
  reducers: {
    addUser(state, { payload }) {
      state.data = [...state.data, payload];
    },
    deleteUser(state, { payload }) {
      console.log(payload);
      state.data = state.data.filter((item) => item.key != payload);
    },
    switchModalName(state, { payload }) {
      state.modalName = payload;
    },
    switchSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
    switchUserUpdate(state, { payload }) {
      console.log(payload);
      state.data = state.data.map((item) =>
        item.key == payload.key
          ? {
              ...item,
              firstName: payload.firstName,
              company: payload.company,
              email: payload.email,
              lastName: payload.lastName,
              status: payload.status,
            }
          : item
      );
      state.modalName = 'add';
    },
  },
});
export default customerSlice.reducer;
export const {
  addUser,
  deleteUser,
  switchModalName,
  switchSelectedUser,
  switchUserUpdate,
} = customerSlice.actions;
