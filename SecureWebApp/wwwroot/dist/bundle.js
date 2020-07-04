(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"ol {\\n  list-style-type: none;\\n  counter-reset: item;\\n  margin: 0;\\n  padding: 0; }\\n\\nol > li {\\n  display: table;\\n  counter-increment: item;\\n  margin-bottom: 0.6em; }\\n\\nol > li:before {\\n  content: counters(item, \\\".\\\") \\\". \\\";\\n  display: table-cell;\\n  padding-right: 0.6em; }\\n\\nli ol > li {\\n  margin: 0; }\\n\\nli ol > li:before {\\n  content: counters(item, \\\".\\\") \\\" \\\"; }\\n\\nnav.navbar {\\n  height: 6rem !important;\\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./scripts/functions/common.js":
/*!*************************************!*\
  !*** ./scripts/functions/common.js ***!
  \*************************************/
/*! exports provided: ValidatePasswordField, PerformAjaxCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidatePasswordField\", function() { return ValidatePasswordField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PerformAjaxCall\", function() { return PerformAjaxCall; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./scripts/functions/helpers.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction ValidatePasswordField(Value)\r\n{\r\n\r\n    let Check = 0;\r\n\r\n    if (Value.length < 8)                { Check++; };\r\n    if (_helpers__WEBPACK_IMPORTED_MODULE_0__[\"IsEmpty\"](Value))         { Check++; };\r\n    if (!_helpers__WEBPACK_IMPORTED_MODULE_0__[\"HasLowerCase\"](Value))   { Check++; };\r\n    if (!_helpers__WEBPACK_IMPORTED_MODULE_0__[\"HasUpperCase\"](Value))   { Check++; };\r\n    if (!_helpers__WEBPACK_IMPORTED_MODULE_0__[\"HasSpecialChar\"](Value)) { Check++; };\r\n\r\n    if (Check != 0)\r\n    {\r\n        return false;\r\n    }\r\n    else\r\n    {\r\n        return true;\r\n    }\r\n\r\n};\r\n\r\n\r\nfunction PerformAjaxCall(Method, Url, PayLoad, Callback)\r\n{\r\n\r\n    const ContentType = \"application/json; charset=UTF-8\";\r\n    let Request = new XMLHttpRequest();\r\n\r\n    Request.open(Method, Url, true);\r\n    Request.setRequestHeader(\"Content-Type\", ContentType);\r\n\r\n    Request.onload = function ()\r\n    {\r\n\r\n        if (this.status === 200)\r\n        {\r\n            let ParsedResponse = JSON.parse(this.response);\r\n            Callback(ParsedResponse, this.status);\r\n        }\r\n        else\r\n        {\r\n            Callback(null, this.status);\r\n        }\r\n\r\n    };\r\n\r\n    Request.onerror = function ()\r\n    {\r\n        Callback(null, this.status);\r\n    };\r\n\r\n    if (Method === \"GET\" || Method === \"DELETE\")\r\n    {\r\n        Request.send();\r\n    }\r\n\r\n    if (Method === \"PUT\" || Method === \"POST\" || Method === \"PATCH\")\r\n    {\r\n        Request.send(PayLoad);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/functions/common.js?");

/***/ }),

/***/ "./scripts/functions/helpers.js":
/*!**************************************!*\
  !*** ./scripts/functions/helpers.js ***!
  \**************************************/
