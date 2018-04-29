import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import {CHOOSE_COLOR, CHOOSE_SHOES, CHOOSE_AMOUNT} from '../constants/ECConstants';

import shoesimg from '../model/shoesimg.js';
import shoes from '../model/shoes.js';

const CHANGE_EVENT = 'change';

var color = shoes[0].color;
var img = shoesimg[color];
var selectedColors = [];
var shoesIdx = 0;
var count = 0;
var stock = shoes[0].stock;
var price = 0;

function chooseColor(clr){
	selectedColors = [];
	if (clr === "red") {
		img = shoesimg.red;
		color = clr;
		count = 0;
		price = 0;
	} else if (clr === "green") {
		img = shoesimg.green;
		color = clr;
		count = 0;
		price = 0;
	} else if (clr === "navy") {
		img = shoesimg.navy;
		color = clr;
		count = 0;
		price = 0;
	} else if (clr === "orange") {
		img = shoesimg.orange;
		color = clr;
		count = 0;
		price = 0;
	}
}

function chooseShoes(id){
	count = 0;
	price = 0;
	selectedColors = [];
	shoesIdx = id - 1;
	stock = shoes[shoesIdx].stock;
	for (var i = 0 ; i < shoes.length ; i++ ) {
		if ( shoes[i].size === shoes[shoesIdx].size )
			selectedColors.push(shoes[i].color);
	}
}

function chooseAmount(amount){
	count = amount;
	price = amount*shoes[shoesIdx].price;
}

const ECStores = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    this.removeListener(CHANGE_EVENT, listener);
  },

	getColor(){
		return color;
	},

	getShoes(){
		return shoes;
	},

  getImage(){
		return img;
  },

	getCount(){
		return count;
	},

	getStock(){
		return stock;
	},

	getPrice(){
		return price;
	},

	getSelectedColors(){
		return selectedColors;
	}
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case CHOOSE_COLOR:
      chooseColor(action.color);
      ECStores.emitChange();
      break;
		case CHOOSE_SHOES:
			chooseShoes(action.id);
			ECStores.emitChange();
			break;
		case CHOOSE_AMOUNT:
			chooseAmount(action.amount);
			ECStores.emitChange();
			break;

    default:
    	break;
  }
});

export default ECStores;
