const db = require("../db/db");
const request = require("request");
const mime = require("mime-types");
const fs = require("fs");

module.exports = (jobId) => {
    db.push(`/jobs/${jobId}`, {
        status: 'in progress',
        updatedAt: Date.now()
    }, false);

    downloadImage('https://source.unsplash.com/collection/190727', jobId, (fileName) => {
        db.push(`/jobs/${jobId}`, {
            status: 'completed',
            fileName,
            updatedAt: Date.now()
        }, false);
    });
}

const downloadImage = (uri, jobId, callback) => {
    request.head(uri, function(err, res, body){
        const fileExtension = mime.extension(res.headers['content-type']);
        const fileName = `${jobId}.${fileExtension}`
        const filePath = `./public/images/${fileName}`

        request(uri)
            .pipe(fs.createWriteStream(filePath))
            .on('close', () => callback(fileName));
    });
};