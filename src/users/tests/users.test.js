describe('users directive', function(){

    beforeEach(module('app'));

    var $scope,
        scope,
        element,
        Configuration;

    beforeEach(inject(function($rootScope, $compile, _Configuration_){
        $scope = $rootScope.$new();
        element = angular.element('<users></users>');
        $compile(element)($scope);
        scope = element.isolateScope();
        Configuration = _Configuration_;
    }));


    it('message user', function(){
        spyOn(Configuration, 'getStorageData');
        expect(scope.user).toBeDefined();
    });
});