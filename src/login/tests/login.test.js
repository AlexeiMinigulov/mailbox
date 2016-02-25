describe('login directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        $q,
        scope,
        element,
        Auth;

    beforeEach(inject(function(_Auth_, $rootScope, _$compile_, _$q_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<login></login>');
        $compile(element)($scope);
        scope = element.scope();
        Auth = _Auth_;
        $q = _$q_;
    }));


    it('login panel', function(){
        expect(scope.panel).toBeDefined();
    });

    it('login panel.login', function(){
        spyOn(Auth, 'login').and.callThrough();
        scope.panel.login();
        expect(Auth.login).toHaveBeenCalled();
    });

    it('login panel.login', function(){
        spyOn(Auth, 'login').and.callThrough();
        scope.panel.login();
        expect(Auth.login).toHaveBeenCalled();
    });

    it('login panel.login fail', function(){
        spyOn(Auth, 'login').and.callFake(function(){
            var d = $q.defer();
            d.reject('some error');
            return d.promise;
        });
        scope.panel.login();
        $scope.$digest();
        expect(scope.panel.error).toBe(true);
    });

    it('login panel.login success', function(){
        spyOn(Auth, 'login').and.callFake(function(){
            var d = $q.defer();
            d.resolve(1);
            return d.promise;
        });
        scope.panel.login();
        $scope.$digest();
        expect(scope.panel.user).toBe(1);
    });
});