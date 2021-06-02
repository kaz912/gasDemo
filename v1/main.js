function doGet() {
  let htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  htmlOutput
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}