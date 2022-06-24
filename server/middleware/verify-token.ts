import * as jose from "jose";

export default defineEventHandler(async (event) => {
  if (!event.req.url?.startsWith("/api")) return;

  const publicRoutes = ["/api/auth/login", "/api/auth/register"];

  if (publicRoutes.includes(event.req.url)) return;

  const { token } = useCookies(event);

  try {
    const publicKey = await jose.importSPKI(
      useRuntimeConfig().publicKey,
      "ES256"
    );

    const { payload } = await jose.jwtVerify(token, publicKey, {
      issuer: "urn:disneyc:issuer",
      audience: "urn:disneyc:audience",
    });

    if (payload["urn:disneyc:claim"]) return;
  } catch {}

  throw createError({
    statusCode: 403,
    message: "Invalid token",
  });
});
