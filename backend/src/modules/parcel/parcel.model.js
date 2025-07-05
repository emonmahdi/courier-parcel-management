const { default: mongoose } = require("mongoose");


const parcelSchema = new mongoose.Schema({
    customer: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    deliveryAgent: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"  
    },
    pickupAddress: {
        type:String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true  
    },
    parcelType:{
        type: String,
        enum:["document", "box", "fragile", "other"],
        required: true
    },
    size:{
        type: String,
        enum:["small", "medium", "large"],
        required: true
    },
    isCOD:{
        type: Boolean,
        default: false
    },
    amount:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:["Booked", "Picked Up", "In Transit", "Delivered", "Failed"],
        default:"Booked"
    },
    currentLocation:{
        lat: Number,
        lng: Number
    }
},{timestamps: true})


const Parcel = mongoose.model("Parcel", parcelSchema);

module.exports = Parcel;