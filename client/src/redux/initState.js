const initState = () => {
  const state = {
    items: [],
  };

  const fromLS = JSON.parse(window.localStorage.getItem("myApp"));
  return fromLS ? fromLS : state;
};

export default initState;
