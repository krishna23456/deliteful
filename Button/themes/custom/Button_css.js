define(function(){ return '\
.d-button {\
  padding: 15px 10px;\
  border-style: outset;\
  border-width: 1px;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#e2e2e2));\
  background-image: linear-gradient(to bottom, #ffffff 0%, #e2e2e2 100%);\
  font-family: Helvetica;\
  cursor: pointer;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border: 1px solid #c0c0c0;\
  border-bottom-color: #9b9b9b;\
  border-radius: 0;\
  color: #000000;\
  font-size: 13px;\
}\
.d-button-text {\
  margin: 10px;\
}\
.d-button:active,\
.d-button-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#bbbbbb), to(#999999));\
  background-image: linear-gradient(to bottom, #bbbbbb 0%, #999999 100%);\
  color: #ffffff;\
}\
.d-button-disabled,\
.d-button:disabled {\
  border-color: grey;\
  background-image: none;\
  color: grey;\
  cursor: default;\
}\
.d-button-blue {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#48adfc), to(#048bf4));\
  background-image: linear-gradient(to bottom, #48adfc 0%, #048bf4 100%);\
  color: #ffffff;\
}\
.d-button-blue-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#bbbbbb), to(#999999));\
  background-image: linear-gradient(to bottom, #bbbbbb 0%, #999999 100%);\
}\
.d-button-red {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fa9d58), to(#ee4115));\
  background-image: linear-gradient(to bottom, #fa9d58 0%, #ee4115 100%);\
  color: #ffffff;\
}\
.d-button-red-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#bbbbbb), to(#999999));\
  background-image: linear-gradient(to bottom, #bbbbbb 0%, #999999 100%);\
}\
'; } );
