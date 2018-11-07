export default (state = {}, action) => {
    switch (action.type) {
      case 'load':
        console.log('load', action.models);
        return action.models;
      default:
        console.log('get state', state);
        return state
    }
  }