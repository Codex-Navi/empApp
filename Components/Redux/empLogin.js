import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CookieManager from '@react-native-cookies/cookies';



export const empLogin = createAsyncThunk('emp/fetchLoginDetail', async (body) => {
    try {




        const response = await fetch("https://navicompu.co.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "mukesh.da@gmail.com", password: "123456" }), // Ensure the body is serialized as a JSON string
        });


        const data = await response.json();

        return data;


    } catch (error) {
        throw new Error(error.message);
    }
})




const empLoginSlice = createSlice({
    name: 'empLogin',
    initialState: {
        loading: false,
        logindata: {},
        error: ''
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(empLogin.pending, (state, action) => {
            state.loading = true
            state.logindata = []
            state.error = ""
        })

        builder.addCase(empLogin.fulfilled, (state, action) => {
            state.loading = false
            state.logindata = action.payload
            state.error = ""
        

        })



        builder.addCase(empLogin.rejected, (state, action) => {
            state.loading = false
            state.logindata = []
            state.error = ""
        })




    }
})


export default empLoginSlice.reducer