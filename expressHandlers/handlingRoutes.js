
module.exports = function(app){

    //require('../ledControl/led.js')(app);

    app.use(function(req, res, next){
    	res.status(404);
    	res.render('404');
    });
};
