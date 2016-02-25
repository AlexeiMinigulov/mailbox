describe('Messages Service', function(){

    beforeEach(module('app'));

    var Messages, defaultMessages, $scope, $httpBackend, $http, Configuration;
    beforeEach(inject(function(_Messages_, $rootScope, _$httpBackend_, _$http_, _Configuration_){
        Messages = _Messages_;
        Configuration = _Configuration_;
        $scope = $rootScope;
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        defaultMessages = [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                "date": "Feb, 25"
            }
        ];
    }));

    it('getAll()', function(done){
        $httpBackend.expectGET('/data/messages.json').respond(defaultMessages);
        Messages.getAll().then(
            function(data){
                expect(data).toEqual(defaultMessages);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    it('getAll() request fail', function(done){
        $httpBackend.expectGET('/data/messages.json').respond(401, "some http error");
        Messages.getAll().then(
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
        $httpBackend.expectGET('/data/messages.json').respond(defaultMessages);
        Messages.getById(1).then(
            function(data){
                expect(data).toEqual(defaultMessages[0]);
                done();
            }
        );
        $httpBackend.flush();
        $scope.$digest();
    });

    //it('getAll() request fail', function(done){
    //    $httpBackend.expectGET('/data/messages.json').respond(401, "some http error");
    //    Messages.getAll().then(
    //        function(data){},
    //        function(error){
    //            expect(error.status).toBe(401);
    //            done();
    //        }
    //    );
    //    $httpBackend.flush();
    //    $scope.$digest();
    //});




});