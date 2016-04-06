// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

import Backbone from 'backbone';
import $ from 'jquery';

const ShirtInfo = Backbone.View.extend({
	tagName: 'section',
	initialize: function(frontPic, backPic, picTitle, price) {
		this.frontPic = frontPic;
		this.backPic = backPic;
		this.picTitle = picTitle;
		this.price = price;
		this.render();
	},
	render: function() {
		const $frontPhoto = $('<img />', {src: this.frontPic, class: 'frontPic'});
		const $backPhoto = $('<img />', {src: this.backPic, class: 'backPic'});
		const $picTitle = $('<div />', {text: this.picTitle, class: 'picTitle'});
		const $price = $('<div />', {text: this.price, class: 'price'});
		this.$el.append($frontPhoto).append($backPhoto).append($picTitle).append($price);
	}
});

const shirt1 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Save my Trees", 19);
const shirt2 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Nature Lover", 19);
const shirt3 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Forrest Walk", 19);
$('main').append(shirt1.el);
$('main').append(shirt2.el);
$('main').append(shirt3.el);