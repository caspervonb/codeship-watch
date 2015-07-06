var fs = require('fs');

var watcher = fs.watch(process.cwd());
watcher.on('change', function(event, filename) {
  console.log(event, filename);

  setTimeout(function() {
    fs.writeFileSync('data.txt', 'data');
  }, 1000);
});

process.nextTick(function() {
  console.log('watcher ok');
});

fs.writeFileSync('data.txt', 'data');
