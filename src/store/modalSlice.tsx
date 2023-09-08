import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  inputState: boolean;
  editState: boolean;
  captureState: boolean;
  alertState: boolean;
  notificationState: {
    isOpen: boolean;
    isDone: boolean;
  };
}

const initialState: initialStateProps = {
  inputState: false,
  editState: false,
  captureState: false,
  alertState: false,
  notificationState: {
    isOpen: false,
    isDone: false,
  },
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
    notificationIsOpen: (state, action) => {
      state.notificationState.isOpen = true;
      state.notificationState.isDone = action.payload;
    },
    alertIsOpen: (state) => {
      state.alertState = true;
    },
    modalIsClose: (state) => {
      state.inputState = false;
      state.editState = false;
      state.captureState = false;
      state.alertState = false;
      state.notificationState.isOpen = false;
    },
  },
});

export default modalSlice;
export const {
  modalIsOpen,
  modalIsClose,
  editModalIsOpen,
  captureModalIsOpen,
  notificationIsOpen,
  alertIsOpen,
} = modalSlice.actions;
