describe('site-container directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-container></site-container>');
        $compile(element)($scope);
        scope = element.isolateScope();
    }));


    it('site-container panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('site-container panel.title', function(){
        expect(scope.panel.title).toBeDefined();
    });

    it('site-container panel.user', function(){
        expect(scope.panel.user).toBeUndefined();
    });

});