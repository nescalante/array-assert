module.exports = function (term) {
  'use strict';

  if (!(term instanceof Array))
  {
    term = [term];
  }

  return term.map(function (i) { 
    if (typeof i === 'number') {
      return i;
    }
    else {
      return getAI(i);
    }
  });

  function getAI(s) {
      var translate = /[aeiou]/g;
      var latinize = require('latinize');
      var charMap = {
        'a': '[áa]', 'e': '[ée]', 'i': '[íi]', 'o': '[óo]', 'u': '[úu]'
      };
      var value = latinize(s).toLowerCase();
      var query = value.replace(translate, function(match) { 
        return charMap[match]; 
      });

      return new RegExp(query, 'i');
  }
};