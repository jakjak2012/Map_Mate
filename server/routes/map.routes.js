const MapController = require('../controllers/map.controller');
module.exports = function(app){
    app.get('/api', MapController.index);
}