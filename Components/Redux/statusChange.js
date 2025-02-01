import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CookieManager from '@react-native-cookies/cookies';



export const CancleComplain = createAsyncThunk('Compalin/CancleComplainStatusChange', async (body) => {
    try {
        const response = await fetch("https://navicompu.co.in/api/statuschange", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body), // Ensure the body is serialized as a JSON string
        });


        const data = await response.json();

        return data;


    } catch (error) {
        throw new Error(error.message);
    }
})




const statusChange= createSlice({
    name: 'statusChange',
    initialState: {
        loading: false,
        cnacelData: {},
        error: ''
    },
    reducers: {
        setCancelData:(state,action)=>{
            state.cnacelData={}
        }
    },
    extraReducers: builder => {
        builder.addCase(CancleComplain.pending, (state, action) => {
            state.loading = true
            state.cnacelData = []
            state.error = ""
        })

        builder.addCase(CancleComplain.fulfilled, (state, action) => {
            console.log("Cancle Status Change payload",action.payload)
            state.loading = false
            state.cnacelData = action.payload
            state.error = ""
        

        })



        builder.addCase(CancleComplain.rejected, (state, action) => {
            state.loading = false
            state.cnacelData = []
            state.error = ""
        })




    }
})


export default statusChange.reducer
export const { setCancelData } = statusChange.actions;