'use strict';
/* Controllers */
function MsgCtrl($scope) {
  var socket = io.connect("http://192.168.0.229");
  $scope.msgs = [];
  
  socket.on("get text", function(data) {
	$scope.msgs = data;
        $scope.$digest();
  });
  
  $scope.sendText = function sendText(txt) {
    socket.emit("puttext", txt);
  }
}
