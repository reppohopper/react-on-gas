function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function myGASFunction() {
  return `(A top-level GAS function was called to generate this text!)`;
  // Your server-side logic here
}

function include(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .getContent();
}

const get_some_string = function () {
  Utilities.sleep(1000);
  return "some string returned from a" + +"top-level GAS function.";
}