describe('denied directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        scope,
        element,
        defaultUser;

    beforeEach(inject(function($rootScope, _$compile_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<denied></denied>');
        $compile(element)($scope);
        scope = element.scope();
    }));


    it('denied user', function(){
        expect(scope.user).toBe(null);
    });
});