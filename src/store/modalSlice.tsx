import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  inputState: boolean;
  editState: boolean;
  captureState: boolean;
}

const initialState: initialStateProps = {
  inputState: false,
  editState: false,
  captureState: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalIsOpen: (state) => {
      state.inputState = true;
    },
    editModalIsOpen: (state) => {
      state.editState = true;
    },
    captureModalIsOpen: (state) => {
      state.captureState = true;
    },
    modalIsClose: (state) => {
      state.inputState = false;
      state.editState = false;
      state.captureState = false;
    },
  },
});

export default modalSlice;
export const {
  modalIsOpen,
  modalIsClose,
  editModalIsOpen,
  captureModalIsOpen,
} = modalSlice.actions;
