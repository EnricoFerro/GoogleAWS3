import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
import { enviroment } from './environments/environments';

AWS.config.update({
    accessKeyId: enviroment.accessKeyId,
    secretAccessKey: enviroment.secretAccessKey,
});

const filePath = path.join(__dirname, '..', '/data/test.txt');

const s3 = new AWS.S3({
    endpoint: 'https://storage.googleapis.com',
});

const params = {
    Body: fs.createReadStream(filePath),
    Bucket: enviroment.bucket,
    Key: 'folder/' + Date.now() + '_' + path.basename(filePath)
};

console.log(`Starting upload ${s3.endpoint.href}://${s3.endpoint.hostname}/${params.Bucket}/${params.Key}`);
s3.upload(params, (err, data) => {
    // handle error
    if (err) {
        console.log('Error', err);
    }

    // success
    if (data) {
        console.log('Uploaded in:', data.Location);
    }
});

