const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vehicalOwner = require('./models/VehicleOwner');
const vehicalOwnerController = require('./controller/vehicleOwnerController');
const passenger = require('./models/Passenger');
const passengerController = require('./controller/passengerController');
const PostCar = require('./models/PostCar');
const postCarController = require('./controller/postCarController');
const orderCar = require('./models/OrderCar');
const orderCarController = require('./controller/orderCarController');
const review = require('./models/Review');
const reviewController = require('./controller/reviewController');
const CategoryMaster = require('./models/CategoryMaster');
const categoryMasterController = require('./controller/categoryMasterController');
const LocationMaster = require('./models/LocationMaster');
const locationMasterController = require('./controller/locationMasterController');
const Login = require('./models/AdminLogin');
const loginController = require('./controller/adminloginController');
const Registration = require('./models/AdminRegistration');
const registrationController = require('./controller/adminregistrationController');



const MONGO_URI = 'mongodb://localhost:27017/rentalDB'; 
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// app.get('/product', productController.getAllProducts);
// app.post('/product', productController.createProduct);


// CategoryMaster
app.get('/categoryMaster', categoryMasterController.getAllcategorys);
app.post('/categoryMaster', categoryMasterController.createcategory);
app.put('/categoryMaster/:id', categoryMasterController.updatecategory);
app.delete('/categoryMaster/:id', categoryMasterController.deletecategory);

//Location Master
app.get('/locationMaster', locationMasterController.getAlllocations);
app.post('/locationMaster', locationMasterController.createlocation);
app.put('/locationMaster/:id', locationMasterController.updatelocation);
app.delete('/locationMaster/:id', locationMasterController.deletelocation);

// vehical owner routes
app.get('/vehicalOwner', vehicalOwnerController.getAllvehicleOwners);
app.post('/vehicalOwner', vehicalOwnerController.createvehicleOwner);
app.put('/vehicalOwner/:id', vehicalOwnerController.updatevehicleOwner);
app.delete('/vehicalOwner/:id', vehicalOwnerController.deletevehicleOwner);


//Passenger
app.get('/passenger', passengerController.getAllpassengers);
app.post('/passenger', passengerController.createpassenger);
app.put('/passenger/:id', passengerController.updatepassenger);
app.delete('/passenger/:id', passengerController.deletepassenger);


// postcar
app.get('/postcars', postCarController.getAllpostCars);
app.post('/postcars', postCarController.createpostCar);
app.put('/postcars/:id', postCarController.updatepostCar);
app.delete('/postcars/:id', postCarController.deletepostCar);


// order car
app.get('/ordercar', orderCarController.getAllorderCars);
app.post('/ordercar', orderCarController.createorderCar);
app.put('/ordercar/:id', orderCarController.updateorderCar);
app.delete('/ordercar/:id', orderCarController.deleteorderCar);


// Review schema
app.get('/review', reviewController.getAllreviews);
app.post('/review', reviewController.createreview);
app.put('/review/:id', reviewController.updatereview);
app.delete('/review/:id', reviewController.deletereview);






// Registration route
app.get('/adminregister', registrationController.getAllAdmin); 
app.post('/adminregister', registrationController.registerAdmin);
app.put('/adminregister/:id', registrationController.updateAdmin);
app.delete('/adminregister/:id', registrationController.deleteAdmin);

//Login route
app.post('/adminlogin', loginController);





const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});