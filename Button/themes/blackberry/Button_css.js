define(function(){ return '\
.d-button {\
  padding: 15px 10px;\
  border-style: outset;\
  border-width: 1px;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f7fbf7), to(#cecfd6), color-stop(0.5, #ced3ce));\
  background-image: linear-gradient(to bottom, #f7fbf7 0%, #ced3ce 50%, #cecfd6 100%);\
  font-family: Helvetica;\
  cursor: pointer;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border-color: #9cacc0;\
  border-radius: 6px;\
  color: black;\
  font-size: 16px;\
}\
.d-button-text {\
  margin: 10px;\
}\
.d-button:active,\
.d-button-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#088eef), to(#0851ad), color-stop(0.5, #0869c6));\
  background-image: linear-gradient(to bottom, #088eef 0%, #0869c6 50%, #0851ad 100%);\
  color: white;\
}\
.d-button-disabled,\
.d-button:disabled {\
  border-color: grey;\
  background-image: none;\
  color: grey;\
  cursor: default;\
}\
.d-button-blue {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#7a9de9), to(#2362dd), color-stop(0.5, #366edf), color-stop(0.5, #215fdc));\
  background-image: linear-gradient(to bottom, #7a9de9 0%, #366edf 50%, #215fdc 50%, #2362dd 100%);\
  color: white;\
}\
.d-button-blue-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#088eef), to(#0851ad), color-stop(0.5, #0869c6));\
  background-image: linear-gradient(to bottom, #088eef 0%, #0869c6 50%, #0851ad 100%);\
}\
.d-button-red {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fa9d58), to(#ee4115), color-stop(0.5, #ff4d25), color-stop(0.5, #ed4d15));\
  background-image: linear-gradient(to bottom, #fa9d58 0%, #ff4d25 50%, #ed4d15 50%, #ee4115 100%);\
  color: white;\
}\
.d-button-red-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#088eef), to(#0851ad), color-stop(0.5, #0869c6));\
  background-image: linear-gradient(to bottom, #088eef 0%, #0869c6 50%, #0851ad 100%);\
}\
'; } );
