import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const signupUser = createAsyncThunk('user/signupUser', async (newUser) => {
  const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/users/signup`, newUser)
  return res.data
})

export const signinUser = createAsyncThunk('user/signinUser', async (user) => {
  const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/users/signin`, user)
  return res.data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    token: null,
    username: null,
    error: null
  },
  reducers: {
    logout(state) {
      state.token = null
      state.username = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.username = action.payload.username
      })
      .addCase(signupUser.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to signup user!'
      })
      .addCase(signinUser.pending, (state) => {
        state.loading = true
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.username = action.payload.username
      })
      .addCase(signinUser.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to signin user!'
      })
  }
})

export const { 
  logout
} = userSlice.actions
export default userSlice.reducer