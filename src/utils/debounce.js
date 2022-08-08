export const debounce = (func, delay = 500) => {
  console.log('in debounce');
  let timer;
  return function (...args) {

    console.log('in clousure');
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
