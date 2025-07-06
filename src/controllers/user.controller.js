import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, mobile } = req.body;

  if (!name || !mobile) {
    throw new ApiError(400, "Name and mobile are required");
  }

  const existingUser = await User.findOne({ mobile });
  if (existingUser) {
    throw new ApiError(409, "Mobile number already exists");
  }

  const newUser = await User.create({ name, mobile });

  return res
    .status(201)
    .json(new ApiResponse(201, { userId: newUser._id }, "User registered successfully"));
});
