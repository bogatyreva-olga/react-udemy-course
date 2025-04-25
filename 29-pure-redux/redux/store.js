import {configureStore} from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.6.0/+esm"
import reducer from "./reducer.js";

const store = configureStore({
    reducer
})

export default store
