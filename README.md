# MongoDB-and-Mongoose
 Basics of MongoDB,Basic operations (CRUD), Basics of Mongoose,Defining a Schema &amp; Model And create a Model,. CRUD Operations with Mongoose, Additional Queries,Connecting to MongoDB Atlas



what you have learned so far about MongoDB and Mongoose:

1. Basics of MongoDB
What MongoDB is: A NoSQL database that stores data in flexible JSON-like documents.

Core components:

Database → A container for collections.

Collection → A group of documents (like a table in SQL).

Document → A single record (like a row), stored as key-value pairs.

Basic operations (CRUD):

insertOne() / insertMany() – Insert data.

find() / findOne() – Read data.

updateOne() / updateMany() – Update data.

deleteOne() / deleteMany() – Delete data.

2. Basics of Mongoose
What Mongoose is: A Node.js ODM (Object Data Modeling) library that provides schemas and models for MongoDB.

Why use Mongoose:

To define a schema (structure) for your data.

To add validation and easy queries.

To avoid writing raw MongoDB queries.

3. Defining a Schema & Model
You’ve learned how to define a Schema:

js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});
And create a Model:

const User = mongoose.model("User", userSchema);
4. CRUD Operations with Mongoose
Create: Using new User() + .save() or User.create().

Read: Using User.find(), User.findById(), .select(), .limit(), .sort().

Update: (We can use User.findByIdAndUpdate() or User.updateOne()).

Delete: Using User.findByIdAndDelete().

5. Additional Queries
Sorting: .sort({ age: -1 }) (descending) or { age: 1 } (ascending).

Limiting: .limit(5).skip(1) (pagination).

Counting: User.countDocuments().

6. Connecting to MongoDB Atlas
You learned how to:

Use a connection URI (with username & password).

Whitelist your IP in the Network Access section.

Use mongoose.connect("mongodb+srv://...").

Your Next Learning Steps
To progress further, you should learn:

Update Operations with Mongoose.

Validation in Schema (e.g., required fields, min/max).

Indexes and unique fields in Mongoose.

Relationships (ref, populate) – linking documents like SQL joins.

Aggregation Framework – for advanced queries.
