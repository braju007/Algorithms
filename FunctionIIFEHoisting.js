var x=10;

(function() {
    var x;           // Declaration is hoisted to the top
    console.log(x);  // undefined
    x = 20;          // Initialization happens here
    console.log(x);  // 20
})();

// 	var x=10;

// (function() {
//     // var x;       
//     console.log(x);  // 10
//     x = 20;          // Initialization happens here
//     console.log(x);  // 20
// })();
