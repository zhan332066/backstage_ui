import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = ''
      console.log('i am log out')
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
