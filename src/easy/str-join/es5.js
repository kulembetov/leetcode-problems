/**
 * @param {string} separator - The separator to use.
 * @param {...string} elements - The elements to join.
 * @returns {string} The joined string.
 */

function strJoinEs5() {
  var separator = arguments[0];
  var elements = Array.prototype.slice.call(arguments, 1);

  if (elements.length === 0) {
    throw new Error('At least one string must be provided');
  }

  if (typeof separator !== 'string') {
    throw new Error('Separator must be a string');
  }

  for (var i = 0; i < elements.length; i++) {
    if (typeof elements[i] !== 'string') {
      throw new Error('Element at index ' + i + ' must be a string');
    }
  }

  var result = '';
  for (var j = 0; j < elements.length; j++) {
    result += elements[j];
    if (j < elements.length - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = strJoinEs5;
