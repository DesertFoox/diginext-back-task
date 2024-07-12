import User from "../models/user.js";

const seedData = async () => {
  try {
    await User.deleteMany({});
    console.log("All users deleted");

    const user1 = new User({ username: "user1" });
    const user2 = new User({ username: "user2" });

    await user1.save();
    await user2.save();

    console.log("Sample users created");
  } catch (error) {
    console.error("Error creating sample users:", error);
  }
};

export default seedData;
