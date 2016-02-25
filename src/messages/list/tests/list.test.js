describe('messages-list directive', function(){

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
        element = angular.element('<messages-list></messages-list>');
        Messages = _Messages_;
        $q = _$q_;
    }));

    it('messages-list messages', function(){
        $compile(element)($scope);
        scope = element.scope();
        expect(scope.messages).toEqual([]);
    });

    it('messages-list panel', function(){
        $compile(element)($scope);
        scope = element.scope();
        expect(scope.panel).toBeDefined();
    });

    it('message-item Messages.getAll fail', function(){
        spyOn(Messages, 'getAll').and.callFake(function(){
            var d = $q.defer();
            d.reject('some error');
            return d.promise;
        });
        $compile(element)($scope);
        scope = element.scope();
        $scope.$digest();
        expect(scope.panel.errorText).toBe('some error');
    });

    it('message-item Messages.getAll success', function(){
        spyOn(Messages, 'getAll').and.callFake(function(){
            var d = $q.defer();
            d.resolve(1);
            return d.promise;
        });
        $compile(element)($scope);
        scope = element.scope();
        $scope.$digest();
        expect(scope.messages).toBe(1);
    });



});