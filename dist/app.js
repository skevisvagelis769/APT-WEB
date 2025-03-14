import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const sr = express();
const port = 3000;
const address = '127.0.0.1';
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
console.log(_dirname);
app.use(express.static('dist'));
app.get('/', (request, response) => {
    response.sendFile('dist/index.html');
});
app.use(express.static('srch'));
app.get('/srch', (request, response) => {
    response.sendFile(path.join(_dirname, '../srch/srch.html'));
});
/* app.use('/srch',express.static(path.join(_dirname,'../srch/')))
console.log(path.join(_dirname,'../srch')) */
app.listen(port, address, () => console.log(`listening at http://${address}:${port}`));
