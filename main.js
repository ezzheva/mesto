(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationForm=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationForm.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationForm.submitButtonSelector)}var r,n;return r=t,(n=[{key:"_showInputError",value:function(t,e){var r=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationForm.inputErrorClass),r.classList.add(this._validationForm.errorClass),r.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationForm.inputErrorClass),e.classList.remove(this._validationForm.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._validationForm.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._validationForm.inactiveButtonClass))}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r,n,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardId=e._id,this._likes=e.likes,this._userId=r,this._ownerId=e.owner._id,this._templateSelector=n,this._handleCardClick=o,this._handleLikeCard=i,this._handleDeleteLike=u,this._handleCardDelete=a}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this._cardTemplate=document.querySelector(this._templateSelector).content,this._card=this._cardTemplate.querySelector(".card").cloneNode(!0),this._card}},{key:"generateCard",value:function(){return this._elementCard=this._getTemplate(),this._elementCardTitle=this._elementCard.querySelector(".card__title"),this._elementCardImage=this._elementCard.querySelector(".card__img"),this._buttonDelete=this._elementCard.querySelector(".card__delete"),this._buttonLike=this._elementCard.querySelector(".card__like"),this.numberLikes=this._elementCard.querySelector(".card__number-likes"),this._elementCardImage.src=this._link,this._elementCardImage.alt=this._name,this._elementCardTitle.textContent=this._name,this.numberLikes.textContent=this._likes.length,this._setEventListeners(),this._likeCard(),this._deleteTrash(),this._elementCard}},{key:"_likeCard",value:function(){var t=this;this._likes.some((function(e){return e._id===t._userId}))&&this._buttonLike.classList.add("card__like_active")}},{key:"_clickLike",value:function(){this._buttonLike.classList.contains("card__like_active")?this._handleDeleteLike(this._cardId,this):this._handleLikeCard(this._cardId,this)}},{key:"handleButtonLike",value:function(){this._buttonLike.classList.toggle("card__like_active")}},{key:"handleButtonDelete",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"_deleteTrash",value:function(){this._ownerId!=this._userId&&this._buttonDelete.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._clickLike()})),this._buttonDelete.addEventListener("click",(function(){t._handleCardDelete(t._cardId,t)})),this._elementCardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(r),this._renderer=n}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var p=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=f(n="_hendleCloseEsc"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._hendleCloseEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._hendleCloseEsc)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close")&&t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupFullImage=document.querySelector(".popup__full-img"),e._popupFullText=document.querySelector(".popup__full-text"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupFullText.textContent=t,this._popupFullImage.src=e,this._popupFullImage.alt=t,d(v(u.prototype),"open",this).call(this)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(n);if(o){var r=w(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._form=e._popup.querySelector(".popup__form"),e._inputList=e._popup.querySelectorAll(".popup__input"),e._submitButton=e._popup.querySelector(".popup__submit-button"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;g(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var r=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._submitButton.textContent=r}))}))}},{key:"close",value:function(){g(w(u.prototype),"close",this).call(this),this._form.reset()}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var C=function(){function t(e){var r=e.profileName,n=e.profileAbout,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileAbout=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent,avatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileAbout.textContent=t.about,this._profileAvatar.src=t.avatar}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkError",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t["element-name"],link:t["element-link"]})}).then((function(t){return e._checkError(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"patchUserInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t["user-name"],about:t.about})}).then((function(t){return e._checkError(t)}))}},{key:"getLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"patchAvatarInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkError(t)}))}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._form=e._popup.querySelector(".popup__form"),e}return e=u,(r=[{key:"open",value:function(t,e){A(x(u.prototype),"open",this).call(this),this._cardId=t,this._card=e}},{key:"setEventListeners",value:function(){var t=this;A(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._cardId,t._card).then((function(){return t.close()}))}))}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var D,U=document.querySelector(".profile__button-edit"),N=document.querySelector(".popup__input_type_name"),V=document.querySelector(".popup__input_type_about"),J=document.querySelector(".profile__button-add"),G=document.querySelector(".profile__avatar-box"),H=new I({url:"https://nomoreparties.co/v1/cohort-65",headers:{authorization:"65d17e81-1fc6-4932-9a8f-ccbfe0018846","Content-Type":"application/json"}});Promise.all([H.getUserInfo(),H.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];D=o._id,M.setUserInfo(o),X.renderItems(i)})).catch((function(t){console.log(t)}));var M=new C({profileName:".profile__name",profileAbout:".profile__about",profileAvatar:".profile__avatar"}),z=new E({popupSelector:".popup-edit",handleFormSubmit:function(t){return H.patchUserInfo(t).then((function(t){M.setUserInfo(t)})).catch((function(t){console.log(t)}))}});z.setEventListeners();var $=new E({popupSelector:".popup-avatar",handleFormSubmit:function(t){return H.patchAvatarInfo(t).then((function(t){M.setUserInfo(t)})).catch((function(t){console.log(t)}))}});function K(t){return new i(t,D,"#card-template",W,tt,et,Q).generateCard()}$.setEventListeners();var Q=function(t,e){Z.open(t,e)},W=function(t,e){rt.open(t,e)},X=new c({renderer:function(t){var e=K(t);X.addItem(e)}},".cards"),Y=new E({popupSelector:".popup-add",handleFormSubmit:function(t){return H.addNewCard(t).then((function(t){var e=K(t);X.addItem(e)})).catch((function(t){console.log(t)}))}});Y.setEventListeners();var Z=new F({popupSelector:".popup-trash",handleFormSubmit:function(t,e){return H.deleteCard(t).then((function(){e.handleButtonDelete()})).catch((function(t){console.log(t)}))}});function tt(t,e){H.getLike(t).then((function(t){e.handleButtonLike(),e.numberLikes.textContent=t.likes.length})).catch((function(t){console.log(t)}))}function et(t,e){H.deleteLike(t).then((function(t){e.handleButtonLike(),e.numberLikes.textContent=t.likes.length})).catch((function(t){console.log(t)}))}Z.setEventListeners();var rt=new b(".popup_full-screen");rt.setEventListeners();var nt,ot={};nt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(nt.formSelector)).forEach((function(t){var e=new r(nt,t),n=t.getAttribute("name");ot[n]=e,e.enableValidation()})),U.addEventListener("click",(function(){z.open();var t=M.getUserInfo();N.value=t.name,V.value=t.about,ot["popup-form"].resetValidation()})),J.addEventListener("click",(function(){Y.open(),ot["popup-form-add"].resetValidation()})),G.addEventListener("click",(function(){$.open(),ot["popup-form-avatar"].resetValidation()}))})();