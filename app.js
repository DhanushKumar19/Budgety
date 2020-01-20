//UI Controller

var uiController = (function () {
    var classString = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        button: '.add__btn'
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(classString.type).value,
                description: document.querySelector(classString.description).value,
                value: document.querySelector(classString.value).value
            }
        },
        addListItem: function (obj, type) {
            var html, innerHtml;

            if (type === 'exp') {
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            else if (type === 'inc') {
                html = '<div class="item clearfix" id="income-%id%><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            innerHtml = html.replace('%id%', obj.id);
            innerHtml = innerHtml.replace('%description%', obj.description);
            innerHtml = innerHtml.replace('%value%', obj.value);


        },
        getclassString: function () {
            return classString;
        }
    };
})();


//Budget Controller
var budgetController = (function () {

    var Expense = function (id, desc, val) {
        this.id = id;
        this.description = desc;
        this.value = val;
    };
    var Income = function (id, desc, val) {
        this.id = id;
        this.description = desc;
        this.value = val;
    };

    var data = {
        allItem: {

            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };


    return {
        addItem: function (type, desc, val) {
            var item, id;

            //create id
            if (data.allItem[type].length > 0)
                id = data.allItem[type][data.allItem[type].length - 1].id + 1;
            else
                id = 0;

            if (type === 'exp')
                item = new Expense(id, desc, val);
            else if (type === 'inc')
                item = new Income(id, desc, val);

            data.allItem[type].push(item);
            return item;
        },


    };




})();

//Global App controller
var controller = (function (budgetctrl, uictrl) {

    var setupEventListener = function () {
        var str = uictrl.getclassString();
        document.querySelector(str.button).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        })
    };

    var ctrlAddItem = function () {

        // get the field input data
        var input = uictrl.getInput();

        //Add the item to the budget Controler
        var y = budgetctrl.addItem(input.type, input.description, input.value);
        console.log(y);
        budgetctrl.testing();

    }
    return {
        init: function () {
            console.log("Runninf successfully !!");
            setupEventListener();

        }
    }

})(budgetController, uiController);

controller.init();
