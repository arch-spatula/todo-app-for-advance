import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/todos";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const getTodoThunk = createAsyncThunk(
  "todo/getTodo",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  "todo/addTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.post(BASE_URL, payload);
      // read
      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todo/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(BASE_URL + `/${payload}`);
      // read
      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const moveTodoThunk = createAsyncThunk(
  "todo/moveTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(BASE_URL + `/${payload.id}`);
      await axios.post(BASE_URL, payload);
      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getTodoThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // addTodo
    builder.addCase(addTodoThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // deleteTodo
    builder.addCase(deleteTodoThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // moveTodo
    builder.addCase(moveTodoThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(moveTodoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(moveTodoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default todoSlice.reducer;
