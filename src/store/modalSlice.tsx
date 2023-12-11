import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  inputState: boolean;
  editState: boolean;
  captureState: boolean;
  alertState: boolean;
  confirmState: {
    isOpen: boolean;
    isTodoId: string;
  };
  notificationState: {
    isOpen: boolean;
  };
}

const initialState: initialStateProps = {
  inputState: false,
  editState: false,
  captureState: false,
  alertState: false,
  confirmState: {
    isOpen: false,
    isTodoId: '',
  },
  notificationState: {
    isOpen: false,
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
    notificationIsOpen: (state, action: PayloadAction<boolean>) => {
      state.notificationState.isOpen = action.payload;
    },
    alertIsOpen: (state) => {
      state.alertState = true;
    },
    confirmIsOpen: (state, action: PayloadAction<string>) => {
      state.confirmState.isOpen = true;
      state.confirmState.isTodoId = action.payload;
    },
    modalIsClose: (state) => {
      state.inputState = false;
      state.editState = false;
      state.captureState = false;
      state.alertState = false;
      state.notificationState.isOpen = false;
      state.confirmState.isOpen = false;
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
  confirmIsOpen,
} = modalSlice.actions;
