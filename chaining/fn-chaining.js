var objConstruct = function(){
    this.function1= function () {
        alert("function1");
        return this;
    };
    this.function2=function () {
        alert("function2");
        return this;
    };
    this.function3= function () {
        alert("function3");
        return this;
    }
};

var obj = new objConstruct();
obj.function1().function2().function3();