
module.exports = function(app){

    require('../ledControl/led.js')(app);
   // require('../js/init.js')(app);
   // require('../js/jquery-1.11.1.min.js')(app);
   // require('../js/jquery-2.1.1.min.js')(app);
   // require('../js/jquery.js')(app);
   // require('../js/jquery.timeago.min.js')(app);
   // require('../js/materialize.js')(app);
   // require('../js/materialize.min.js')(app);
   // require('../js/proceso.min.js')(app);

    app.use(function(req, res, next){
    	res.status(404);
    	res.render('404');
    });
};
