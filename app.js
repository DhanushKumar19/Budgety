var uiController = (function(){
    return {
        getInput : function(){
            return {
             type : document.querySelector('.add__type').value,
             descripition : document.querySelector('.add__descripition').value,
             value : document.querySelector('.add__value').value
            }
            

        }
    };
})();
var budgetController = (function(){
    //
})();


//Global App controller
var controller = (function(budgetctrl,uictrl){

    var ctrlAddItem = function(){
        var input = uictrl.getInput();
        console.log(input);
    }
})(budgetController,uiController);