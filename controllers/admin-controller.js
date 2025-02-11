import { Motel } from '../models/motelSchema'

// create
export const postAddMotel = (req, res, next) => {
  const motel = new Motel({
    name: req.body.name,
    address: req.body.address,
    photo: req.body.photo,
    desc: req.body.desc,
    office_hrs: req.body.office_hrs,
    check_in_time: req.body.check_in_time,
    check_out_time: req.body.check_out_time,
    price_1: req.body.price_1,
    price_2: req.body.price_2,
    price_3: req.body.price_3,
    price_4: req.body.price_4,
    phone: req.body.phone,
    pool: req.body.pool, 
    spa: req.body.spa,
    free_wifi: req.body.free_wifi,
    air_conditioning: req.body.air_conditioning,
    hot_tub: req.body.hot_tub,
    pets: req.body.pets,
    accessibility: req.body.accessibility,
    parking: req.body.parking,
    public_transportation: req.body.public_transportation,
    restaurant: req.body.restaurant,
    bar: req.body.bar,
    room_service: req.body.room_service,
    breakfast_buffet: req.body.breakfast_buffet
  })
  motel
    .save()
    .then(result => {
      console.log('Created Motel')
      res.send('Motel added to DB')
      // res.redirect('/admin/products')
    })
    .catch(err => console.log(err))
}

 export const getAllMotels = (req, res, next) => {
  Motel.find()
    .then(motels => {
      res.json(motels)
    })
    .catch(err => console.log(err))
}


// read one
export const getMotelById = (req, res, next) => {
  const motelId = req.body.motelId
  console.log(motelId)
  Motel.findById(motelId)
    .then(motel => {
      if (!motel) {
        return res.redirect('/')
      }
      res.json(motel)
    })
    .catch(err => console.log(err))
}

// update
export const postEditMotel = (req, res, next) => {
  const motelId = req.body.motelId
  const updatedName = req.body.name
  const updatedAddress = req.body.address
  const updatedPhoto = req.body.photo
  const updatedDesc = req.body.desc
  const updatedOfficeHrs = req.body.office_hrs
  const updatedCheckInTime = req.body.check_in_time
  const updatedCheckOutTime = req.body.check_out_time
  const updatedPrice_1 = req.body.price_1
  const updatedPrice_2 = req.body.price_2
  const updatedPrice_3 = req.body.price_3
  const updatedPrice_4 = req.body.price_4
  const updatedPhone = req.body.phone
  const updatedPool =  req.body.pool
  const updatedSpa =  req.body.spa
  const updatedWifi =  req.body.free_wifi
  const updatedAirConditioning = req.body.air_conditioning
  const updatedHotTub = req.body.hot_tub
  const updatedPets = req.body.pets
  const updatedAccessibility = req.body.accessibility
  const updatedParking = req.body.parking
  const updatedPublicTransport = req.body.public_transportation
  const updatedRestaurant = req.body.restaurant
  const updatedBar = req.body.bar
  const updatedRoomService = req.body.room_service
  const updatedBreakfastBuffet = req.body.breakfast_buffet
  
  Motel.findById(motelId)
  .then(motel => {
    motel.name = updatedName
    motel.address = updatedAddress
    motel.photo = updatedPhoto
    motel.desc = updatedDesc
    motel.office_hrs = updatedOfficeHrs
    motel.check_in_time = updatedCheckInTime
    motel.check_out_time = updatedCheckOutTime
    motel.price_1 = updatedPrice_1
    motel.price_2 = updatedPrice_2
    motel.price_3 = updatedPrice_3
    motel.price_4 = updatedPrice_4
    motel.phone = updatedPhone
    motel.pool = updatedPool
    motel.spa = updatedSpa
    motel.free_wifi = updatedWifi
    motel.air_conditioning = updatedAirConditioning
    motel.hot_tub = updatedHotTub
    motel.pets = updatedPets
    motel.accessibility = updatedAccessibility
    motel.parking = updatedParking
    motel.public_transportation = updatedPublicTransport
    motel.restaurant = updatedRestaurant
    motel.bar = updatedBar
    motel.room_service = updatedRoomService
    motel.breakfast_buffet = updatedBreakfastBuffet
    return motel.save()
  })
    .then(result => {
      console.log('Updated motel')
      res.redirect('/motels/all-motels')
    })
    .catch(err => console.log(err))
}

// delete

export const postDeleteMotel = ( req, res, next) => {
    const motelId = req.body.motelId
    Motel.findByIdAndRemove(motelId)
    .then(() => {
        console.log('Deleted the motel')
        res.redirect('/motels/all-motels')
    })
    .catch(err => console.log(err))
} 

// export const getLowPrice = (req, res, next) => {
//   Vinyl.find( { price: { $lte: 10.00 } } )
//   .then(products => {
//     res.json(products)
//   })
//   .catch(err => console.log(err))
// }