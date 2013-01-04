'use strict';

/* Controllers */

function ChatController($scope) {

    $scope.chats = [
        {'name':'bruce lee', 'message':'I kill you with one finger'},
        {'name':'jackie chan', 'message': 'I kill you with my sense of humor'}
    ]

    $scope.addMessage = function(msg) {
        $scope.chats.unshift({name:'me', message:msg})
        $scope.msg = '';
    }

}