var SMS = function() {};

SMS.prototype.send = function(phoneNumber,message,successCallback,failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'SMSPlugin', 'send', [phoneNumber, message]);
};

cordova.addConstructor(function() {
    cordova.addPlugin("SMSPlugin", new SMS());
});
