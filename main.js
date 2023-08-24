/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* color scheme */
  --black: #0D0C00;
  --dark-blue: #0D0C00;
  --dark-blue2: #14268C;
  --blue: #304EF2;
  --blue2: #0511F2;
  --white-bg: #f5f7fa;

  /* details schema */
  --grey-f: #c4c5d4;
  --red: #ff0071;
  --green: #00ff00;

  /* font family */
  --ff: 'Nunito', sans-serif;
}

/* reset ---------------------------------------------------------------------*/

html {
  box-sizing: border-box;
}

*,
*:after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--ff);
  background-color: var(--black);
  color: var(--black);

  width: 100vw;
  height: 100vh;
}

h1,
h2,
h3,
p {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  font-family: var(--ff);
  font-size: 1rem;

  width: max-content;

  font-weight: bold;
  text-transform: capitalize;

  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
}

input, 
textarea,
fieldset {
  outline: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
  height: 50%;
}

/* container style -----------------------------------------------------------*/

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {

  position: relative;

  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white-bg);
  box-shadow: 0 0 10px var(--white-bg);
  padding: 40px;

  border-radius: 2rem;
  height: 80%;
  width: 80%;

  display: grid;
  grid-template-rows: min-content min-content auto min-content;

}


/* style header --------------------------------------------------------------*/

.header {
  display: grid;
  justify-content: center;
  justify-items: center;

  text-transform: capitalize;
  margin-bottom: 1.5rem;
}

.header .header-logo {
  display: flex;
  gap: 10px;
  align-items: center;

  grid-area: 1 / 1 / 2 / 2;
}

.header .header-logo h1 {
  width: fit-content;
}

.header .header-logo i {
  font-size: 2rem;
  color: var(--blue);
}

.header .header-text {
  text-align: center;
}

/* style navbar --------------------------------------------------------------*/

.navbar-projects {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;

  margin-bottom: 1.5rem;
}

.navbar-projects .tab {
  text-transform: capitalize;
  color: var(--grey-f);
}

.navbar-projects .tab.active {
  color: var(--black);
}


/* style main ----------------------------------------------------------------*/

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  overflow: auto;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
}

.main .task-card {
  flex: 1 0 50px;
  width: 100%;

  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 4px var(--grey-f);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 1.5rem;
}

.main .task-card.done {
  box-shadow: 0 0 4px var(--green);
}

.main .task-card:is(:hover, :focus):not(.done) {
  box-shadow: 0 0 4px var(--blue);
}

.task-card input {
  margin-inline: auto;

  flex: 0 0 1rem;

  appearance: none;
  width: 1rem;
  height: 1rem;

  border: 1px solid var(--grey-f);
  border-radius: 5px;
}

.task-card input:checked {
  background-color: var(--green);
  border-color: var(--green);

  box-shadow: 0 0 2px var(--green);
}

.task-card .task-content {
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  row-gap: 1rem;

  justify-content: center;
  align-content: center;
  justify-items: center;

  position: relative;
}

.task-card .task-content::after {
  content: "";

  position: absolute;
  top: 0;
  bottom: 0;
  left: -1rem;

  width: 1px;

  background-color: var(--blue);
  box-shadow: 0 0 2px var(--blue);
}

.task-card .task-info {
  grid-column: 1 / 3;
  
  text-align: center;
  text-transform: capitalize;
}

.task-card.done .task-info {
  text-decoration: line-through;
}

.task-card i {
  color: var(--grey-f);
}

/* style buttons -------------------------------------------------------------*/

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.buttons button {
  background-color: var(--blue);
  color: white;
  box-shadow: 0 0 5px var(--blue);
}

.buttons button:is(:hover, :focus) {
  background-color: var(--blue2);
}

/* create task and project, edit task ----------------------------------------*/

.create-task,
.create-project,
.edit-task {
  display: none;
}

.create-task.active,
.create-project.active,
.edit-task.active {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  
  height: 80%;

  padding: 2rem;

  border-radius: 2rem;
  background-color: var(--blue);
  color: white;

  text-transform: capitalize;
}

