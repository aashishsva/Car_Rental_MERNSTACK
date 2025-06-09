const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Aapke controllers aur models
const vehicalOwnerController = require('./controller/vehicleOwnerController');
const passengerController = require('./controller/passengerController');
const postCarController = require('./controller/postCarController');
const orderCarController = require('./controller/orderCarController');
const reviewController = require('./controller/reviewController');
const categoryMasterController = require('./controller/categoryMasterController');
const locationMasterController = require('./controller/locationMasterController');
const loginController = require('./controller/adminloginController');
const registrationController = require('./controller/adminregistrationController');

const upload = require('./middleware/upload'); // multer middleware

const MONGO_URI = 'mongodb://localhost:27017/rentalDB'; 
const app = express();

app.use(cors());
app.use(express.json());

// Static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// CategoryMaster routes
app.get('/categoryMaster', categoryMasterController.getAllcategorys);
app.post('/categoryMaster', categoryMasterController.createcategory);
app.put('/categoryMaster/:id', categoryMasterController.updatecategory);
app.delete('/categoryMaster/:id', categoryMasterController.deletecategory);

// Location Master routes
app.get('/locationMaster', locationMasterController.getAlllocations);
app.post('/locationMaster', locationMasterController.createlocation);
app.put('/locationMaster/:id', locationMasterController.updatelocation);
app.delete('/locationMaster/:id', locationMasterController.deletelocation);

// Vehicle owner routes
app.get('/vehicalOwner', vehicalOwnerController.getAllvehicleOwners);
app.post('/vehicalOwner', vehicalOwnerController.createvehicleOwner);
app.put('/vehicalOwner/:id', vehicalOwnerController.updatevehicleOwner);
app.delete('/vehicalOwner/:id', vehicalOwnerController.deletevehicleOwner);

// Passenger routes
app.get('/passenger', passengerController.getAllpassengers);
app.post('/passenger', passengerController.createpassenger);
app.put('/passenger/:id', passengerController.updatepassenger);
app.delete('/passenger/:id', passengerController.deletepassenger);

// PostCar routes with multer middleware for file upload
app.get('/postcars', postCarController.getAllpostCars);

app.post(
  '/postcars',
  upload.fields([
    { name: 'carimage1', maxCount: 1 },
    { name: 'carimage2', maxCount: 1 },
  ]),
  postCarController.createpostCar
);

app.put(
  '/postcars/:id',
  upload.fields([
    { name: 'carimage1', maxCount: 1 },
    { name: 'carimage2', maxCount: 1 },
  ]),
  postCarController.updatepostCar
);

app.delete('/postcars/:id', postCarController.deletepostCar);

// OrderCar routes
app.get('/ordercar', orderCarController.getAllorderCars);
app.post('/ordercar', orderCarController.createorderCar);
app.put('/ordercar/:id', orderCarController.updateorderCar);
app.delete('/ordercar/:id', orderCarController.deleteorderCar);

// Review routes
app.get('/review', reviewController.getAllreviews);
app.post('/review', reviewController.createreview);
app.put('/review/:id', reviewController.updatereview);
app.delete('/review/:id', reviewController.deletereview);

// Registration routes
app.get('/adminregister', registrationController.getAllAdmin);
app.post('/adminregister', registrationController.registerAdmin);
app.put('/adminregister/:id', registrationController.updateAdmin);
app.delete('/adminregister/:id', registrationController.deleteAdmin);

// Login route
app.post('/adminlogin', loginController);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
