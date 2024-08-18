const mongoose = require('mongoose');
const mongoURL="mongodb+srv://foodiego_mern:foodiego@cluster0.yokxu3f.mongodb.net/FOODIEGO?retryWrites=true&w=majority&appName=Cluster0"


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log('MongoDB connected');
        const fetched_data=mongoose.connection.db.collection("food_items");
        const data= await fetched_data.find({}).toArray();
        const Category_data=mongoose.connection.db.collection("foodCategory");
        const data2=await Category_data.find({}).toArray();

        
        global.food_items=data;
        global.foodCategory=data2;
        console.log(global.food_items);
        console.log(global.foodCategory);

            
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        
    }
};

module.exports = mongoDB;
