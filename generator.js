let txt = '';
for (const item of []) {
  txt += `
  ### ${item.title}\n\n`;
  for (const {slug,title,link} of item.stack) {
    txt += `
<a href="${link}" target="_blank" rel="noopener noreferrer">
    <img height="50" width="50" src="./simple/icons/${slug}.svg" alt="${title}" title="${title}"/>
</a>
`
  }
}
console.log(txt);