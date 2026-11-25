const fs = require('fs');
const path = require('path');
const root =
  'D:\\SOC (F)\\Yalla-Hack Project\\Departments\\HR\\Audit and legal compliance\\Company registeration in China\\Guangzhou\\Yalla Kaishi\\Yalla-Kaishi-Website';
const i18nPath = path.join(root, 'src\\i18n\\ui-pages.ts');

let content = fs.readFileSync(i18nPath, 'utf8');

// Remove the about.storyTitle key
const pattern = /'about.storyTitle':\s*\{[^}]+\},\s*/g;
const before = content.split("'about.storyTitle'").length - 1;

if (before > 0) {
  content = content.replace(pattern, '');
  fs.writeFileSync(i18nPath, content);
  console.log('Removed', before, 'occurrences of about.storyTitle');
} else {
  console.log('Key not found in file, count:', before);
}
