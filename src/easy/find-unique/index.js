Array.prototype.findUnique = function () {
  return this.filter(
    (item, _, array) => array.filter((x) => x === item).length === 1
  );
};

Array.prototype.findUnique = function () {
  const counts = new Map();

  this.forEach((item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  return this.filter((item) => counts.get(item) === 1);
};