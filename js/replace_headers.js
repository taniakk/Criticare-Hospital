const fs = require('fs');
const path = require('path');

const targetDir = '/home/aa8831/Downloads/build-solve/build';
const files = fs.readdirSync(targetDir);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(targetDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const headerRegex = /<header\s+class="main-header header-style-two">[\s\S]*?<\/header>/;
    
    if (headerRegex.test(content)) {
      console.log(`Replacing header in: ${file}`);
      content = content.replace(headerRegex, '<div class="nav"></div>\n<script src="js/nav.js"></script>');
      fs.writeFileSync(filePath, content, 'utf8');
    } else {
      console.log(`No match found in: ${file}`);
    }
  }
});
