
module.exports.getAllLevels = (callback) => {
    let req = 'SELECT id, label FROM tcselles.levels ORDER BY lvl';

    connection.query(req, (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null, result);
    });
}