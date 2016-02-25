describe('messages-item directive', function(){

    beforeEach(module('app'));

    var $scope,
        $compile,
        $q,
        scope,
        element,
        Messages;

    beforeEach(inject(function($rootScope, _$compile_, _$q_, _Messages_){
        $scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element('<message-item id="1"></site-container>');
        Messages = _Messages_;
        $q = _$q_;
    }));


    it('message-item panel', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel).toBeDefined();
    });

    it('message-item panel.loading', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel.loading).toBeDefined();
    });

    it('message-item panel.errorText', function(){
        $compile(element)($scope);
        scope = element.isolateScope();
        expect(scope.panel.errorText).toBeDefined();
    });

    it('message-item Messages.getById fail', function(){
        spyOn(Messages, 'getById').and.callFake(function(){
            var d = $q.defer();
            d.reject('some error');
            return d.promise;
        });
        $compile(element)($scope);
        scope = element.isolateScope();
        $scope.$digest();
        expect(scope.panel.errorText).toBe('some error');
    });

    it('message-item Messages.getById success', function(){
        spyOn(Messages, 'getById').and.callFake(function(){
            var d = $q.defer();
            d.resolve(1);
            return d.promise;
        });
        $compile(element)($scope);
        scope = element.isolateScope();
        $scope.$digest();
        expect(scope.message).toBe(1);
    });





});