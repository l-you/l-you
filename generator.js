let txt = '';
for (const item of []) {
  txt += `
  ### ${item.title}\n\n`;
  for (const {slug,title,link} of item.stack) {
    txt += `
<a href="${link}" target="_blank" rel="noopener noreferrer">
  <picture>
    <source srcset="https://cdn.simpleicons.org/${slug}/dark" media="(prefers-color-scheme: light)">
    <source srcset="https://cdn.simpleicons.org/${slug}/white" media="(prefers-color-scheme: dark)">
    <img height="50" width="50" src="https://cdn.simpleicons.org/${slug}/dark" alt="${title}" title="${title}">
  </picture>
</a>
`
  }
}
