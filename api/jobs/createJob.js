const uuid = require("uuid");
const db = require('../../db/db');
const { eventEmitter } = require('../../listeners')

module.exports = async () => {
    const jobId = uuid.v4();
    const jobData = {
        status: 'pending',
        createdAt: Date.now()
    }

    db.push(`/jobs/${jobId}`, jobData);

    // fire jobCreatedEvent
    eventEmitter.emit('jobCreated', [jobId]);

    return {
        jobId,
        ...jobData
    }
}