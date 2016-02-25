describe('site-loader directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-loader></site-loader>');
        $compile(element)($scope);
        scope = element.scope();
    }));


    it('site-loader panel', function(){
        expect(scope.panel).toBeUndefined();
    });
});