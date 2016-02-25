describe('userEdit directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        $httpBackend,
        $q,
        scope,
        element,
        Users;

    beforeEach(inject(function($rootScope, _$compile_, _$q_, _Users_, _$httpBackend_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<user-edit id="1"></user-edit>');
        Users = _Users_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));


    it('user-edit panel', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel).toBeDefined();
    });

    it('user-edit panel.error contact.name', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        scope.panel.contact = {};
        scope.panel.editUser();
        expect(scope.panel.error).toBe(true);
    });

    it('user-edit panel.error contact.username', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        scope.panel.contact = {
            name: 1
        };
        scope.panel.editUser();
        expect(scope.panel.error).toBe(true);
    });

    it('user-edit saveById fail', function(){
        $httpBackend.expectGET('/data/users.json').respond(401, 'some error');
        spyOn(Users, 'saveById').and.callFake(function(){});
        $compile(element)($scope);
        scope = element.isolateScope();
        scope.panel.contact = {
            name: 1,
            username: 1
        };
        scope.panel.editUser();
        expect(scope.panel.success).toBe(true);
    });

    it('user-edit saveById success', function(){
        $httpBackend.expectGET('/data/users.json').respond(200, 'some error');
        spyOn(Users, 'saveById').and.callFake(function(){});
        $compile(element)($scope);
        scope = element.isolateScope();
        scope.panel.contact = {
            name: 1,
            username: 1
        };
        scope.panel.editUser();
        expect(scope.panel.text).toBe('Used saved');
    });
    //
    //it('message-item panel.errorText', function(){
    //    $compile(element)($scope);
    //    scope = element.isolateScope();
    //    expect(scope.panel.errorText).toBeDefined();
    //});
    //
    //it('message-item Messages.getById fail', function(){
    //    spyOn(Messages, 'getById').and.callFake(function(){
    //        var d = $q.defer();
    //        d.reject('some error');
    //        return d.promise;
    //    });
    //    $compile(element)($scope);
    //    scope = element.isolateScope();
    //    $scope.$digest();
    //    expect(scope.panel.errorText).toBe('some error');
    //});
    //
    //it('message-item Messages.getById success', function(){
    //    spyOn(Messages, 'getById').and.callFake(function(){
    //        var d = $q.defer();
    //        d.resolve(1);
    //        return d.promise;
    //    });
    //    $compile(element)($scope);
    //    scope = element.isolateScope();
    //    $scope.$digest();
    //    expect(scope.message).toBe(1);
    //});





});