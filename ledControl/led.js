var Cylon = require('cylon');

module.exports = function(app){

Cylon.robot({

		connections: {
			raspi: {adaptor: 'raspi'}
		},

		devices: {

			led_1: {driver: 'led', pin: 11},
			led_2: {driver: 'led', pin: 12},
			led_3: {driver: 'led', pin: 13},
			led_4: {driver: 'led', pin: 15},
			led_5: {driver: 'led', pin: 16},
			led_6: {driver: 'led', pin: 18},
			led_7: {driver: 'led', pin: 22},
		},

		work: function(my){

			app.route('/api/:led/:position').get(function(req, res, next){
				var led = req.params.led,
					pos = req.params.position;

				console.log(led);
				console.log(pos);

				if (pos === 'on' ) {

					if ( led === '1' || led === 'all')
						my.led_1.turnOn();
					if ( led === '2' || led === 'all')
						 my.led_2.turnOn();
					if ( led === '3' || led === 'all')
						 my.led_3.turnOn();
					if ( led === '4' || led === 'all')
						 my.led_4.turnOn();
					if ( led === '5' || led === 'all')
					   my.led_5.turnOn();
					if ( led === '6' || led === 'all')
					   my.led_6.turnOn();
					if ( led === '7' || led === 'all')
						my.led_7.turnOn();

				} else {

					if ( led === '1' || led === 'all')
						my.led_1.turnOff();
					if ( led === '2' || led === 'all')
						my.led_2.turnOff();
					if ( led === '3' || led === 'all')
						my.led_3.turnOff();
					if ( led === '4' || led === 'all')
						my.led_4.turnOff();
					if ( led === '5' || led === 'all')
						my.led_5.turnOff();
					if ( led === '6' || led === 'all')
						my.led_6.turnOff();
					if ( led === '7' || led === 'all')
						my.led_7.turnOff();

				}

				res.sendStatus(200);

			});

		}

	}).start();
};
