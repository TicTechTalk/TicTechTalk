import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCookie } from 'util/Cookie';
import Instance from 'util/axiosConfig';

// export const join = createAsyncThunk(
//   'users/join',
//   async (userData, thunkAPI) => {
//     try {
//       const res = await Instance.post('users/join', userData);
//       console.log(res);
//       if (res.data === 'USEREMAIL_DUPLICATED') {
//         alert('이미 가입된 이메일입니다.');
//         return;
//       }
//       if (res.data === 'NICKNAME_DUPLICATED') {
//         alert('중복된 닉네임입니다.');
//         return;
//       }
//       alert('회원가입이 완료되었습니다.');
//       return thunkAPI.fulfillWithValue(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'users/login',
//   async (userData, thunkAPI) => {
//     try {
//       const res = await Instance.post('users/login', userData);
//       if (res.data === 'USEREMAIL_NOT_FOUND') {
//         alert('이메일을 찾을 수 없습니다.');
//         return;
//       }
//       if (res.data === 'INVALID_PASSWORD') {
//         alert('비밀번호가 틀렸습니다.');
//         return;
//       }
//       return thunkAPI.fulfillWithValue(res.data);
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'users/logout',
//   async (payload, thunkAPI) => {
//     try {
//       const res = await Instance.post('users/logout');
//       localStorage.removeItem('accessToken');
//       removeCookie('refreshToken');
//       console.log('로그아웃 성공');
//       return thunkAPI.fulfillWithValue(res.payload);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const deleteUser = createAsyncThunk(
//   'users/deleteUser',
//   async (payload, thunkAPI) => {
//     try {
//       const res = await Instance.post('users/delete');
//       localStorage.removeItem('accessToken');
//       removeCookie('refreshToken');
//       console.log('회원탈퇴 성공');
//       return thunkAPI.fulfillWithValue(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const boardWrite = createAsyncThunk(
//   'board/boardWrite',
//   async (payload, thunkAPI) => {
//     try {
//       const res = await Instance.post('users/delete');
//       localStorage.removeItem('accessToken');
//       removeCookie('refreshToken');
//       console.log('회원탈퇴 성공');
//       return thunkAPI.fulfillWithValue(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const initialState = {
  category: 0,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;
