describe('site-footer directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-footer></site-footer>');
        $compile(element)($scope);
        scope = element.isolateScope();
    }));


    it('site-footer panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('site-footer panel.copy', function(){
        expect(scope.panel.copy).toBeDefined();
    });

    it('site-footer panel.author', function(){
        expect(scope.panel.author).toBeDefined();
    });

});