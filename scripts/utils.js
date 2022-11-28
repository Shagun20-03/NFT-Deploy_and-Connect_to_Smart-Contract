import * as axios from './axios.min.js';
const ip_addr = '54.83.105.94';

// Create a new product
async function createNewProduct(product) {
    // var result = false;
    console.log(axios);
    const response = await axios({
        method: "post",
        url: `http://${ip_addr}/api/upload/`,
        data: product,
        headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(response.data.finalHash);
    return response.data.finalHash;
}
export {
    createNewProduct
}