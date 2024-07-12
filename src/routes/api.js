import express from "express";
import {
  followUser,
  getCommonFollowers,
  getFollowersCount,
  unfollowUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/follow/:userId/:followId", followUser);
router.post("/unfollow/:userId/:followId", unfollowUser);
router.get("/followers-count/:userId", getFollowersCount);
router.get("/common-followers/:userId1/:userId2", getCommonFollowers);

export default router;
