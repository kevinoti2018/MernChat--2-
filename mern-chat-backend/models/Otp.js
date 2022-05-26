const mongoose = require('mongoose');
const conn  =  require('/mern-chat-backend/connection')

var otpSchema = new mongoose.Schema({
    email:String,
    code: String,
    expireIn: Number
},
{
    timestamps :true
}
)
let otp = conn.model('otp', otpSchema)