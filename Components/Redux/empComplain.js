
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




export const fetchCompalain = createAsyncThunk("user/fetchComplainData", async (body) => {
  try {

    const payload = {
      "epId": body.emId,
      "status": 2,
      "sort": { "createOnDateTime": -1 },
      "skip": 0,
      "limit": 10,
      "sp": {},
      "status": 2
    };

    const response = await fetch("https://navicompu.co.in/api/empfetchcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Ensure the body is serialized as a JSON string
    });



    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});


export const fetchSingalCompalain = createAsyncThunk("user/fetchSingalComplainData", async (body) => {
  try {




    const payload = {
      "epId": body.emId,
      "status": 2,
      "sort": { "createOnDateTime": -1 },
      "skip": 0,
      "limit": 10,
      "sp": { tcId: body.tcId },
      "status": 2
    };



    const response = await fetch("https://navicompu.co.in/api/fetchcomplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Ensure the body is serialized as a JSON string
    });



    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});


export const fetchPostpondCompalain = createAsyncThunk("user/fetchPostpondCompalain", async (body) => {
  try {

    const payload = {
      "epId": body.emId,
      "status": 2,
      "sort": { "createOnDateTime": -1 },
      "skip": 0,
      "limit": 10,
      "sp": {},
      "status": 3
    };

    const response = await fetch("https://navicompu.co.in/api/empfetchcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Ensure the body is serialized as a JSON string
    });



    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});






export const fetchCompletedCompalain = createAsyncThunk("user/fetchCompletedCompalain", async (body) => {
  try {

    const payload = {
      "epId": body.emId,
      "status": 2,
      "sort": { "createOnDateTime": -1 },
      "skip": 0,
      "limit": 10,
      "sp": {},
      "status": 5
    };

    const response = await fetch("https://navicompu.co.in/api/empfetchcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Ensure the body is serialized as a JSON string
    });



    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});



export const fetchCancelCompalain = createAsyncThunk("user/fetchCancelCompalain", async (body) => {
  try {

    const payload = {
      "epId": body.emId,
      "status": 2,
      "sort": { "createOnDateTime": -1 },
      "skip": 0,
      "limit": 10,
      "sp": {},
      "status": 4
    };

    const response = await fetch("https://navicompu.co.in/api/empfetchcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Ensure the body is serialized as a JSON string
    });



    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});




const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    complaindata: [],
    singalComplainData: '',
    postpondData:'',
    completedData:'',
    cancelData:'',
    error: '',
  },
  extraReducers: builder => {

    // ***********************Fetching Pending*************************

    builder.addCase(fetchCompalain.pending, (state, action) => {
      state.loading = true
      state.complaindata = []
      state.error = ""
    })

    builder.addCase(fetchCompalain.fulfilled, (state, action) => {

      state.loading = false
      state.complaindata = action.payload.data.resp[0].compDetails
      state.error = ''


    })

    builder.addCase(fetchCompalain.rejected, (state, action) => {
      state.loading = false
      state.complaindata = []
      state.error = action.error.message
    })

    // ********************************Fetch Singal Complain************************

    builder.addCase(fetchSingalCompalain.pending, (state, action) => {
      state.loading = true
      state.singalComplainData = []
      state.error = ""
    })

    builder.addCase(fetchSingalCompalain.fulfilled, (state, action) => {

      state.loading = false
      state.singalComplainData = action.payload.data.resp[0]
      state.error = ''


    })

    builder.addCase(fetchSingalCompalain.rejected, (state, action) => {
      state.loading = false
      state.singalComplainData = []
      state.error = action.error.message
    })

    // ****************************************************************



    // ***********************Fetching PostPond*************************



    builder.addCase(fetchPostpondCompalain.pending, (state, action) => {
      state.loading = true
      state.postpondData = []
      state.error = ""
    })

    builder.addCase(fetchPostpondCompalain.fulfilled, (state, action) => {

      state.loading = false
      state.postpondData = action.payload.data.resp[0]
      state.error = ''


    })

    builder.addCase(fetchPostpondCompalain.rejected, (state, action) => {
      state.loading = false
      state.postpondData = []
      state.error = action.error.message
    })

    // *****************************************************************


    // ***********************Fetching Completed*************************


    builder.addCase(fetchCompletedCompalain.pending, (state, action) => {
      state.loading = true
      state.complaindata = []
      state.error = ""
    })

    builder.addCase(fetchCompletedCompalain.fulfilled, (state, action) => {

      state.loading = false
      state.complaindata = action.payload.data.resp[0]
      state.error = ''


    })

    builder.addCase(fetchCompletedCompalain.rejected, (state, action) => {
      state.loading = false
      state.complaindata = []
      state.error = action.error.message
    })

    // *****************************************************************


    // ***********************Fetching Cancelled*************************

    builder.addCase(fetchCancelCompalain.pending, (state, action) => {
      state.loading = true
      state.singalComplainData = []
      state.error = ""
    })

    builder.addCase(fetchCancelCompalain.fulfilled, (state, action) => {

      state.loading = false
      state.singalComplainData = action.payload.data.resp[0]
      state.error = ''


    })

    builder.addCase(fetchCancelCompalain.rejected, (state, action) => {
      state.loading = false
      state.singalComplainData = []
      state.error = action.error.message
    })

    // *****************************************************************





  }
})

export default userSlice.reducer