.create-project.active {
  height: 70%;
}

.create-task > form,
.create-project > form,
.edit-task > form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-evenly;
}

.create-task .form-entry:first-child,
.edit-task .form-entry:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.create-task .form-entry:first-child select,
.edit-task .form-entry:first-child select{
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.5rem;
  border: 2px solid white;
  outline: none;
}

.create-task .form-entry:first-child option,
.edit-task .form-entry:first-child option{
  color: var(--blue);
  background-color: white;
  outline: none;
  border: none;
}

.create-task .form-entry input,
.create-task .form-entry textarea,
.create-project .form-entry input,
.create-project .form-entry textarea,
.edit-task .form-entry input,
.edit-task .form-entry textarea {
  width: 100%;
  border-bottom: 2px solid white;
  color: white;
}

.create-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator,
.edit-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}

.create-task .form-entry input,
.create-project .form-entry input,
.edit-task .form-entry input {
  height: 1.8rem;
}

.create-task .form-entry textarea,
.create-project .form-entry textarea,
.edit-task .form-entry textarea {
  height: 4rem;
}

.create-task form > button,
.create-project form > button,
.edit-task form > button {
  align-self: center;

  background-color: white;
  color: var(--blue);
}

.create-task fieldset input,
.edit-task fieldset input {
  appearance: none;
}

.create-task fieldset ul,
.edit-task fieldset ul {
  display: flex;
  gap: 0.5rem;
  margin-block: 1rem;
  justify-content: space-between;
}

.create-task fieldset label,
.edit-task fieldset label {
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid white;
}

.create-task fieldset input:checked + label,
.edit-task fieldset input:checked + label {
  background-color: white;
  color: var(--blue);
  box-shadow: 0 0 10px white;
}

/* task details info ---------------------------------------------------------*/

.task-details-info {
  display: none;
}

.task-details-info.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 80%;
  height: 90%;

  z-index: 10;

  padding: 2rem;
  border-radius: 2rem;
  background-color: var(--blue);
  color: white;

  text-transform: capitalize;
  text-align: center;
}

.task-details-info i {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
}

.task-details-info .details-description p {
  text-align: justify;
}

.task-details-info div:not(:last-child) {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid white;
}

.task-details-info .details-mark-complete button {
  color: var(--blue);
  background-color: white;
}

.task-details-info .details-mark-complete button:is(:hover, :focus) {
  color: var(--blue2);
  box-shadow: 0 0 5px white;
}

/* media queryes -------------------------------------------------------------*/

