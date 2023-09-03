const { createError } = require("../utils/createError");
const User = require("./../models/userModel");

exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }

  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted!");
};

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};
