const express = require('express');
const router = express.Router();
const path = require('path')

const createJob = require('../api/jobs/createJob')
const getJob = require('../api/jobs/getJob')

/* Create job . */
router.post('/', async (req, res, next) => {
    try {
        const data = await createJob()
        res.status(201)
        res.send(data);
    } catch (e) {
        console.log(e)
        res.status(400)
        res.send(e)
    }
});

/* GET job details. */
router.get('/:jobId', async (req, res, next) => {
    const {jobId} = req.params

    try {
        const data = await getJob(jobId)

        // If job resolved with status completed and contains image, then return image
        // else return job status
        if (data.status === 'completed' && data.fileName) {
            res.sendFile(`${data.fileName}`, {
                root: path.join(process.cwd(), 'public/images'),
                dotfiles: 'deny',
                headers: {
                    'x-timestamp': Date.now(),
                    'x-sent': true
                }
            });
        } else {
            res.send(data);
        }
    } catch (e) {
        res.status(400)
        res.send(e);
    }
});

module.exports = router;
