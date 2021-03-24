const router = require('express').Router();
const { cloudinary } = require('../utils/cloudinary.js');
const auth = require('../middleware/auth');

// Mongoose models
const Image = require('../models/image');

router.get('/imagedisplay', auth, async (req, res) => {
    try {
        const { _id } = req.user;
        const displaypic = await Image.find({ "userId": _id });
        console.log(displaypic)
        
        /*const publicIds = resouces.map( file => file.public_id);
        let imagesToSend = []
        for (let i = 0; i < images.length; i++) {
            for (let j = 0; j < publicIds.length; j++) {
                if (images[i] === publicIds[j] || images[i] === null) {
                    imagesToSend.push(images[i])
                }
            }
        }*/
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});


router.post('/upload', auth, async (req, res) => {
    try {
        
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: "plantica"
        });
        console.log("UPLOAD RESPONSE------",uploadResponse);
        console.log("REQ.BODY------",req.body);
        const { plantId, userId, name, } = req.body
        const saveToDb = {
        plantId: req.plant_id,
        userId: req.user._id,
        url:uploadResponse.url,
    }
    console.log(saveToDb)
    const savedImage = await Image.create(saveToDb);
    if (!savedImage) {
        return res
            .status(500)
            .json({ success: false, payload: { message: 'Error while saving image' } });
    }
    res.json({ url:uploadResponse.url});
} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
}


})

module.exports = router;
