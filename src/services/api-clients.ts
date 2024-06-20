import axios from "axios"
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4c7f1428f18d4a5892d87c36e25870ee'
    }
})