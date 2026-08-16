import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "cp_admin_session";
const SESSION_MS = 24 * 60 * 60 * 1000;

function getSecret() {
  const secret = process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_SECRET or ADMIN_PASSWORD must be set.");
  }
  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function createAdminSessionToken() {
  const exp = Date.now() + SESSION_MS;
  const payload = JSON.stringify({ exp });
  const signature = sign(payload);
  return Buffer.from(JSON.stringify({ payload, signature })).toString("base64url");
}

function verifyAdminSessionToken(token: string) {
  try {
    const decoded = JSON.parse(
      Buffer.from(token, "base64url").toString("utf8"),
    ) as { payload: string; signature: string };

    const expected = sign(decoded.payload);
    const a = Buffer.from(expected);
    const b = Buffer.from(decoded.signature);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

    const { exp } = JSON.parse(decoded.payload) as { exp: number };
    return Date.now() < exp;
  } catch {
    return false;
  }
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MS / 1000,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifyAdminSessionToken(token);
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
