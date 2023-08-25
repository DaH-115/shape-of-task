import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  modalState: boolean;
  captureState: boolean;
}

const initialState: initialStateProps = {
  modalState: false,
  captureState: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
    modalIsClose: (state, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
    captureIsOpen: (state, action: PayloadAction<boolean>) => {
      state.captureState = action.payload;
    },
    captureIsClose: (state, action: PayloadAction<boolean>) => {
      state.captureState = action.payload;
    },
  },
});

export default modalSlice;
export const { captureIsOpen, captureIsClose, modalIsOpen, modalIsClose } =
  modalSlice.actions;
