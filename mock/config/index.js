/*
 * 该文件的作用是导出共有的keY和私有的key
 */
import fs from 'fs'
import path from 'path'
const __dirname = path.resolve();
export const PUBLIC_KEy = fs.readFileSync(
  path.join(__dirname, "./config", "cert", "public_key.pem")
);

export const PRIVITE_KEY = fs.readFileSync(
  path.join(__dirname, "./config", "cert", "private_key.pem")
);

 