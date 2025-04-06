import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

function sign(user) {
  const newToken = jwt.sign(user, process.env.JWT_ACCESS, {
    expiresIn: '15min',
  });

  console.log('SIGN ACCESS TOKEN:', newToken);

  return newToken;
}

function verify(token) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS);
  } catch (e) {
    console.error('ACCESS TOKEN ERROR:', e.message);

    return false;
  }
}

function signRefresh(user) {
  const newToken = jwt.sign(user, process.env.JWT_REFRESH, {
    expiresIn: '15min',
  });

  return newToken;
}

function verifyRefresh(token) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH);
  } catch (e) {
    console.error('REFRESH TOKEN ERROR:', e.message);

    return false;
  }
}

export const tokenService = {
  sign,
  verify,
  signRefresh,
  verifyRefresh,
};