/*! exports provided: FormatPhoneNumber, HasSpecialChar, HasLowerCase, HasUpperCase, IsNumeric, IsEmpty, ValidateEmail, CleanBaseUrl, ClearSelectElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormatPhoneNumber\", function() { return FormatPhoneNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HasSpecialChar\", function() { return HasSpecialChar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HasLowerCase\", function() { return HasLowerCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HasUpperCase\", function() { return HasUpperCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsNumeric\", function() { return IsNumeric; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsEmpty\", function() { return IsEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidateEmail\", function() { return ValidateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CleanBaseUrl\", function() { return CleanBaseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClearSelectElement\", function() { return ClearSelectElement; });\n﻿\r\n\r\n\r\n\r\nfunction IsEmpty(AValue)\r\n{\r\n    return typeof AValue === 'string' && !AValue.trim() || typeof AValue === undefined || AValue === null;\r\n};\r\n\r\n\r\nfunction IsNumeric(AValue)\r\n{\r\n    return !isNaN(parseFloat(AValue)) && isFinite(AValue);\r\n};\r\n\r\n\r\nfunction ValidateEmail(AEmail)\r\n{\r\n    let LRegex = /\\S+@\\S+\\.\\S+/;\r\n    return LRegex.test(AEmail);\r\n};\r\n\r\n\r\nfunction FormatPhoneNumber(ANumber)\r\n{\r\n    ANumber = ANumber.replace(/[^\\d]+/g, '').replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{3})/, '($1) $2 $3 $4');\r\n\r\n    if (isEmpty(ANumber))\r\n    {\r\n        return false;\r\n    }\r\n    else\r\n    {\r\n        return ANumber;\r\n    };\r\n\r\n};\r\n\r\n\r\nfunction HasLowerCase(AText)\r\n{\r\n    if (AText.toUpperCase() != AText)\r\n    {\r\n        return true;\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\n\r\nfunction HasUpperCase(AText)\r\n{\r\n    if (AText.toLowerCase() != AText)\r\n    {\r\n        return true;\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\n\r\nfunction HasSpecialChar(str)\r\n{\r\n    let LFormat = /[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]/;\r\n\r\n    if (LFormat.test(str))\r\n    {\r\n        return true;\r\n    }\r\n    else\r\n    {\r\n        return false;\r\n    }\r\n\r\n}\r\n\r\nfunction CleanBaseUrl()\r\n{\r\n\r\n    let LCurrentUrl = window.location.href;\r\n    let LCheck = 0;\r\n    let LBaseUrl = \"\";\r\n\r\n    for (let Index = 0; Index <= LCurrentUrl.length; Index++)\r\n    {\r\n        LBaseUrl = LCurrentUrl.charAt(Index);\r\n        if (LBaseUrl.charAt(Index) === \"/\")\r\n        {\r\n            LCheck++;\r\n            if (LCheck === 2)\r\n            {\r\n                break;\r\n            };\r\n        };\r\n    }\r\n\r\n    return LBaseUrl;\r\n\r\n}\r\n\r\n\r\nfunction ClearSelectElement(ASelectElement)\r\n{\r\n    let Index, Length = ASelectElement.options.length - 1;\r\n\r\n    for (Index = Length; Index >= 0; Index--)\r\n    {\r\n        ASelectElement.remove(Index);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/functions/helpers.js?");

/***/ }),

/***/ "./scripts/startup.js":
/*!****************************!*\
  !*** ./scripts/startup.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/login */ \"./scripts/views/login.js\");\n/* harmony import */ var _views_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/register */ \"./scripts/views/register.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => Initialize());\r\n\r\n\r\nfunction Initialize()\r\n{\r\n\r\n    const IsLoginPage    = document.getElementById(\"LoginForm\");\r\n    const IsRegisterPage = document.getElementById(\"RegisterForm\");\r\n\r\n    if (IsLoginPage)\r\n    {\r\n\r\n    }\r\n\r\n    if (IsRegisterPage)\r\n    {\r\n\r\n        const FirstNameInput      = document.getElementById(\"Input_FirstName\");\r\n        const LastNameInput       = document.getElementById(\"Input_LastName\");\r\n        const NicknameInput       = document.getElementById(\"Input_Nickname\");\r\n        const EmailAddressInput   = document.getElementById(\"Input_EmailAddress\");\r\n        const PasswordInput       = document.getElementById(\"Input_Password\");\r\n        const CountryListSelect   = document.getElementById(\"Select_CountryList\");\r\n        const CityListSelect      = document.getElementById(\"Select_CityList\");\r\n        const TermsCheckbox       = document.getElementById(\"Handle_TermsCheckbox\");\r\n        const CreateAccountButton = document.getElementById(\"Button_CreateAccount\");\r\n\r\n        CityListSelect.selectedIndex = 0;\r\n        CityListSelect.disabled = true;\r\n\r\n        FirstNameInput.addEventListener(\"change\", (event) => { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Input_FirstName\"](event); });\r\n        LastNameInput.addEventListener(\"change\", (event) => { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Input_LastName\"](event); });\r\n        NicknameInput.addEventListener(\"change\", (event) => { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Input_Nickname\"](event); });\r\n        PasswordInput.addEventListener(\"change\", (event) => { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Input_Password\"](event) });\r\n        CountryListSelect.addEventListener(\"change\", (event) => { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Select_CountryList\"](event); });\r\n\r\n        TermsCheckbox.addEventListener(\"click\", function () { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Handle_TermsCheckbox\"](this.checked); });\r\n        CreateAccountButton.addEventListener(\"click\", function () { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Button_CreateAccount\"](); });\r\n\r\n        EmailAddressInput.onkeyup = function () { _views_register__WEBPACK_IMPORTED_MODULE_1__[\"Input_EmailAddress\"](EmailAddressInput.value); };\r\n\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/startup.js?");

