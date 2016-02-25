describe('site-header directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-header></site-header>');
        $compile(element)($scope);
        scope = element.isolateScope();
    }));


    it('site-header panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('site-header panel.title', function(){
        expect(scope.panel.title).toBeDefined();
    });
});