describe('messages states', function(){

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

    it('message.item state', function(){
        spyOn(Auth, 'user').and.returnValue(1);
        var provider = $state.get('messages.item');
        var c = provider.templateProvider($timeout, {messageId: 1});
        $timeout(function(){
            expect(c.$$state.value).toBe('<message-item id="1"></message-item>');
        }, 1000)
        $timeout.flush();
    })

});