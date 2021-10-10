const db = require('../../db/db');

module.exports = async (jobId) => {
    const data = db.getData(`/jobs/${jobId}`);
    return data
}