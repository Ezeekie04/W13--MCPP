import { createSlice } from '@reduxjs/toolkit';

const firebaseStatsSlice = createSlice({
  name: 'firebaseStats',
  initialState: {
    firestoreSuccess: 0,
    firestoreFailed: 0,
    fcmSuccess: 0,
    fcmFailed: 0,
  },
  reducers: {
    incrementFirestoreSuccess: (state) => {
      state.firestoreSuccess += 1;
    },
    incrementFirestoreFailed: (state) => {
      state.firestoreFailed += 1;
    },
    incrementFcmSuccess: (state) => {
      state.fcmSuccess += 1;
    },
    incrementFcmFailed: (state) => {
      state.fcmFailed += 1;
    },
  },
});

export const {
  incrementFirestoreSuccess,
  incrementFirestoreFailed,
  incrementFcmSuccess,
  incrementFcmFailed,
} = firebaseStatsSlice.actions;

export default firebaseStatsSlice.reducer;
