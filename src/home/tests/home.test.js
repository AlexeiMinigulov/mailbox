describe('home directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        scope,
        element,
        defaultUser;

    beforeEach(inject(function($rootScope, _$compile_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<home></home>');
        $compile(element)($scope);
        scope = element.scope();
    }));


    it('home user', function(){
        expect(scope.user).toBe(null);
    });
});