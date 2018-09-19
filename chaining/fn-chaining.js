var objConstruct = function(){
    this.function1= function () {
        console.log("function1");
        return this;
    };
    this.function2=function () {
        console.log("function2");
        return this;
    };
    this.function3= function () {
        console.log("function3");
        return this;
    }
};


var obj = {

    sayHello : function(){
        console.log('sayhello');
        return this;
    }, 
    sayHi : function(){
        console.log('sayhi');
        return this;
    }
}
obj.sayHello().sayHi();

var obj = new objConstruct();
console.log(obj);
obj.function1();
console.log(obj.function1());
obj.function1().function2().function3();


// function chaining 
// fn().call1().call2().call3......