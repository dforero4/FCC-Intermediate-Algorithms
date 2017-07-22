Convert HTML Entities
************************************************************************************************************************

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

************************************************************************************************************************

function convertHTML(str) {

  var ex = new RegExp(/([&\"><\'/])/, 'g');
  var opt = {'&': "&amp;", '<':"&lt;", '>': "&gt;", '"': "&quot;", '\'': "&apos;"};
  
  
  return str.replace(ex, (match, p1) => opt[p1]);
}

convertHTML("Hamburgers < Pizza < Tacos");
