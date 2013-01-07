'use strict';

/* Controllers */

function ChatController($scope, socket) {

    $scope.chats = [
        {'name':'bruce lee', 'message':'I kill you with one finger'},
        {'name':'jackie chan', 'message': 'I kill you with my sense of humor'}
    ];

    socket.on('update ninjas', function (data) {
        $scope.chats.unshift({name:'anonymous', message:data.msg});
        console.log(data);
    });

    $scope.addMessage = function(msg) {
        var message = {name: 'me', msg: msg};
        $scope.chats.unshift({name:'me', message: message.msg});
        socket.emit("new message", message);
        $scope.msg = '';
    };

}
