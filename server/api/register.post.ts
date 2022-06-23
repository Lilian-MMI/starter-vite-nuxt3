import { User } from "../models";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  const { username, password } = await useBody(event);

  const user = await User.findOne({ username });

  if (user) {
    throw createError({
      statusCode: 401,
      message: "Username already exists",
    });
  }

  const encryptedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    password: encryptedPassword,
  });

  await newUser.save();

  await sendRedirect(event, "/login");
});
