'use strict';

/* Controllers */

function ChatController($scope, socket) {


    $scope.chats = [
        {'name':'jackie chan', 'message': 'I kill you with my sense of humor', color: 'orange'},
        {'name':'bruce lee', 'message':'I kill you with one finger', color:'green'}
    ];

    $scope.ninja = "";

    $scope.start = function()  {
        if (!$scope.ninja) {
            $scope.ninja = prompt("Who are you???");
            socket.emit("new ninja", $scope.ninja);
        }
    };

    $scope.start();

    socket.on('update ninjas', function (data) {
        $scope.chats.unshift({name:data.name, message:data.msg});
        console.log(data);
    });

    $scope.addMessage = function(msg) {
        $scope.chats.unshift({name:'me', message: msg});
        $scope.msg = '';
        socket.emit("new message", {name: $scope.ninja, msg: msg});
    };

}
