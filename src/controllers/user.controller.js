import * as userService from "../services/user.service.js";

export const followUser = async (req, res) => {
  try {
    const { userId, followId } = req.params;
    await userService.followUser(userId, followId);
    res.status(200).send({ message: "Followed successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const { userId, followId } = req.params;
    await userService.unfollowUser(userId, followId);
    res.status(200).send({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getFollowersCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const count = await userService.getFollowersCount(userId);
    res.status(200).send({ count });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getCommonFollowers = async (req, res) => {
  try {
    const { userId1, userId2 } = req.params;
    const commonFollowers = await userService.getCommonFollowers(
      userId1,
      userId2
    );
    res.status(200).send({ commonFollowers });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
