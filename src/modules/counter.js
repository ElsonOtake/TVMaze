const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();

export default counter;