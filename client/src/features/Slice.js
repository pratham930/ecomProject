
// // import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// // import {useGetProfileQuery } from '../services/profile'

// // // First, create the thunk
// // const fetchUserById = createAsyncThunk(
// //   'users/fetchByIdS',
// //   async () => {
// //     const {data} = useGetProfileQuery()
// //     return data
// //   }
// // )

// // const usersSlice = createSlice({
// //   name: 'users',
// //   initialState:data,
// //   reducers: {
// //     increment: (state) => {
            
// //             state.data.categories
// //           },
// //         },
// //       })
      
// //       // Action creators are generated for each case reducer function
// //       export const { increment, decrement, incrementByAmount } = usersSlice.actions

// // // Later, dispatch the thunk as needed in the app
// // export default usersSlice.reducer;

// // export const counterSlice = createSlice({
// //   name: 'counter',
// //   initialState,
// //   reducers: {
// //     increment: (state) => {
// //       // Redux Toolkit allows us to write "mutating" logic in reducers. It
// //       // doesn't actually mutate the state because it uses the Immer library,
// //       // which detects changes to a "draft state" and produces a brand new
// //       // immutable state based off those changes
// //       state.value += 1
// //     },
// //     decrement: (state) => {
// //       state.value -= 1
// //     },
// //     incrementByAmount: (state, action) => {
// //       state.value += action.payload
// //     },
// //   },
// // })

// // // Action creators are generated for each case reducer function
// // export const { increment, decrement, incrementByAmount } = counterSlice.actions

// // export default counterSlice.reducer;









// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import {useGetProfileQuery } from '../services/profile'

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchById',
//   async () => {
//      const {data} = useGetProfileQuery()
//     return [data.categories]
//   }
// )



// const initialState = {
//   users: [],
//   loading: 'idle',
// } 

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer

//     postAdded:{
//       reduce(state,action){
// state.users.push(action.payload)
//       },
//     }
//   },
// //   extraReducers: (builder) => {
// //     // Add reducers for additional action types here, and handle loading state as needed
// //     builder.addCase(fetchUserById.fulfilled, (state, action) => {
// //       // Add user to the state array
// //       state.entities.push(action.payload)
// //     })
// //   },
// // })

// // Later, dispatch the thunk as needed in the app

// export const {postAdded} = usersSlice.actions

// export default usersSlice.reducer
