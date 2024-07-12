import dotenv from "dotenv";
import User from "../models/user.js";
import dbConnect from "./connectDb.js";

dotenv.config();

const seedData = async () => {
  try {
    await dbConnect();

    await User.deleteMany({});
    console.log("All users deleted");

    const user1 = new User({ username: "user1" });
    const user2 = new User({ username: "user2" });
    const user3 = new User({ username: "user3" });

    await user1.save();
    await user2.save();
    await user3.save();

    console.log("Sample users created");
  } catch (error) {
    console.error("Error creating sample users:", error);
  }
};

export default seedData;
