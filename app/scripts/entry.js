// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

var ShirtInfo = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		this.frontPic = frontPic;
		this.backPic = backPic;
		this.picTitle = picTitle;
		this.price = price;
		this.render();
	},
	render: function() {
		var $frontPhoto = $('<img />', {src: this.frontPic, class: 'frontPic'});
		var $backPhoto = $('<img />', {src: this.backPic});
		var $picTitle = $('<h4 />', {class: 'picTitle'});
		var $price = $('<h4 />', {class: 'price'});
	}
});

var shirt1 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Save my Trees", 19);
var shirt2 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Nature Lover", 19);
var shirt3 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Forrest Walk", 19);
