'use strict';

angular.module('Timetable')

.factory('TimetableService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.getTimetable = function (courseId, callback) {
              $http({
                  url: 'http://localhost:3000/api/timetable',
                  method: "POST",
                  data: { 'courseId' : courseId}
              })
              .then(function(response) {
                console.log(response.data.result)
                   if(response.data.result =='Incorrect Course Id') {
                      response.message = response.data.result;
                   }else{
                     var postData = {success:response.data.result}
                   }
                   callback(postData);
                  },
              function(response) { // optional
                      // failed
              });
        };


        return service;
    }])