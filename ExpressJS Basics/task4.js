import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import serveStatic from 'serve-static';
const task4 = express.Router();
task4.use(express.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../public');
task4.use(serveStatic(publicPath));

  export default task4