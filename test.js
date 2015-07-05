var fs = require('fs');

var watcher = fs.watch(process.cwd());
watcher.on('change', function(event, filename) {
  console.log(event, filename);
});

process.nextTick(function() {
  console.log('watcher ok');
});
