describe('site-message directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        scope,
        element;

    beforeEach(inject(function($rootScope, _$compile_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<site-message></site-message>');
        $compile(element)($scope);
        scope = element.isolateScope();
    }));


    it('site-message panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('site-message info', function(){
        element = angular.element('<site-message type="info"></site-message>');
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel.type).toBe('blue-text');
    });

    it('site-message success', function(){
        element = angular.element('<site-message type="success"></site-message>');
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel.type).toBe('green-text');
    });

    it('site-message error', function(){
        element = angular.element('<site-message type="error"></site-message>');
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel.type).toBe('red-text');
    });
});