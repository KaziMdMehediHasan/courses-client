import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const initialState = {
//     users: [],
//     status: 'idle',
// };
export const getUsers = createAsyncThunk(
    'user/fetchUsers',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(response);
            return response.data;
        } catch (error) {
            return error;
        }
    }
)

export const getCourse = createAsyncThunk(
    'course/get',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://mighty-cliffs-15237.herokuapp.com/courses',
                headers: { "Content-Type": "application/json" },
            })
            return response?.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const postCourse = createAsyncThunk(
    'course/post',
    async (payload, { rejectWithValue, getState, dispatch }) => {

        try {
            const response = await axios({
                method: 'POST',
                url: 'https://mighty-cliffs-15237.herokuapp.com/courses',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(payload),
            })
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)

export const updateCourse = createAsyncThunk(
    'course/update',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        console.log(payload);
        console.log('Hitted Course Update slice');
        try {
            const response = await axios({
                method: 'PATCH',
                url: `https://mighty-cliffs-15237.herokuapp.com/courses/${payload.id}`,
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(payload.data),
            })
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const deleteCourse = createAsyncThunk(
    'course/delete',
    async (id, { rejectWithValue, getState, dispatch }) => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `https://mighty-cliffs-15237.herokuapp.com/courses/${id}`,
                headers: { "Content-Type": "application/json" },
            })
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        courses: [],
        userCredential: {},
    },
    reducer: {
        getCredential: (state, action) => {
            console.log(action.payload);
            // state.userCredential = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            });
        // get all courses
        builder
            .addCase(getCourse.pending, (state) => {
                state.loading = true;
            }).addCase(getCourse.fulfilled, (state, action) => {
                state.courses = action.payload;
            })
        // delete a course
        builder.addCase(deleteCourse.pending, (state, action) => {
            state.loading = true;
        }).addCase(deleteCourse.fulfilled, (state, action) => {
            state.loading = false;
        })
        // update a course
        builder.addCase(updateCourse.pending, (state, action) => {
            state.loading = true;
        }).addCase(updateCourse.fulfilled, (state, action) => {
            state.loading = false;
        })
    }
})

export const { getCredential } = userSlice.actions;
export default userSlice.reducer;