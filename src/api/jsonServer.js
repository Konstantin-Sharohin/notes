import axios from "axios";

export default axios.create({
   baseURL: "http://6aeb90a5441a.ngrok.io", // this api address is temporary (reset by ngrok)
});
