import User from "../models/user.js";

export const followUser = async (userId, followId) => {
  if (userId === followId) {
    throw new Error("You cannot follow yourself.");
  }

  const user = await User.findById(userId);
  const followUser = await User.findById(followId);

  if (!user) {
    throw new Error("User not found.");
  }

  if (!followUser) {
    throw new Error("User to follow not found.");
  }

  if (user.followings.includes(followId)) {
    throw new Error("You are already following this user.");
  }

  user.followings.push(followId);
  followUser.followers.push(userId);

  await user.save();
  await followUser.save();
};

export const unfollowUser = async (userId, followId) => {
  const user = await User.findById(userId);
  const followUser = await User.findById(followId);

  if (!user) {
    throw new Error("User not found.");
  }

  if (!followUser) {
    throw new Error("User to unfollow not found.");
  }

  if (!user.followings.includes(followId)) {
    throw new Error("You are not following this user.");
  }

  user.followings = user.followings.filter((id) => id.toString() !== followId);
  followUser.followers = followUser.followers.filter(
    (id) => id.toString() !== userId
  );

  await user.save();
  await followUser.save();
};

export const getFollowersCount = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found.");
  }
  return user.followers.length;
};

export const getCommonFollowers = async (userId1, userId2) => {
  const user1 = await User.findById(userId1).populate("followers");
  const user2 = await User.findById(userId2).populate("followers");

  if (!user1 || !user2) {
    throw new Error("One or both users not found.");
  }

  const commonFollowers = user1.followers.filter((follower1) =>
    user2.followers.some(
      (follower2) => follower2._id.toString() === follower1._id.toString()
    )
  );

  return commonFollowers;
};
