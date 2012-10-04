console.log(1);

require.config({

});

require([
    "noDefine1"
],

function($) {
    console.log(6);
});
