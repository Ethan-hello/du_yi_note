var b = "123@y4384";

function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        (function(j) {
            arr[j] = function() {
                document.write(j + " ");
            }
        }(i));

        (function(j) {
            arr[i] = function() {
                console.log(j + "");
            }
        }(i));

        (function() {}());
    }

    return arr;
}

var arr = test();
for (var j = 0; j < 10; j++) {
    arr[j]();
}