define(function(){ return '\
.d-button {\
  padding: 15px 10px;\
  border-style: outset;\
  border-width: 1px;\
  font-family: Helvetica;\
  cursor: pointer;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border: 2px solid #ffffff;\
  border-radius: 0;\
  margin-top: 8px;\
  margin-bottom: 8px;\
  color: #ffffff;\
  background-color: transparent;\
  font-size: 9pt;\
  font-family: "Segoe WP", "Segoe UI", "HelveticaNeue", "Helvetica-Neue", "Helvetica", "BBAlpha Sans", "sans-serif";\
  background-image: none;\
  line-height: 0;\
  text-transform: lowercase;\
  -ms-user-select: none;\
  height: 32px;\
  padding-bottom: 3px;\
  text-decoration: none;\
}\
.d-button-text {\
  margin: 10px;\
}\
.d-button:active,\
.d-button-selected {\
  color: #ffffff;\
  background-color: Highlight;\
}\
.d-button-disabled,\
.d-button:disabled {\
  border-color: grey;\
  background-image: none;\
  color: grey;\
  cursor: default;\
}\
.d-button-blue {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#7a9de9), to(#2362dd));\
  background-image: linear-gradient(to bottom, #7a9de9 0%, #2362dd 100%);\
  color: white;\
}\
.d-button-red {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fa9d58), to(#ee4115));\
  background-image: linear-gradient(to bottom, #fa9d58 0%, #ee4115 100%);\
  color: white;\
}\
'; } );
