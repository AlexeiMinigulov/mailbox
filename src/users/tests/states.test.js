describe('contacts states', function(){

    beforeEach(module('app'));

    var $scope,
        $state,
        $timeout,
        state,
        Auth;

    beforeEach(inject(function($rootScope, _$timeout_, _$state_, _Auth_){
        $scope = $rootScope.$new();
        $state = _$state_;
        Auth = _Auth_;
        $timeout = _$timeout_;
    }));

    it('contacts.edit state', function(){
        spyOn(Auth, 'user').and.returnValue(1);
        var provider = $state.get('contacts.edit');
        var c = provider.templateProvider($timeout, {userId: 1});
        $timeout(function(){
            expect(c.$$state.value).toBe('<user-edit id="1"></user-edit>');
        }, 1000)
        $timeout.flush();
    })

});