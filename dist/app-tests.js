describe('AppController', function(){

    beforeEach(module('app'));

    describe('makeEditable()', function(){
        it('should change value of isEditable', inject(function($controller){

            var myController = $controller('AppController');
            myController.isEditable = false;
            myController.makeEditable();

            expect(myController.isEditable).to.be.true;
        }));
    });

    describe('update()', function(){

        it('should return false for invalid form', inject(function($controller){

            var myController = $controller('AppController');
            myController.isEditable = true;
            var form = {$valid: false};

            expect(myController.update(form)).to.be.false;
        }));

        it('should overwrite master data with user data', inject(function($controller){

            var myController = $controller('AppController');
            var form = {$valid: true};
            myController.isEditable = true;
            myController.master = {};
            myController.user = {firstName: "Chris"};
            myController.update(form);

            expect(myController.master).to.deep.equal(myController.user);
        }));

        it('should set editable to false', inject(function($controller){

            var myController = $controller('AppController');
            var form = {$valid: true};
            myController.isEditable = true;
            myController.master = {};
            myController.user = {firstName: "Chris"};
            myController.update(form);

            expect(myController.isEditable).to.be.false;
        }));

    });

    describe('cancelChanges()', function(){

        it('should overwrite user data with master data', inject(function($controller){

            var myController = $controller('AppController');
            var form = {$valid: true};
            myController.master = {firstName: "Chris"};
            myController.user = {};
            myController.cancelChanges(form);

            expect(myController.master).to.deep.equal(myController.user);
        }));

        it('should set editable to false', inject(function($controller){

            var myController = $controller('AppController');
            var form = {$valid: true};
            myController.isEditable = true;
            myController.cancelChanges(form);

            expect(myController.isEditable).to.be.false;
        }));

    });

});