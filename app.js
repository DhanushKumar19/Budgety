//UI Controller

var uiController = (function(){
    return {
        getInput : function(){
            return {
             type : document.querySelector('.add__type').value,
             description : document.querySelector('.add__description').value,
             value : document.querySelector('.add__value').value
            }

        }
    };
})();


//Budget Controller
var budgetController = (function(){
    //
})();


//Global App controller
var controller = (function(budgetctrl,uictrl){

    var ctrlAddItem = function(){
        var input = uictrl.getInput();
        console.log(input);
    }
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress',function(e){
        if(e.keyCode===13 )//|| e.which === 13)
        {
            ctrlAddItem();
        }
    })
})(budgetController,uiController);
