const counter = (() => {
  let count = 0;
  return () => count += 1;
})();

export default counter;