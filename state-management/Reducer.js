export const Reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
      case 'SET_EMPLOYEES':
        return { ...state, employees: action.payload };
      default:
        return state;
    }
  };