angular.module('AbhiSampleProject').service('sampleService', function($q, $http) {
    var fetchTansuctionsDetails = function() {
        return $q(function(resolve, reject) {
            var req = {
    		  url: "https://tone-analyzer-demo.mybluemix.net/api/tone",
    		  method: 'POST',
    		  headers: {
    			  "authorization": "Basic M2QyNTJhNGItMzdmMC00YzY4LWE3ZDgtZWNjY2Q3ZjJiMjg0Oll6dWYxdkFJcVMwdQ==",
    			  "content-type": "application/json"    			    
    		  },
    		  data: {
    				"text":"Hi+Jundai"
    		  }
            }
            $http(req).then(function(data) {
                if (data.data !== undefined) {
                    resolve(data.data);
                } else {
                    reject('S Failed!');
                }
            }, function(err) {
                reject(err);
            });
        });
    };
    return {
        fetchTansuctionsDetails: fetchTansuctionsDetails
    };
})