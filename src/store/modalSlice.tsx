import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  inputState: boolean;
  captureState: boolean;
  alertState: boolean;
  confirmState: {
    removeModalOpen: boolean;
    updateModalOpen: boolean;
    isOpen: boolean;
  };
  notificationState: {
    isOpen: boolean;
  };
}

const initialState: initialStateProps = {
  inputState: false,
  captureState: false,
  alertState: false,
  confirmState: {
    isOpen: false,
    removeModalOpen: false,
    updateModalOpen: false,
  },
  notificationState: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    InputModalOpen: (state) => {
      state.inputState = true;
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
    removeConfirmOpen: (state) => {
      state.confirmState.removeModalOpen = true;
    },
    updateConfirmOpen: (state) => {
      state.confirmState.updateModalOpen = true;
    },
    modalIsClose: (state) => {
      state.inputState = false;
      state.captureState = false;
      state.alertState = false;
      state.notificationState.isOpen = false;
    },
    confirmClose: (state) => {
      state.confirmState.removeModalOpen = false;
      state.confirmState.updateModalOpen = false;
    },
  },
});

export default modalSlice;
export const {
  InputModalOpen,
  modalIsClose,
  captureModalIsOpen,
  notificationIsOpen,
  alertIsOpen,
  removeConfirmOpen,
  updateConfirmOpen,
  confirmClose,
} = modalSlice.actions;
