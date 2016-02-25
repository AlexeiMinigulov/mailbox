describe('login states directive', function(){

    beforeEach(module('app'));

    var $scope,
        $state,
        state,
        Auth;

    beforeEach(inject(function($rootScope, _$state_, _Auth_){
        $scope = $rootScope.$new();
        $state = _$state_;
        Auth = _Auth_;
    }));


    it('login state', function(){
        state = $state.get('login');
        expect(state.url).toEqual('/login');
    });

    it('login state', function(){
        state = $state.get('login');
        expect(state.template).toBe('<login />');
    });

    it('logout state', function(){
        spyOn(Auth, 'logout');
        state = $state.get('logout');
        state.controller($scope, Auth, $state);
        expect(Auth.logout).toHaveBeenCalled();
    })

});