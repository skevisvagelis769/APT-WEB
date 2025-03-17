import Image from "../model/model";
import fs from 'node:fs';
const html = fs.readFileSync("./test.html");
export const index = (req, res, next) => {
    console.log(Image.find());
    const employ = Image.find()
        .then(response => {
        res.json({
            response
        });
    })
        .catch(error => {
        res.json({
            message: 'Error Occured!'
        });
    });
};
