import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (token) => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/posts`, { headers: { token } })
  return res.data
})

const postSlice = createSlice({
  name: 'post',
  initialState: {
    loading: false,
    data: [],
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch post!'
      })
  }
})

export default postSlice.reducer