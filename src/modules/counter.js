const counter = (() => {
  var count = 1;
  return () => count++;
})();

export default counter;