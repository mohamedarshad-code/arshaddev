const fs = require('fs');
let site = fs.readFileSync('src/data/site.ts', 'utf8');

const items = [
  ['Gitify Discovery Tool', 'https://api.dicebear.com/9.x/glass/svg?seed=Gitify'],
  ['Fake News Detector', 'https://api.dicebear.com/9.x/glass/svg?seed=News'],
  ['Juice World', 'https://api.dicebear.com/9.x/glass/svg?seed=Juice'],
  ['Madras Coffee House', 'https://api.dicebear.com/9.x/glass/svg?seed=Coffee'],
  ['Gun Hill Fence Co.', 'https://api.dicebear.com/9.x/glass/svg?seed=Fence']
];

for(const [name, url] of items) {
  site = site.replace(new RegExp('(name: "' + name + '",[\\s\\S]*?github: ".*?",)', 'g'), '\\n      image: "' + url + '",');
}

fs.writeFileSync('src/data/site.ts', site);
