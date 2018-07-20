var evilscan = require('evilscan');

var options = {
    target:'139.162.0.0/16',//'45.79.65.140',
    port:'8545',
    status:'O', // Timeout, Refused, Open, Unreachable
    banner:true
};

var scanner = new evilscan(options);

scanner.on('result',function(data) {
    // fired when item is matching options
    console.log(data);
});

scanner.on('error',function(err) {
    // throw new Error(data.toString());
});

scanner.on('done',function() {
    // finished !
    console.log('Finish');
});

scanner.run();