const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Save the updated state to local storage after each dispatched action
  const state = store.getState();
  console.log("state: ", state)
  localStorage.setItem("movies", JSON.stringify(state.movies.data));
  localStorage.setItem("genres", JSON.stringify(state.genres));

  return result;
};

export default localStorageMiddleware;