@media (min-width: 1000px) {
    .container {
      grid-template-rows: 1fr 2fr 2fr 1fr;
      grid-template-columns: 20% auto;
      grid-template-areas:
        "header main main" 
        "nav main main"
        "nav main main "
        "buttons main main";
    }

    /* header ----------------------------------------------------------------*/

    .header {
      grid-area: header;

      background-color: var(--blue);
      color: white;
      margin-bottom: 0;
      border-bottom: 2px solid white;
      padding: 1rem;

      border-top-left-radius: 1rem;
    }

    .header .header-logo {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .header .header-logo h1 {
      width: max-content;
    }
    
    .header .header-logo i {
      font-size: 2rem;
      color: white;
    }
    
    .header .header-text {
      text-align: center;
    }

    /* navbar ----------------------------------------------------------------*/

    .navbar-projects {
      grid-area: nav;

      margin-bottom: 0;
      padding: 1rem;
      border-bottom: 2px solid white;

      background-color: var(--blue);
  
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;    
      flex-wrap: nowrap;
      
      overflow: auto;
    }

    .navbar-projects .tab {
      color: white;
    }

    .navbar-projects .tab:is(:hover, :focus) {
      color: var(--black);
    }
    
    .navbar-projects .tab.active {
      background-color: white;
      padding: 0.5rem;
      border-radius: 1rem;
      color: var(--blue);
    }
    

    /* main ------------------------------------------------------------------*/

    .main {
      grid-area: main;
    }

    .main {
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
      grid-auto-rows: 45%;
      
      gap: 2.4%;

      flex-direction: none;
      justify-content: none;

      overflow: auto;
      padding: 0.2rem 1rem;
      margin-bottom: 0;
    }
    
    .main .task-card {    
      flex-direction: column;    
    }

    .task-card .task-content::after {
      content: "";
    
      position: absolute;
      right: 0;
      left: 0;
      top: -1rem;

      height: 1px;
      width: 100%;
    
      background-color: var(--blue);
      box-shadow: 0 0 2px var(--blue);
    }

    /* buttons ---------------------------------------------------------------*/

    .buttons {
      grid-area: buttons;

      background-color: var(--blue);
      border-bottom-left-radius: 1rem;

      padding: 1rem;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .buttons button {
      background-color: white;
      color: var(--blue);
      
      width: 100%;
    }
    
    .buttons button:is(:hover, :focus) {
      background-color: white;
      box-shadow: 0 0 5px white;
      color: var(--blue2);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* color scheme */\n  --black: #0D0C00;\n  --dark-blue: #0D0C00;\n  --dark-blue2: #14268C;\n  --blue: #304EF2;\n  --blue2: #0511F2;\n  --white-bg: #f5f7fa;\n\n  /* details schema */\n  --grey-f: #c4c5d4;\n  --red: #ff0071;\n  --green: #00ff00;\n\n  /* font family */\n  --ff: 'Nunito', sans-serif;\n}\n\n/* reset ---------------------------------------------------------------------*/\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--ff);\n  background-color: var(--black);\n  color: var(--black);\n\n  width: 100vw;\n  height: 100vh;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-family: var(--ff);\n  font-size: 1rem;\n\n  width: max-content;\n\n  font-weight: bold;\n  text-transform: capitalize;\n\n  padding: 0.5rem 0.5rem;\n  border-radius: 1rem;\n}\n\ninput, \ntextarea,\nfieldset {\n  outline: none;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n::-webkit-scrollbar {\n  width: 1px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--blue);\n  height: 50%;\n}\n\n/* container style -----------------------------------------------------------*/\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n\n  position: relative;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: var(--white-bg);\n  box-shadow: 0 0 10px var(--white-bg);\n  padding: 40px;\n\n  border-radius: 2rem;\n  height: 80%;\n  width: 80%;\n\n  display: grid;\n  grid-template-rows: min-content min-content auto min-content;\n\n}\n\n\n/* style header --------------------------------------------------------------*/\n\n.header {\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n\n.header .header-logo {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.header .header-logo h1 {\n  width: fit-content;\n}\n\n.header .header-logo i {\n  font-size: 2rem;\n  color: var(--blue);\n}\n\n.header .header-text {\n  text-align: center;\n}\n\n/* style navbar --------------------------------------------------------------*/\n\n.navbar-projects {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n\n  margin-bottom: 1.5rem;\n}\n\n.navbar-projects .tab {\n  text-transform: capitalize;\n  color: var(--grey-f);\n}\n\n.navbar-projects .tab.active {\n  color: var(--black);\n}\n\n\n/* style main ----------------------------------------------------------------*/\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n\n  overflow: auto;\n  padding: 0.5rem 1rem;\n  margin-bottom: 2rem;\n}\n\n.main .task-card {\n  flex: 1 0 50px;\n  width: 100%;\n\n  background-color: white;\n  border-radius: 1rem;\n  box-shadow: 0 0 4px var(--grey-f);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n\n  padding: 1.5rem;\n}\n\n.main .task-card.done {\n  box-shadow: 0 0 4px var(--green);\n}\n\n.main .task-card:is(:hover, :focus):not(.done) {\n  box-shadow: 0 0 4px var(--blue);\n}\n\n.task-card input {\n  margin-inline: auto;\n\n  flex: 0 0 1rem;\n\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n\n  border: 1px solid var(--grey-f);\n  border-radius: 5px;\n}\n\n.task-card input:checked {\n  background-color: var(--green);\n  border-color: var(--green);\n\n  box-shadow: 0 0 2px var(--green);\n}\n\n.task-card .task-content {\n  flex: 1;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr auto;\n  row-gap: 1rem;\n\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n\n  position: relative;\n}\n\n.task-card .task-content::after {\n  content: \"\";\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -1rem;\n\n  width: 1px;\n\n  background-color: var(--blue);\n  box-shadow: 0 0 2px var(--blue);\n}\n\n.task-card .task-info {\n  grid-column: 1 / 3;\n  \n  text-align: center;\n  text-transform: capitalize;\n}\n\n.task-card.done .task-info {\n  text-decoration: line-through;\n}\n\n.task-card i {\n  color: var(--grey-f);\n}\n\n/* style buttons -------------------------------------------------------------*/\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.buttons button {\n  background-color: var(--blue);\n  color: white;\n  box-shadow: 0 0 5px var(--blue);\n}\n\n.buttons button:is(:hover, :focus) {\n  background-color: var(--blue2);\n}\n\n/* create task and project, edit task ----------------------------------------*/\n\n.create-task,\n.create-project,\n.edit-task {\n  display: none;\n}\n\n.create-task.active,\n.create-project.active,\n.edit-task.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  \n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  \n  height: 80%;\n\n  padding: 2rem;\n\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n}\n\n.create-project.active {\n  height: 70%;\n}\n\n.create-task > form,\n.create-project > form,\n.edit-task > form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  justify-content: space-evenly;\n}\n\n.create-task .form-entry:first-child,\n.edit-task .form-entry:first-child {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.create-task .form-entry:first-child select,\n.edit-task .form-entry:first-child select{\n  background-color: var(--blue);\n  color: white;\n  padding: 0.2rem 0.5rem;\n  border: 2px solid white;\n  outline: none;\n}\n\n.create-task .form-entry:first-child option,\n.edit-task .form-entry:first-child option{\n  color: var(--blue);\n  background-color: white;\n  outline: none;\n  border: none;\n}\n\n.create-task .form-entry input,\n.create-task .form-entry textarea,\n.create-project .form-entry input,\n.create-project .form-entry textarea,\n.edit-task .form-entry input,\n.edit-task .form-entry textarea {\n  width: 100%;\n  border-bottom: 2px solid white;\n  color: white;\n}\n\n.create-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator,\n.edit-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n.create-task .form-entry input,\n.create-project .form-entry input,\n.edit-task .form-entry input {\n  height: 1.8rem;\n}\n\n.create-task .form-entry textarea,\n.create-project .form-entry textarea,\n.edit-task .form-entry textarea {\n  height: 4rem;\n}\n\n.create-task form > button,\n.create-project form > button,\n.edit-task form > button {\n  align-self: center;\n\n  background-color: white;\n  color: var(--blue);\n}\n\n.create-task fieldset input,\n.edit-task fieldset input {\n  appearance: none;\n}\n\n.create-task fieldset ul,\n.edit-task fieldset ul {\n  display: flex;\n  gap: 0.5rem;\n  margin-block: 1rem;\n  justify-content: space-between;\n}\n\n.create-task fieldset label,\n.edit-task fieldset label {\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid white;\n}\n\n.create-task fieldset input:checked + label,\n.edit-task fieldset input:checked + label {\n  background-color: white;\n  color: var(--blue);\n  box-shadow: 0 0 10px white;\n}\n\n/* task details info ---------------------------------------------------------*/\n\n.task-details-info {\n  display: none;\n}\n\n.task-details-info.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  width: 80%;\n  height: 90%;\n\n  z-index: 10;\n\n  padding: 2rem;\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.task-details-info i {\n  position: absolute;\n  top: 0.8rem;\n  right: 1rem;\n}\n\n.task-details-info .details-description p {\n  text-align: justify;\n}\n\n.task-details-info div:not(:last-child) {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid white;\n}\n\n.task-details-info .details-mark-complete button {\n  color: var(--blue);\n  background-color: white;\n}\n\n.task-details-info .details-mark-complete button:is(:hover, :focus) {\n  color: var(--blue2);\n  box-shadow: 0 0 5px white;\n}\n\n/* media queryes -------------------------------------------------------------*/\n\n@media (min-width: 1000px) {\n    .container {\n      grid-template-rows: 1fr 2fr 2fr 1fr;\n      grid-template-columns: 20% auto;\n      grid-template-areas:\n        \"header main main\" \n        \"nav main main\"\n        \"nav main main \"\n        \"buttons main main\";\n    }\n\n    /* header ----------------------------------------------------------------*/\n\n    .header {\n      grid-area: header;\n\n      background-color: var(--blue);\n      color: white;\n      margin-bottom: 0;\n      border-bottom: 2px solid white;\n      padding: 1rem;\n\n      border-top-left-radius: 1rem;\n    }\n\n    .header .header-logo {\n      flex-direction: column;\n      gap: 10px;\n      align-items: center;\n      margin-bottom: 10px;\n    }\n    \n    .header .header-logo h1 {\n      width: max-content;\n    }\n    \n    .header .header-logo i {\n      font-size: 2rem;\n      color: white;\n    }\n    \n    .header .header-text {\n      text-align: center;\n    }\n\n    /* navbar ----------------------------------------------------------------*/\n\n    .navbar-projects {\n      grid-area: nav;\n\n      margin-bottom: 0;\n      padding: 1rem;\n      border-bottom: 2px solid white;\n\n      background-color: var(--blue);\n  \n      flex-direction: column;\n      justify-content: flex-start;\n      gap: 1rem;    \n      flex-wrap: nowrap;\n      \n      overflow: auto;\n    }\n\n    .navbar-projects .tab {\n      color: white;\n    }\n\n    .navbar-projects .tab:is(:hover, :focus) {\n      color: var(--black);\n    }\n    \n    .navbar-projects .tab.active {\n      background-color: white;\n      padding: 0.5rem;\n      border-radius: 1rem;\n      color: var(--blue);\n    }\n    \n\n    /* main ------------------------------------------------------------------*/\n\n    .main {\n      grid-area: main;\n    }\n\n    .main {\n      display: grid; \n      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));\n      grid-auto-rows: 45%;\n      \n      gap: 2.4%;\n\n      flex-direction: none;\n      justify-content: none;\n\n      overflow: auto;\n      padding: 0.2rem 1rem;\n      margin-bottom: 0;\n    }\n    \n    .main .task-card {    \n      flex-direction: column;    \n    }\n\n    .task-card .task-content::after {\n      content: \"\";\n    \n      position: absolute;\n      right: 0;\n      left: 0;\n      top: -1rem;\n\n      height: 1px;\n      width: 100%;\n    \n      background-color: var(--blue);\n      box-shadow: 0 0 2px var(--blue);\n    }\n\n    /* buttons ---------------------------------------------------------------*/\n\n    .buttons {\n      grid-area: buttons;\n\n      background-color: var(--blue);\n      border-bottom-left-radius: 1rem;\n\n      padding: 1rem;\n    }\n\n    .buttons {\n      flex-direction: column;\n      gap: 0.5rem;\n    }\n    \n    .buttons button {\n      background-color: white;\n      color: var(--blue);\n      \n      width: 100%;\n    }\n    \n    .buttons button:is(:hover, :focus) {\n      background-color: white;\n      box-shadow: 0 0 5px white;\n      color: var(--blue2);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsYUFBYSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLFFBQVEsVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxTQUFTLE9BQU8sT0FBTyxhQUFh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvciBzY2hlbWUgKi9cbiAgLS1ibGFjazogIzBEMEMwMDtcbiAgLS1kYXJrLWJsdWU6ICMwRDBDMDA7XG4gIC0tZGFyay1ibHVlMjogIzE0MjY4QztcbiAgLS1ibHVlOiAjMzA0RUYyO1xuICAtLWJsdWUyOiAjMDUxMUYyO1xuICAtLXdoaXRlLWJnOiAjZjVmN2ZhO1xuXG4gIC8qIGRldGFpbHMgc2NoZW1hICovXG4gIC0tZ3JleS1mOiAjYzRjNWQ0O1xuICAtLXJlZDogI2ZmMDA3MTtcbiAgLS1ncmVlbjogIzAwZmYwMDtcblxuICAvKiBmb250IGZhbWlseSAqL1xuICAtLWZmOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogcmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbmlucHV0LCBcbnRleHRhcmVhLFxuZmllbGRzZXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gIGhlaWdodDogNTAlO1xufVxuXG4vKiBjb250YWluZXIgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUtYmcpO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtcblxufVxuXG5cbi8qIHN0eWxlIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWxvZ28gaDEge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLmhlYWRlciAuaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHN0eWxlIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5uYXZiYXItcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNHJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5uYXZiYXItcHJvamVjdHMgLnRhYiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogdmFyKC0tZ3JleS1mKTtcbn1cblxuLm5hdmJhci1wcm9qZWN0cyAudGFiLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cblxuLyogc3R5bGUgbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcblxuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQge1xuICBmbGV4OiAxIDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JleS1mKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcblxuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQuZG9uZSB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JlZW4pO1xufVxuXG4ubWFpbiAudGFzay1jYXJkOmlzKDpob3ZlciwgOmZvY3VzKTpub3QoLmRvbmUpIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ibHVlKTtcbn1cblxuLnRhc2stY2FyZCBpbnB1dCB7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG5cbiAgZmxleDogMCAwIDFyZW07XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcblxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWNhcmQgaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG5cbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ncmVlbik7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XG4gIGZsZXg6IDE7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICByb3ctZ2FwOiAxcmVtO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xcmVtO1xuXG4gIHdpZHRoOiAxcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XG59XG5cbi50YXNrLWNhcmQgLnRhc2staW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi50YXNrLWNhcmQuZG9uZSAudGFzay1pbmZvIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrLWNhcmQgaSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xufVxuXG4vKiBzdHlsZSBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1ibHVlKTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbn1cblxuLyogY3JlYXRlIHRhc2sgYW5kIHByb2plY3QsIGVkaXQgdGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNyZWF0ZS10YXNrLFxuLmNyZWF0ZS1wcm9qZWN0LFxuLmVkaXQtdGFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtdGFzay5hY3RpdmUsXG4uY3JlYXRlLXByb2plY3QuYWN0aXZlLFxuLmVkaXQtdGFzay5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgXG4gIGhlaWdodDogODAlO1xuXG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uY3JlYXRlLXRhc2sgPiBmb3JtLFxuLmNyZWF0ZS1wcm9qZWN0ID4gZm9ybSxcbi5lZGl0LXRhc2sgPiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQsXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgc2VsZWN0LFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBzZWxlY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgb3B0aW9uLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5jcmVhdGUtcHJvamVjdCAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQge1xuICBoZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIGZvcm0gPiBidXR0b24sXG4uY3JlYXRlLXByb2plY3QgZm9ybSA+IGJ1dHRvbixcbi5lZGl0LXRhc2sgZm9ybSA+IGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgaW5wdXQsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IHVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYmxvY2s6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGxhYmVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCBsYWJlbCB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xufVxuXG4vKiB0YXNrIGRldGFpbHMgaW5mbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGFzay1kZXRhaWxzLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8uYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG5cbiAgei1pbmRleDogMTA7XG5cbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjhyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtZGVzY3JpcHRpb24gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50YXNrLWRldGFpbHMtaW5mbyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlMik7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XG59XG5cbi8qIG1lZGlhIHF1ZXJ5ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiaGVhZGVyIG1haW4gbWFpblwiIFxuICAgICAgICBcIm5hdiBtYWluIG1haW5cIlxuICAgICAgICBcIm5hdiBtYWluIG1haW4gXCJcbiAgICAgICAgXCJidXR0b25zIG1haW4gbWFpblwiO1xuICAgIH1cblxuICAgIC8qIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC5oZWFkZXIge1xuICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gICAgfVxuXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyBoMSB7XG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyIC5oZWFkZXItdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLm5hdmJhci1wcm9qZWN0cyB7XG4gICAgICBncmlkLWFyZWE6IG5hdjtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDFyZW07ICAgIFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIH1cbiAgICBcbiAgICAubmF2YmFyLXByb2plY3RzIC50YWIuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICB9XG4gICAgXG5cbiAgICAvKiBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAubWFpbiB7XG4gICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgZGlzcGxheTogZ3JpZDsgXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwJSwgMWZyKSk7XG4gICAgICBncmlkLWF1dG8tcm93czogNDUlO1xuICAgICAgXG4gICAgICBnYXA6IDIuNCU7XG5cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBub25lO1xuXG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLm1haW4gLnRhc2stY2FyZCB7ICAgIFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXG4gICAgfVxuXG4gICAgLnRhc2stY2FyZCAudGFzay1jb250ZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAtMXJlbTtcblxuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ibHVlKTtcbiAgICB9XG5cbiAgICAvKiBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcblxuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25zIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgIFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25zIGJ1dHRvbjppcyg6aG92ZXIsIDpmb2N1cykge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xuICAgICAgY29sb3I6IHZhcigtLWJsdWUyKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCOztFQUVoQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBLCtFQUErRTs7QUFFL0U7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1os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bUI7O01BRW5CLFNBQVM7O01BRVQsb0JBQW9CO01BQ3BCLHFCQUFxQjs7TUFFckIsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxXQUFXOztNQUVYLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsT0FBTztNQUNQLFVBQVU7O01BRVYsV0FBVztNQUNYLFdBQVc7O01BRVgsNkJBQTZCO01BQzdCLCtCQUErQjtJQUNqQzs7SUFFQSwyRUFBMkU7O0lBRTNFO01BQ0Usa0JBQWtCOztNQUVsQiw2QkFBNkI7TUFDN0IsK0JBQStCOztNQUUvQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsV0FBVztJQUNiOztJQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLGtCQUFrQjs7TUFFbEIsV0FBVztJQUNiOztJQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLHlCQUF5QjtNQUN6QixtQkFBbUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvciBzY2hlbWUgKi9cXG4gIC0tYmxhY2s6ICMwRDBDMDA7XFxuICAtLWRhcmstYmx1ZTogIzBEMEMwMDtcXG4gIC0tZGFyay1ibHVlMjogIzE0MjY4QztcXG4gIC0tYmx1ZTogIzMwNEVGMjtcXG4gIC0tYmx1ZTI6ICMwNTExRjI7XFxuICAtLXdoaXRlLWJnOiAjZjVmN2ZhO1xcblxcbiAgLyogZGV0YWlscyBzY2hlbWEgKi9cXG4gIC0tZ3JleS1mOiAjYzRjNWQ0O1xcbiAgLS1yZWQ6ICNmZjAwNzE7XFxuICAtLWdyZWVuOiAjMDBmZjAwO1xcblxcbiAgLyogZm9udCBmYW1pbHkgKi9cXG4gIC0tZmY6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiByZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbmlucHV0LCBcXG50ZXh0YXJlYSxcXG5maWVsZHNldCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLyogY29udGFpbmVyIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLXdoaXRlLWJnKTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtcXG5cXG59XFxuXFxuXFxuLyogc3R5bGUgaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG59XFxuXFxuLmhlYWRlciAuaGVhZGVyLWxvZ28gaDEge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItbG9nbyBpIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmhlYWRlciAuaGVhZGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHlsZSBuYXZiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5uYXZiYXItcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAwLjRyZW07XFxuXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5uYXZiYXItcHJvamVjdHMgLnRhYiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xcbn1cXG5cXG4ubmF2YmFyLXByb2plY3RzIC50YWIuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcblxcbi8qIHN0eWxlIG1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxuXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW4gLnRhc2stY2FyZCB7XFxuICBmbGV4OiAxIDAgNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ncmV5LWYpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5tYWluIC50YXNrLWNhcmQuZG9uZSB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLm1haW4gLnRhc2stY2FyZDppcyg6aG92ZXIsIDpmb2N1cyk6bm90KC5kb25lKSB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4udGFzay1jYXJkIGlucHV0IHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuXFxuICBmbGV4OiAwIDAgMXJlbTtcXG5cXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktZik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWNhcmQgaW5wdXQ6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcXG5cXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgcm93LWdhcDogMXJlbTtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogLTFyZW07XFxuXFxuICB3aWR0aDogMXB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4udGFzay1jYXJkIC50YXNrLWluZm8ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnRhc2stY2FyZC5kb25lIC50YXNrLWluZm8ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQgaSB7XFxuICBjb2xvcjogdmFyKC0tZ3JleS1mKTtcXG59XFxuXFxuLyogc3R5bGUgYnV0dG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTIpO1xcbn1cXG5cXG4vKiBjcmVhdGUgdGFzayBhbmQgcHJvamVjdCwgZWRpdCB0YXNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jcmVhdGUtdGFzayxcXG4uY3JlYXRlLXByb2plY3QsXFxuLmVkaXQtdGFzayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2suYWN0aXZlLFxcbi5jcmVhdGUtcHJvamVjdC5hY3RpdmUsXFxuLmVkaXQtdGFzay5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgXFxuICBoZWlnaHQ6IDgwJTtcXG5cXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSB7XFxuICBoZWlnaHQ6IDcwJTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrID4gZm9ybSxcXG4uY3JlYXRlLXByb2plY3QgPiBmb3JtLFxcbi5lZGl0LXRhc2sgPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkLFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBzZWxlY3QsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBzZWxlY3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBvcHRpb24sXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBvcHRpb257XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxcbi5jcmVhdGUtcHJvamVjdCAuZm9ybS1lbnRyeSB0ZXh0YXJlYSxcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxcbi5jcmVhdGUtcHJvamVjdCAuZm9ybS1lbnRyeSBpbnB1dCxcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5IGlucHV0IHtcXG4gIGhlaWdodDogMS44cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgZm9ybSA+IGJ1dHRvbixcXG4uY3JlYXRlLXByb2plY3QgZm9ybSA+IGJ1dHRvbixcXG4uZWRpdC10YXNrIGZvcm0gPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dCxcXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtdGFzayBmaWVsZHNldCB1bCxcXG4uZWRpdC10YXNrIGZpZWxkc2V0IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGxhYmVsLFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgbGFiZWwge1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsLFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XFxufVxcblxcbi8qIHRhc2sgZGV0YWlscyBpbmZvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcblxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuXFxuICB6LWluZGV4OiAxMDtcXG5cXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjhyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHAge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaW5mbyAuZGV0YWlscy1tYXJrLWNvbXBsZXRlIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZTIpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcXG59XFxuXFxuLyogbWVkaWEgcXVlcnllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG87XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgbWFpbiBtYWluXFxcIiBcXG4gICAgICAgIFxcXCJuYXYgbWFpbiBtYWluXFxcIlxcbiAgICAgICAgXFxcIm5hdiBtYWluIG1haW4gXFxcIlxcbiAgICAgICAgXFxcImJ1dHRvbnMgbWFpbiBtYWluXFxcIjtcXG4gICAgfVxcblxcbiAgICAvKiBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28gaDEge1xcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28gaSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRlciAuaGVhZGVyLXRleHQge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBuYXZiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5uYXZiYXItcHJvamVjdHMge1xcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xcblxcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICBnYXA6IDFyZW07ICAgIFxcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgIFxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYiB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYjppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYi5hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgfVxcbiAgICBcXG5cXG4gICAgLyogbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiAgICAubWFpbiB7XFxuICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwJSwgMWZyKSk7XFxuICAgICAgZ3JpZC1hdXRvLXJvd3M6IDQ1JTtcXG4gICAgICBcXG4gICAgICBnYXA6IDIuNCU7XFxuXFxuICAgICAgZmxleC1kaXJlY3Rpb246IG5vbmU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBub25lO1xcblxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tYWluIC50YXNrLWNhcmQgeyAgICBcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcXG4gICAgfVxcblxcbiAgICAudGFzay1jYXJkIC50YXNrLWNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXJlbTtcXG5cXG4gICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ibHVlKTtcXG4gICAgfVxcblxcbiAgICAvKiBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5idXR0b25zIHtcXG4gICAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcXG5cXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5idXR0b25zIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYnV0dG9ucyBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgICBcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcXG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZTIpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==