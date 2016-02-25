describe('site-horizontal-loader directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element;

    beforeEach(inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = angular.element('<site-horizontal-loader></site-horizontal-loader>');
        $compile(element)($scope);
        scope = element.scope();
    }));


    it('site-horizontal-loader panel', function(){
        expect(scope.panel).toBeUndefined();
    });
});