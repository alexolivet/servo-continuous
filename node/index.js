var five = require('johnny-five');


//declare the board
five.Board().on('ready', function() {
    console.log('board ready');


    var pubnub = require('pubnub').init({
        publish_key: 'xxxxxxxxxxxxxxxxx',
        subscribe_key: 'xxxxxxxxxxxxxxxxx'
    });

    //declare the servo
    //attached to pin 10
    var servo = new five.Servo({
        pin: 10,
        startAt: 0,
        type: "continuous"
    });


    pubnub.subscribe({
        channel: 'servoControl',
        message: moveServo,
        error: function(err) { console.log(err); }
    });


    //event listeners are translated to servo moves
    function moveServo(message) {
        if (message.id == "up") {
            servo.to(45); // what happens?
            console.log("up")
        } else if (message.id == "down") {
            servo.to(90, 500); // what happens?
            console.log("down")
        } else if (message.id == "more") {
            servo.to(180, 500, 10); // what happens?
            console.log("more")
        } else if (message.id == "home") {
            servo.home();
            console.log("home")
        }
    }

});