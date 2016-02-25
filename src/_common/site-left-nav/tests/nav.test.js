describe('site-left-nav directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-left-nav></site-left-nav>');
        $compile(element)($scope);
        scope = element.isolateScope();
    }));


    it('site-left-nav panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('site-left-nav panel.menu', function(){
        expect(scope.panel.menu).toBeDefined();
    });

    it('site-left-nav panel.menu have at least 1 point', function(){
        expect(scope.panel.menu[0]).toBeDefined();
    });

});