//模块
function CoolModule(){
    var something = "cool";
    var another = [1,2,3];
    function doSomething(){
        console.log(sonmething);
    }
    function doAnother(){
        console.log(another.join("!"));
    }
    return {
        doSomething:doSomething,
        doAnother:doAnother
    };
}
var foo = CoolModule();
foo.doAnother();
foo.doSomething();

function CoolModule(id){
    function identify(){
        console.log(id);
    }
    return {
        identyfy : identify
    };
}
var foo1=CoolModule("foo 1");
var foo2=CoolModule("foo 2");

var foo = (function CoolModule(id){
    function change(){
        publicAPI.identify = identify2;
    }
    function identify1(){
        console.log(id);
    }
    function identify2(){
        console.log(id.toUpperCase());
    }
    var publicAPI = {
        change : change,
        identify : identify1
    };
    return publicAPI;
})("foo module");
foo.identify();
foo.change();
foo.identify();