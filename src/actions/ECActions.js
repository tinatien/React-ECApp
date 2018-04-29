var AppDispatcher = require('../dispatcher/AppDispatcher');
var {CHOOSE_COLOR, GET_IMAGE, CHOOSE_SHOES, CHOOSE_AMOUNT} = require('../constants/ECConstants');

export default {
  chooseColor: function(color) {
    AppDispatcher.dispatch({
      actionType: CHOOSE_COLOR,
      color: color,
    })
  },

  showImage: function() {
    AppDispatcher.dispatch({
      actionType: GET_IMAGE,
    })
  },

  chooseShoes: function(id) {
    AppDispatcher.dispatch({
      actionType: CHOOSE_SHOES,
      id: id,
    })
  },

  chooseAmount: function(amount) {
    AppDispatcher.dispatch({
      actionType: CHOOSE_AMOUNT,
      amount: amount,
    })
  }
}
