import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: false,
  captureState: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalIsOpen: (state, action) => {
      state.modalState = action.payload;
    },
    modalIsClose: (state, action) => {
      state.modalState = action.payload;
    },
    captureIsOpen: (state, action) => {
      state.captureState = action.payload;
    },
    captureIsClose: (state, action) => {
      state.captureState = action.payload;
    },
  },
});

export default modalSlice;
export const { captureIsOpen, captureIsClose, modalIsOpen, modalIsClose } =
  modalSlice.actions;
