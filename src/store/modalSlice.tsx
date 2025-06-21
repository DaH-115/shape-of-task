import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// 글로벌하게 관리가 필요한 알림만 남김
interface GlobalAlertState {
  errorAlert: {
    isOpen: boolean;
    message: string;
  };
  notification: {
    isOpen: boolean;
  };
}

const initialState: GlobalAlertState = {
  errorAlert: {
    isOpen: false,
    message: '',
  },
  notification: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // 에러 알림 (전역에서 발생할 수 있음)
    errorAlertOpenHandler: (state, action: PayloadAction<string>) => {
      state.errorAlert.isOpen = true;
      state.errorAlert.message = action.payload;
    },
    errorAlertCloseHandler: (state) => {
      state.errorAlert.isOpen = false;
      state.errorAlert.message = '';
    },

    // 알림 (전역 상태 변화 알림)
    notificationOpenHandler: (state) => {
      state.notification.isOpen = true;
    },
    notificationCloseHandler: (state) => {
      state.notification.isOpen = false;
    },
  },
});

export default modalSlice;
export const {
  errorAlertOpenHandler,
  errorAlertCloseHandler,
  notificationOpenHandler,
  notificationCloseHandler,
} = modalSlice.actions;
