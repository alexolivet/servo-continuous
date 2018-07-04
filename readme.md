IoT - Servo - Continuous with PubNub , Node.js and johnny-five
----------------------------------------------------

Arduino, an open-source, microcontroller-based kit, one can connect to it many different ways. One of them is with the johnny-five library. I have chosen this way of tackling an arduino because I do not feel confortable with C-based language required for programming an Arduino board.

This simple html5 page allows you to control a Servo motor. This scenario has some pre-conditions, say some setup required.

* StandardFirmata sketch needs to be uploaded onto the Arduino board. Check the Arduino IDE.
* Make sure you have Node.js installed.
* download the latest johnny-five library.
* Make sure you have the required hardware and wiring.
* Create an account with Pubnub. Get the keys
* PubNub has a great Publish/Subscribe model for real-time data streaming and device signaling. 
* Initialize PubNub. Use Johnny-five to control the board.

