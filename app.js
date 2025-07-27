// const mongoose = require("mongoose");

// // conect mongoose
// mongoose
//   .connect(
//     "mongodb+srv://avinashkumar808482:v0GgI5uQrNMIdqSA@cluster02024.qfgdi2w.mongodb.net/"
//   )
//   .then(() => console.log("database connected sucessfully"))
//   .catch((e) => console.log(e));

// // create schema
// const userSchema = new mongoose.Schema({
//   name: String, // fixed: nmae -> name
//   email: String,
//   age: Number,
//   isActive: Boolean,
//   tags: [String],
//   createdAt: { type: Date, default: Date.now }, // fixed: Type:Data -> type: Date
// });

// // create user model
// const User = mongoose.model("User", userSchema);

// async function runQueryExamples() {
//   try {
//     // create a new document
//     const newUser = await User.create({
//       name: "Avinash kumar",  
//       email: "avinash@gmail.com",
//       age: 20,
//       isActive: true,
//       tags: ["Developer", "coder"],
//     });
//     console.log('create new users',newUser);
//   } catch (e) {
//     console.log("Error->", e);
//   } finally {
//     await mongoose.connection.close();
//   }
// }

// runQueryExamples(); // moved outside to avoid recursion



//methode second ->2


const mongoose = require("mongoose");

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://avinashkumar808482:v0GgI5uQrNMIdqSA@cluster0.qfgdi2w.mongodb.net/"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

// Create schema (structure of the document)
const userSchema = new mongoose.Schema({
  name: String,          // User's name
  email: String,         // User's email
  age: Number,           // User's age
  isActive: Boolean,     // Status (active/inactive)
  tags: [String],        // Tags (array of strings)
  createdAt: { type: Date, default: Date.now }, // Automatically set creation time
});

// Create user model (used to interact with the 'users' collection)
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // CREATE - Add a new user
    const newUser = new User({
      name: "deleted kumar",
      email: "deleted@gmail.com",
      age: 20,
      isActive: true,
      tags: ["Developer", "coder"],
    });
    await newUser.save(); // Save to database
    console.log("New User:", newUser);

    // READ - Find all users
    const allUsers = await User.find({});
    console.log("All Users:", allUsers);

    // READ - Find users where isActive = false
    const getUserOfActiveFalse = await User.find({ isActive: false });
    console.log("Inactive Users:", getUserOfActiveFalse);

    // READ - Find a user by its ID (recently created user)
    const getLastCreatedUserByUserId = await User.findById(newUser._id);
    console.log("Last Created User by ID:", getLastCreatedUserByUserId);

    // READ - Fetch only specific fields (name, email, _id)
    const selectedFields = await User.find().select("name email _id");
    console.log("Selected Fields:", selectedFields);

    // READ - Limit results to 5 users and skip the first one
    const limitedUsers = await User.find().limit(5).skip(1);
    console.log("Limited Users:", limitedUsers);

    // READ - Sort users by age in descending order (highest age first)
    const sortedUsers = await User.find().sort({ age: -1 });
    console.log("Sorted Users (age desc):", sortedUsers);

    // COUNT - Count how many users have isActive = true
    const countDocuments = await User.countDocuments({ isActive: true });
    console.log("Active Users Count:", countDocuments);

    // DELETE - Delete the user we just created by its ID
    const deletedUser = await User.findByIdAndDelete(newUser._id);
    console.log("Deleted User:", deletedUser);

    //Updated 
    const updateUser=await User.findByIdAndUpdate(newUser._id,{
      $set:{age:100},$push:{tags:'updated'}
    } ,{new:true})
    console.log('updated user ',updateUser);

  } catch (e) {
    console.log("Error->", e);
  } finally {
    // Close the MongoDB connection
    await mongoose.connection.close();
  }
}

// Run the function
runQueryExamples();
