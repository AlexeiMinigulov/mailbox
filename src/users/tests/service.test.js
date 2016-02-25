describe('Users Service', function(){

    beforeEach(module('app'));

    var Users, defaultUsers, $scope, $httpBackend, $http, Configuration;
    beforeEach(inject(function(_Users_, $rootScope, _$httpBackend_, _$http_, _Configuration_){
        Users = _Users_;
        Configuration = _Configuration_;
        $scope = $rootScope;
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        defaultUsers = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret"
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette"
            }
        ];
    }));

    afterEach(function(){
        localStorage.clear();
    });

    it('getAll()', function(done){
        $httpBackend.expectGET('/data/users.json').respond(defaultUsers);
        Users.getAll().then(
            function(data){
                expect(data).toEqual(defaultUsers);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('getAll() request fail', function(done){
        $httpBackend.expectGET('/data/users.json').respond(401, "some http error");
        Users.getAll().then(
            function(data){},
            function(error){
                expect(error.status).toBe(401);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('getById()', function(done){
        $httpBackend.expectGET('/data/users.json').respond(defaultUsers);
        Users.getById(1).then(
            function(data){
                expect(data).toEqual(defaultUsers[0]);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('getById() request fail', function(done){
        $httpBackend.expectGET('/data/users.json').respond(401, "some http error");
        Users.getById(1).then(
            function(data){},
            function(error){
                expect(error.status).toBe(401);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('saveById() with id', function(done){
        $httpBackend.expectGET('/data/users.json').respond(defaultUsers);
        Users.saveById({
            id: 5,
            name: 'text',
            username: 'text2'
        }).then(
            function(){
                expect(Configuration.getStorageData('users').length).toBeGreaterThan(0);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('saveById() without id', function(done){
        $httpBackend.expectGET('/data/users.json').respond(defaultUsers);
        Users.saveById({
            name: 'text',
            username: 'text2'
        }).then(
            function(){
                expect(Configuration.getStorageData('users').length).toBeGreaterThan(0);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });





});