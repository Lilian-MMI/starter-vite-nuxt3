import * as jose from "jose";
import { User } from "../models";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  const { username, password } = await useBody(event);

  const user = await User.findOne({ username });

  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Invalid username or password",
    });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw createError({
      statusCode: 401,
      message: "Invalid username or password",
    });
  }

  const privateKey = await jose.importPKCS8(
    useRuntimeConfig().privateKey,
    "ES256"
  );

  const jwt = await new jose.SignJWT({ "urn:disneyc:claim": true })
    .setProtectedHeader({ alg: "ES256" })
    .setIssuedAt()
    .setIssuer("urn:disneyc:issuer")
    .setAudience("urn:disneyc:audience")
    .setExpirationTime("2h")
    .sign(privateKey);

  setCookie(event, "token", jwt);
  await sendRedirect(event, "/");
});