/***/ }),

/***/ "./scripts/views/login.js":
/*!********************************!*\
  !*** ./scripts/views/login.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/views/login.js?");

/***/ }),

/***/ "./scripts/views/register.js":
/*!***********************************!*\
  !*** ./scripts/views/register.js ***!
  \***********************************/
/*! exports provided: Input_FirstName, Input_LastName, Input_Nickname, Input_EmailAddress, Input_Password, Select_CountryList, Handle_TermsCheckbox, Button_CreateAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input_FirstName\", function() { return Input_FirstName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input_LastName\", function() { return Input_LastName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input_Nickname\", function() { return Input_Nickname; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input_EmailAddress\", function() { return Input_EmailAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input_Password\", function() { return Input_Password; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Select_CountryList\", function() { return Select_CountryList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Handle_TermsCheckbox\", function() { return Handle_TermsCheckbox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button_CreateAccount\", function() { return Button_CreateAccount; });\n/* harmony import */ var _functions_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/helpers */ \"./scripts/functions/helpers.js\");\n/* harmony import */ var _functions_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/common */ \"./scripts/functions/common.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Input_FirstName(Event)\r\n{\r\n\r\n    let Verified  = document.getElementById(\"OK_FirstName\");\r\n    let Malformed = document.getElementById(\"ERR_FirstName\");\r\n\r\n    if (_functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"IsEmpty\"](Event.target.value))\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"visible\";\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"visible\";\r\n        Malformed.style.visibility = \"hidden\";\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Input_LastName(Event)\r\n{\r\n\r\n    let Verified  = document.getElementById(\"OK_LastName\");\r\n    let Malformed = document.getElementById(\"ERR_LastName\");\r\n\r\n    if (_functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"IsEmpty\"](Event.target.value))\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"visible\";\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"visible\";\r\n        Malformed.style.visibility = \"hidden\";\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Input_Nickname(Event)\r\n{\r\n\r\n    let Verified  = document.getElementById(\"OK_Nickname\");\r\n    let Malformed = document.getElementById(\"ERR_Nickname\");\r\n\r\n    if (_functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"IsEmpty\"](Event.target.value))\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"visible\";\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"visible\";\r\n        Malformed.style.visibility = \"hidden\";\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Input_EmailAddress(EmailAddress)\r\n{\r\n\r\n    let Handler   = document.getElementById(\"Handle_EmailAddress\");\r\n    let Verified  = document.getElementById(\"OK_EmailAddress\");\r\n    let Malformed = document.getElementById(\"ERR_EmailAddress\");\r\n\r\n    Verified.style.display  = \"visibility\";\r\n    Malformed.style.display = \"visibility\";\r\n    Handler.classList.add(\"is-loading\");\r\n\r\n    if (!_functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"IsEmpty\"](EmailAddress) && _functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"ValidateEmail\"](EmailAddress))\r\n    {\r\n\r\n        _functions_common__WEBPACK_IMPORTED_MODULE_1__[\"PerformAjaxCall\"](\r\n            \"GET\",\r\n            window.location.origin + \"/api/v1/ajax/validation/\" + EmailAddress + \"/\",\r\n            null,\r\n            CheckEmailAddress_Callback\r\n        );\r\n\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"hidden\";\r\n        Handler.classList.remove(\"is-loading\");\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction CheckEmailAddress_Callback(ParsedResponse, StatusCode)\r\n{\r\n\r\n    let Handler   = document.getElementById(\"Handle_EmailAddress\");\r\n    let Verified  = document.getElementById(\"OK_EmailAddress\");\r\n    let Malformed = document.getElementById(\"ERR_EmailAddress\");\r\n\r\n    Handler.classList.remove(\"is-loading\");\r\n\r\n    if (StatusCode === 200)\r\n    {\r\n\r\n        if (ParsedResponse.IsEmailValid)\r\n        {\r\n            Verified.style.visibility  = \"visible\";\r\n            Malformed.style.visibility = \"hidden\";\r\n        }\r\n        else\r\n        {\r\n            Verified.style.visibility  = \"hidden\";\r\n            Malformed.style.visibility = \"visible\";\r\n        }\r\n\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"hidden\";\r\n        alert(\"An error has occured during the processing. Returned status code: \" + StatusCode + \".\");\r\n    }\r\n\r\n} \r\n\r\n\r\nfunction Input_Password(Event)\r\n{\r\n\r\n    let Verified  = document.getElementById(\"OK_Password\");\r\n    let Malformed = document.getElementById(\"ERR_Password\");\r\n\r\n    if (!_functions_common__WEBPACK_IMPORTED_MODULE_1__[\"ValidatePasswordField\"](Event.target.value))\r\n    {\r\n        Verified.style.visibility  = \"hidden\";\r\n        Malformed.style.visibility = \"visible\";\r\n    }\r\n    else\r\n    {\r\n        Verified.style.visibility  = \"visible\";\r\n        Malformed.style.visibility = \"hidden\";\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Select_CountryList(Event)\r\n{\r\n\r\n    let Handler    = document.getElementById(\"Handle_CityList\");\r\n    let SelectedId = Event.target.value;\r\n\r\n    Handler.classList.add(\"is-loading\");\r\n\r\n    _functions_common__WEBPACK_IMPORTED_MODULE_1__[\"PerformAjaxCall\"](\r\n        \"GET\",\r\n        window.location.origin + \"/api/v1/ajax/cities/\" + SelectedId + \"/\",\r\n        null,\r\n        GetCountryList_Callback\r\n    );\r\n\r\n}\r\n\r\n\r\nfunction GetCountryList_Callback(ParsedResponse, StatusCode)\r\n{\r\n\r\n    let Handler  = document.getElementById(\"Handle_CityList\");\r\n    let Selector = document.getElementById(\"Select_CityList\");\r\n\r\n    Handler.classList.remove(\"is-loading\");\r\n\r\n    if (StatusCode == 200)\r\n    {\r\n\r\n        _functions_helpers__WEBPACK_IMPORTED_MODULE_0__[\"ClearSelectElement\"](Selector);\r\n\r\n        for (let Index = 0; Index < ParsedResponse.Cities.length; Index++)\r\n        {\r\n\r\n            let City = ParsedResponse.Cities[Index];\r\n            let Option = document.createElement(\"option\");\r\n\r\n            Option.value = City.id;\r\n            Option.innerHTML = City.name;\r\n            Selector.appendChild(Option);\r\n\r\n        }\r\n\r\n        Selector.removeAttribute(\"disabled\");\r\n        Selector.selectedIndex = 0;\r\n\r\n    }\r\n    else\r\n    {\r\n        alert(\"An error has occured during the processing. Returned status code: \" + StatusCode + \".\");\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Handle_TermsCheckbox(IsChecked)\r\n{\r\n\r\n    if (IsChecked)\r\n    {\r\n        document.getElementById(\"Button_CreateAccount\").disabled = false;\r\n    }\r\n    else\r\n    {\r\n        document.getElementById(\"Button_CreateAccount\").disabled = true;\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction Button_CreateAccount()\r\n{\r\n\r\n    //var UserInputData =\r\n    //{\r\n    //    FirstName:    FirstNameInput.value,\r\n    //    LastName:     LastNameInput.value,\r\n    //    NickName:     NicknameInput.value,\r\n    //    EmailAddress: EmailAddressInput.value,\r\n    //    Password:     PasswordInput.value,\r\n    //    Country:      CountryListSelect.value,\r\n    //    City:         CountryList.value\r\n    //};\r\n\r\n    //...\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/views/register.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./styles/main.scss ./scripts/startup.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./styles/main.scss */\"./styles/main.scss\");\nmodule.exports = __webpack_require__(/*! ./scripts/startup.js */\"./scripts/startup.js\");\n\n\n//# sourceURL=webpack:///multi_./styles/main.scss_./scripts/startup.js?");

/***/ })

},[[0,"runtime","vendors"]]]);