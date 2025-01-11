import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  inputState: boolean;
  captureState: boolean;
  alertState: {
    noteAlertOpen: boolean;
    errorAlert: {
      alertOpen: boolean;
      message: string;
    };
  };
  confirmState: {
    removeModalOpen: boolean;
    updateModalOpen: boolean;
  };
  notificationState: {
    isOpen: boolean;
  };
}

const initialState: initialStateProps = {
  inputState: false,
  captureState: false,
  alertState: {
    noteAlertOpen: false,
    errorAlert: {
      alertOpen: false,
      message: '',
    },
  },
  confirmState: {
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
    errorAlertIsOpen: (state, action: PayloadAction<string>) => {
      state.alertState.errorAlert.alertOpen = true;
      state.alertState.errorAlert.message = action.payload;
    },
    noteAlertIsOpen: (state) => {
      state.alertState.noteAlertOpen = true;
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
      state.alertState.errorAlert.alertOpen = false;
      state.alertState.noteAlertOpen = false;
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
  errorAlertIsOpen,
  noteAlertIsOpen,
  removeConfirmOpen,
  updateConfirmOpen,
  confirmClose,
} = modalSlice.actions;
