const prettier = require("prettier");

const getTemplateBoilerplate = ({
  title,
  permalink,
  addBodyClass,
  content,
  head = "",
}) => {
  // Must be formatted because html which is indented by 4 spaces
  // will be interpreted as a code block by the markdown engine
  const formattedHead = prettier.format(head, { parser: "html" });

  return `---
# This is a generated file
title: "${title}"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: ${permalink}

lang: en
---
${formattedHead}
${/* ${prettier.format(` */ ""}
<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">
${
  !addBodyClass
    ? ""
    : `
<script>
const addBodyClass = ${JSON.stringify(addBodyClass)};
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    `
}
<div>
${content}
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="/assets/skipto.min.js"></script>
${/* `, { parser: "html" })} */ ""}`;
};

module.exports = getTemplateBoilerplate;
