// import foodModel from "../models/foodModel.js";
// import fs from 'fs'

// // all food list
// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({})
//         res.json({ success: true, data: foods })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }

// }

// // add food
// const addFood = async (req, res) => {
//     try {
//         console.log("Incoming request body:", req.body);
//         console.log("Incoming file:", req.file);

//         if (!req.file) {
//             return res.json({ success: false, message: "Image not uploaded" });
//         }

//         let image_filename = req.file.filename;

//         const food = new foodModel({
//             name: req.body.name,
//             description: req.body.description,
//             price: req.body.price,
//             category: req.body.category,
//             image: image_filename,
//         });

//         await food.save();
//         res.json({ success: true, message: "Food Added" });
//     } catch (error) {
//         console.log("Error in addFood:", error);
//         res.json({ success: false, message: "Error" });
//     }
// };


// // delete food
// const removeFood = async (req, res) => {
//     try {

//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`, () => { })

//         await foodModel.findByIdAndDelete(req.body.id)
//         res.json({ success: true, message: "Food Removed" })

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }

// }

// export { listFood, addFood, removeFood }


import foodModel from "../models/foodModel.js";

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Add food (using memory storage)
const addFood = async (req, res) => {
    try {
        console.log("Incoming request body:", req.body);
        console.log("Incoming file:", req.file);

        if (!req.file) {
            return res.json({ success: false, message: "Image not uploaded" });
        }

        // Convert buffer to base64 string for storage
        const image_base64 = req.file.buffer.toString('base64');
        const image_contentType = req.file.mimetype;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: {
                data: image_base64,
                contentType: image_contentType
            },
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log("Error in addFood:", error);
        res.json({ success: false, message: "Error" });
    }
};

// Delete food (removed filesystem operation)
const removeFood = async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { listFood, addFood, removeFood }