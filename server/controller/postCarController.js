const postCar = require('../models/PostCar');

exports.getAllpostCars = async (req, res) => {
    try {
        const postCars = await postCar.find().populate("catid", "catname").populate("vehicleownerid", "fullname");
        res.status(200).json(postCars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching postCars', error });
    }
}

exports.createpostCar = async (req, res) => {
    const { catid, vehicleownerid, cartitle, shortdescription, carimage1, carimage2, postdate, price, variant, driverstatus, registrationyear, carvehicleno} = req.body;

    try {
        const newpostCar = new postCar({ catid, vehicleownerid, cartitle, shortdescription, carimage1, carimage2, postdate, price, variant, driverstatus, registrationyear, carvehicleno});
        await newpostCar.save();
        res.status(201).json(newpostCar);
    } catch (error) {
        res.status(500).json({ message: 'Error creating postCar', error });
    }
}


// Delete postCar by ID
exports.deletepostCar = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedpostCar = await postCar.findByIdAndDelete(id);

        if (!deletedpostCar) {
            return res.status(404).json({ message: 'postCar not found' });
        }

        res.status(200).json({ message: 'postCar deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting postCar', error });
    }
};


// Update postCar by ID
exports.updatepostCar = async (req, res) => {
    const { id } = req.params;
    const { catid, vehicleownerid, cartitle, shortdescription, carimage1, carimage2, postdate, price, variant, driverstatus, registrationyear, carvehicleno } = req.body;

    try {
        const updatedpostCar = await postCar.findByIdAndUpdate(
            id,
            { 
                $set: {
                    catid,
                    vehicleownerid,
                    cartitle,
                    shortdescription,
                    carimage1,
                    carimage2,
                    postdate,
                    price,
                    variant,
                    driverstatus,
                    registrationyear,
                    carvehicleno
                }
            },
            { new: true, runValidators: true }
        );

        if (!updatedpostCar) {
            return res.status(404).json({ message: 'postCar not found' });
        }

        res.status(200).json(updatedpostCar);
    } catch (error) {
        res.status(500).json({ message: 'Error updating postCar', error });
    }
};
