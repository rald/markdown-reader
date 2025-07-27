(async () => {
  const markdownContent = document.body.textContent;
  document.body.innerHTML = await marked.parse(markdownContent);
})();

