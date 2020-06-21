
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const motelSchema  = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: true
    },
    office_hrs: {
        type: String,
        required: true
    },
    check_in_time: {
        type: String,
        required: true
    },
    check_out_time: {
        type: String,
        required: true
    },
    price_1: {
        type: Number,
        required: true
    },
    price_2: {
        type: Number,
        required: true
    },
    price_3: {
        type: Number,
        required: true
    },
    price_4: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pool: {
        type: Boolean,
        required: true
    },
    spa: {
        type: Boolean,
        required: true
    },
    free_wifi: {
        type: Boolean,
        required: true
    },
    air_conditioning: {
        type: Boolean,
        required: true
    },
    hot_tub: {
        type: Boolean,
        required: true
    },
    pets: {
        type: Boolean,
        required: true
    },
    accessibility: {
        type: Boolean,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    public_transportation: {
        type: Boolean,
        required: true
    },
    restaurant: {
        type: Boolean,
        required: true
    },
    bar: {
        type: Boolean,
        required: true
    },
    room_service: {
        type: Boolean,
        required: true
    },
    breakfast_buffet: {
        type: Boolean,
        required: true
    }

})

export const Motel = mongoose.model('Motel', motelSchema)