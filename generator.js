let txt = '';
for (const item of []) {
  txt += `
  ### ${item.title}\n\n`;
  for (const {slug,title,link} of item.stack) {
    txt += `
<a href="${link}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;background-color: white;border-radius: 5px;padding: 5px;margin: 5px;">
    <img height="50" width="50" src="https://unpkg.com/simple-icons@v14/icons/${slug}.svg" alt="${title}" title="${title}"/>
</a>
`
  }
}
console.log(txt);