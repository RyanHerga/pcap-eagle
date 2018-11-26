export default (state = {}, action) => {
    switch (action.type) {
      case 'load':
        console.log('show details', action.model);
        return action.model;
      default:
        console.log('get', state);
        return state
    }
  }