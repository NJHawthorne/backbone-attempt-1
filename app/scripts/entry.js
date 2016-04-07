// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';

const ShirtInfo = Backbone.View.extend({
	tagName: 'section',
	className: 'image-wrapper',
	initialize: function(frontPic, backPic, picTitle, price) {
		this.frontPic = frontPic;
		this.backPic = backPic;
		this.picTitle = picTitle;
		this.price = price;
		this.render();
	},
	render: function() {
		const template = `
				<i class="fa fa-refresh"></i>
				<img class="frontPic" src="${this.frontPic}">
				<img class="backPic" src="${this.backPic}">
				<ul class="icons">
					<li><i class="fa fa-retweet"></i></li><!--
					--><li><i class="fa fa-heart-o"></i></li><!--
					--><li><h5>XL</h5></li><!--
					--><li><div class="colorChoice"></div></li><!--
					--><li><i class="fa fa-shopping-cart"></i></li>
				</ul>
				<div class="picTitle">${this.picTitle}</div>
				<div class="price">${this.price}</div>
		`;
		this.$el.append(template);
	}
});

const shirt1 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Save my Trees", 19);
const shirt2 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Nature Lover", 19);
const shirt3 = new ShirtInfo("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Forrest Walk", 19);
$('main').append(shirt1.el);
$('main').append(shirt2.el);
$('main').append(shirt3.el);