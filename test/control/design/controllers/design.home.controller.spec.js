describe('Unit : skinIndexPluginDesign design.home.controller.js', function () {
    var $scope, DesignHome, $rootScope, q, $controller, Buildfire, TAG_NAMES, $timeout,Datastore;
    beforeEach(module('skinIndexPluginDesign'));

    describe('Unit : DataStore Factory returning error of datastore.get inside init', function () {
        beforeEach(module('skinIndexPluginDesign', function ($provide) {
            $provide.service('Buildfire', function () {
                this.components = {};
                this.components.images = jasmine.createSpyObj('components.images', ['thumbnail']);
                this.datastore = jasmine.createSpyObj('datastore', ['get', 'save']);
                this.components.images.thumbnail.and.callFake(function (id) {

                });
                this.datastore.get.and.callFake(function (_tagName, callback) {
                    callback('Error', null);
                });
                this.datastore.save.and.callFake(function (_item, _tagName, callback) {
                    if (!_item || !typeof callback === 'function') {
                        callback('Error', null);
                    } else {
                        callback(null, 'Success');
                    }
                });
            });
        }));

        beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _Buildfire_, _TAG_NAMES_) {
            Datastore=jasmine.createSpyObj('Datastore',['save','get']);
            $rootScope = _$rootScope_;
            q = _$q_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            TAG_NAMES = _TAG_NAMES_;
            Buildfire = _Buildfire_;
        }));

        beforeEach(function () {

            inject(function ($injector, $q) {
                $rootScope = $injector.get('$rootScope');
                $scope = $rootScope.$new();
                DesignHome = $injector.get('$controller')('DesignHomeCtrl', {
                    $scope: $scope,
                    TAG_NAMES: TAG_NAMES,
                    Buildfire: Buildfire,
                    Datastore:Datastore
                });
                q = $q;
            });
        });
        it('Design Home Controller should be defined', function () {
            expect(DesignHome).toBeDefined();


        });

        describe('UT DesignHome.saveData should be called success', function () {
            beforeEach(function(){

                Datastore.save.and.callFake(function(){
                    var defer=q.defer();
                    defer.resolve({},'');
                    return defer.promise;
                });
            });
            it('DesignHome.saveData should be called', function () {
                DesignHome.saveData({},"uvoInfo");
                $scope.$digest();
            });
        });


        describe('UT DesignHome.saveData should be called failure', function () {
            beforeEach(function(){

                Datastore.save.and.callFake(function(){
                    var defer=q.defer();
                    defer.reject({});
                    return defer.promise;
                });
            });
            it('DesignHome.saveData should be called', function () {
                DesignHome.saveData({},"uvoInfo");
                $scope.$digest();
            });
        });
    });
    describe('Unit : DataStore Factory returning success of datastore.get inside init with data or success if part execution', function () {
        beforeEach(module('skinIndexPluginDesign', function ($provide) {
            $provide.service('Buildfire', function () {
                this.components = {};
                this.components.images = jasmine.createSpyObj('components.images', ['thumbnail']);
                this.datastore = jasmine.createSpyObj('datastore', ['get', 'save']);
                this.components.images.thumbnail.and.callFake(function (id) {
                    if (id) {
                        return {loadbackground: function (img) {
                        }};
                    }
                });
                this.datastore.get.and.callFake(function (_tagName, callback) {
                    callback(null, {data: {backgroundImage: 'abc.png'}});
                });
                this.datastore.save.and.callFake(function (_item, _tagName, callback) {
                    if (!_item || !typeof callback === 'function') {
                        callback('Error', null);
                    } else {
                        callback(null, 'Success');
                    }
                });
            });
        }));

        beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _Buildfire_, _TAG_NAMES_) {
            Datastore=jasmine.createSpyObj('Datastore',['save','get']);
            $rootScope = _$rootScope_;
            q = _$q_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            TAG_NAMES = _TAG_NAMES_;
            Buildfire = _Buildfire_;
        }));

        beforeEach(function () {

            inject(function ($injector, $q) {
                $rootScope = $injector.get('$rootScope');
                $scope = $rootScope.$new();
                DesignHome = $injector.get('$controller')('DesignHomeCtrl', {
                    $scope: $scope,
                    TAG_NAMES: TAG_NAMES,
                    Buildfire: Buildfire,
                    Datastore:Datastore
                });
                q = $q;
            });
        });



        it('Design Home Controller should be defined success', function () {
            Datastore.save.and.callFake(function(){
                var defer=q.defer();
                defer.resolve({},'');
                return defer.promise;
            });

            expect(DesignHome).toBeDefined();
            $scope.$digest();
        });

        it('Design Home Controller should be defined failure', function () {
            Datastore.save.and.callFake(function(){
                var defer=q.defer();
                defer.reject('');
                return defer.promise;
            });

            expect(DesignHome).toBeDefined();
            $scope.$digest();
        });
    });
    describe('Unit : DataStore Factory returning success of datastore.get inside init with no data or success else part execution', function () {
        beforeEach(module('skinIndexPluginDesign', function ($provide) {
            $provide.service('Buildfire', function () {
                this.components = {};
                this.components.images = jasmine.createSpyObj('components.images', ['thumbnail']);
                this.datastore = jasmine.createSpyObj('datastore', ['get', 'save']);
                this.components.images.thumbnail.and.callFake(function (id) {
                    if (id) {
                        return {loadbackground: function (img) {
                        }, onChange: function (url) {
                        }, onDelete: function (url) {
                        }};
                    }
                });
                this.datastore.get.and.callFake(function (_tagName, callback) {
                    callback(null, null);
                });
                this.datastore.save.and.callFake(function (_item, _tagName, callback) {
                    callback('Error', null);
                });
            });
        }));

        beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _Buildfire_, _TAG_NAMES_, _$timeout_) {
            $rootScope = _$rootScope_;
            q = _$q_;
            $timeout = _$timeout_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            TAG_NAMES = _TAG_NAMES_;
            Buildfire = _Buildfire_;
        }));

        beforeEach(function () {

            inject(function ($injector, $q) {
                $rootScope = $injector.get('$rootScope');
                $scope = $rootScope.$new();
                DesignHome = $injector.get('$controller')('DesignHomeCtrl', {
                    $scope: $scope,
                    TAG_NAMES: TAG_NAMES,
                    Buildfire: Buildfire
                });
                q = $q;
            });
        });
        it('Design Home Controller should be defined', function () {
            expect(DesignHome).toBeDefined();
            DesignHome.itemInfo = {backgroundImage: 'abc.png'};
            $scope.$digest();
        });
    });


    describe('Unit :  DesignHome.saveData is called', function () {

    });
});