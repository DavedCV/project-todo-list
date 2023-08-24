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
      grid-template-columns: min-content auto;
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-auto-rows: 250px;
      
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* color scheme */\n  --black: #0D0C00;\n  --dark-blue: #0D0C00;\n  --dark-blue2: #14268C;\n  --blue: #304EF2;\n  --blue2: #0511F2;\n  --white-bg: #f5f7fa;\n\n  /* details schema */\n  --grey-f: #c4c5d4;\n  --red: #ff0071;\n  --green: #00ff00;\n\n  /* font family */\n  --ff: 'Nunito', sans-serif;\n}\n\n/* reset ---------------------------------------------------------------------*/\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--ff);\n  background-color: var(--black);\n  color: var(--black);\n\n  width: 100vw;\n  height: 100vh;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-family: var(--ff);\n  font-size: 1rem;\n\n  width: max-content;\n\n  font-weight: bold;\n  text-transform: capitalize;\n\n  padding: 0.5rem 0.5rem;\n  border-radius: 1rem;\n}\n\ninput, \ntextarea,\nfieldset {\n  outline: none;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n::-webkit-scrollbar {\n  width: 1px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--blue);\n  height: 50%;\n}\n\n/* container style -----------------------------------------------------------*/\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n\n  position: relative;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: var(--white-bg);\n  box-shadow: 0 0 10px var(--white-bg);\n  padding: 40px;\n\n  border-radius: 2rem;\n  height: 80%;\n  width: 80%;\n\n  display: grid;\n  grid-template-rows: min-content min-content auto min-content;\n\n}\n\n\n/* style header --------------------------------------------------------------*/\n\n.header {\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n\n.header .header-logo {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.header .header-logo h1 {\n  width: fit-content;\n}\n\n.header .header-logo i {\n  font-size: 2rem;\n  color: var(--blue);\n}\n\n.header .header-text {\n  text-align: center;\n}\n\n/* style navbar --------------------------------------------------------------*/\n\n.navbar-projects {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n\n  margin-bottom: 1.5rem;\n}\n\n.navbar-projects .tab {\n  text-transform: capitalize;\n  color: var(--grey-f);\n}\n\n.navbar-projects .tab.active {\n  color: var(--black);\n}\n\n\n/* style main ----------------------------------------------------------------*/\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n\n  overflow: auto;\n  padding: 0.5rem 1rem;\n  margin-bottom: 2rem;\n}\n\n.main .task-card {\n  flex: 1 0 50px;\n  width: 100%;\n\n  background-color: white;\n  border-radius: 1rem;\n  box-shadow: 0 0 4px var(--grey-f);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n\n  padding: 1.5rem;\n}\n\n.main .task-card.done {\n  box-shadow: 0 0 4px var(--green);\n}\n\n.main .task-card:is(:hover, :focus):not(.done) {\n  box-shadow: 0 0 4px var(--blue);\n}\n\n.task-card input {\n  margin-inline: auto;\n\n  flex: 0 0 1rem;\n\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n\n  border: 1px solid var(--grey-f);\n  border-radius: 5px;\n}\n\n.task-card input:checked {\n  background-color: var(--green);\n  border-color: var(--green);\n\n  box-shadow: 0 0 2px var(--green);\n}\n\n.task-card .task-content {\n  flex: 1;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr auto;\n  row-gap: 1rem;\n\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n\n  position: relative;\n}\n\n.task-card .task-content::after {\n  content: \"\";\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -1rem;\n\n  width: 1px;\n\n  background-color: var(--blue);\n  box-shadow: 0 0 2px var(--blue);\n}\n\n.task-card .task-info {\n  grid-column: 1 / 3;\n  \n  text-align: center;\n  text-transform: capitalize;\n}\n\n.task-card.done .task-info {\n  text-decoration: line-through;\n}\n\n.task-card i {\n  color: var(--grey-f);\n}\n\n/* style buttons -------------------------------------------------------------*/\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.buttons button {\n  background-color: var(--blue);\n  color: white;\n  box-shadow: 0 0 5px var(--blue);\n}\n\n.buttons button:is(:hover, :focus) {\n  background-color: var(--blue2);\n}\n\n/* create task and project, edit task ----------------------------------------*/\n\n.create-task,\n.create-project,\n.edit-task {\n  display: none;\n}\n\n.create-task.active,\n.create-project.active,\n.edit-task.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  \n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  \n  height: 80%;\n\n  padding: 2rem;\n\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n}\n\n.create-project.active {\n  height: 70%;\n}\n\n.create-task > form,\n.create-project > form,\n.edit-task > form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  justify-content: space-evenly;\n}\n\n.create-task .form-entry:first-child,\n.edit-task .form-entry:first-child {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.create-task .form-entry:first-child select,\n.edit-task .form-entry:first-child select{\n  background-color: var(--blue);\n  color: white;\n  padding: 0.2rem 0.5rem;\n  border: 2px solid white;\n  outline: none;\n}\n\n.create-task .form-entry:first-child option,\n.edit-task .form-entry:first-child option{\n  color: var(--blue);\n  background-color: white;\n  outline: none;\n  border: none;\n}\n\n.create-task .form-entry input,\n.create-task .form-entry textarea,\n.create-project .form-entry input,\n.create-project .form-entry textarea,\n.edit-task .form-entry input,\n.edit-task .form-entry textarea {\n  width: 100%;\n  border-bottom: 2px solid white;\n  color: white;\n}\n\n.create-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator,\n.edit-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n.create-task .form-entry input,\n.create-project .form-entry input,\n.edit-task .form-entry input {\n  height: 1.8rem;\n}\n\n.create-task .form-entry textarea,\n.create-project .form-entry textarea,\n.edit-task .form-entry textarea {\n  height: 4rem;\n}\n\n.create-task form > button,\n.create-project form > button,\n.edit-task form > button {\n  align-self: center;\n\n  background-color: white;\n  color: var(--blue);\n}\n\n.create-task fieldset input,\n.edit-task fieldset input {\n  appearance: none;\n}\n\n.create-task fieldset ul,\n.edit-task fieldset ul {\n  display: flex;\n  gap: 0.5rem;\n  margin-block: 1rem;\n  justify-content: space-between;\n}\n\n.create-task fieldset label,\n.edit-task fieldset label {\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid white;\n}\n\n.create-task fieldset input:checked + label,\n.edit-task fieldset input:checked + label {\n  background-color: white;\n  color: var(--blue);\n  box-shadow: 0 0 10px white;\n}\n\n/* task details info ---------------------------------------------------------*/\n\n.task-details-info {\n  display: none;\n}\n\n.task-details-info.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  width: 80%;\n  height: 90%;\n\n  z-index: 10;\n\n  padding: 2rem;\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.task-details-info i {\n  position: absolute;\n  top: 0.8rem;\n  right: 1rem;\n}\n\n.task-details-info .details-description p {\n  text-align: justify;\n}\n\n.task-details-info div:not(:last-child) {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid white;\n}\n\n.task-details-info .details-mark-complete button {\n  color: var(--blue);\n  background-color: white;\n}\n\n.task-details-info .details-mark-complete button:is(:hover, :focus) {\n  color: var(--blue2);\n  box-shadow: 0 0 5px white;\n}\n\n/* media queryes -------------------------------------------------------------*/\n\n@media (min-width: 1000px) {\n    .container {\n      grid-template-rows: 1fr 2fr 2fr 1fr;\n      grid-template-columns: min-content auto;\n      grid-template-areas:\n        \"header main main\" \n        \"nav main main\"\n        \"nav main main \"\n        \"buttons main main\";\n    }\n\n    /* header ----------------------------------------------------------------*/\n\n    .header {\n      grid-area: header;\n\n      background-color: var(--blue);\n      color: white;\n      margin-bottom: 0;\n      border-bottom: 2px solid white;\n      padding: 1rem;\n\n      border-top-left-radius: 1rem;\n    }\n\n    .header .header-logo {\n      flex-direction: column;\n      gap: 10px;\n      align-items: center;\n      margin-bottom: 10px;\n    }\n    \n    .header .header-logo h1 {\n      width: max-content;\n    }\n    \n    .header .header-logo i {\n      font-size: 2rem;\n      color: white;\n    }\n    \n    .header .header-text {\n      text-align: center;\n    }\n\n    /* navbar ----------------------------------------------------------------*/\n\n    .navbar-projects {\n      grid-area: nav;\n\n      margin-bottom: 0;\n      padding: 1rem;\n      border-bottom: 2px solid white;\n\n      background-color: var(--blue);\n  \n      flex-direction: column;\n      justify-content: flex-start;\n      gap: 1rem;    \n      flex-wrap: nowrap;\n      \n      overflow: auto;\n    }\n\n    .navbar-projects .tab {\n      color: white;\n    }\n\n    .navbar-projects .tab:is(:hover, :focus) {\n      color: var(--black);\n    }\n    \n    .navbar-projects .tab.active {\n      background-color: white;\n      padding: 0.5rem;\n      border-radius: 1rem;\n      color: var(--blue);\n    }\n    \n\n    /* main ------------------------------------------------------------------*/\n\n    .main {\n      grid-area: main;\n    }\n\n    .main {\n      display: grid; \n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      grid-auto-rows: 250px;\n      \n      flex-direction: none;\n      justify-content: none;\n\n      overflow: auto;\n      padding: 0.2rem 1rem;\n      margin-bottom: 0;\n    }\n    \n    .main .task-card {    \n      flex-direction: column;    \n    }\n\n    .task-card .task-content::after {\n      content: \"\";\n    \n      position: absolute;\n      right: 0;\n      left: 0;\n      top: -1rem;\n\n      height: 1px;\n      width: 100%;\n    \n      background-color: var(--blue);\n      box-shadow: 0 0 2px var(--blue);\n    }\n\n    /* buttons ---------------------------------------------------------------*/\n\n    .buttons {\n      grid-area: buttons;\n\n      background-color: var(--blue);\n      border-bottom-left-radius: 1rem;\n\n      padding: 1rem;\n    }\n\n    .buttons {\n      flex-direction: column;\n      gap: 0.5rem;\n    }\n    \n    .buttons button {\n      background-color: white;\n      color: var(--blue);\n      \n      width: 100%;\n    }\n    \n    .buttons button:is(:hover, :focus) {\n      background-color: white;\n      box-shadow: 0 0 5px white;\n      color: var(--blue2);\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsYUFBYSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLFFBQVEsVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxTQUFTLE9BQU8sT0FBTyxhQUFhLE1BQU0s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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvciBzY2hlbWUgKi9cbiAgLS1ibGFjazogIzBEMEMwMDtcbiAgLS1kYXJrLWJsdWU6ICMwRDBDMDA7XG4gIC0tZGFyay1ibHVlMjogIzE0MjY4QztcbiAgLS1ibHVlOiAjMzA0RUYyO1xuICAtLWJsdWUyOiAjMDUxMUYyO1xuICAtLXdoaXRlLWJnOiAjZjVmN2ZhO1xuXG4gIC8qIGRldGFpbHMgc2NoZW1hICovXG4gIC0tZ3JleS1mOiAjYzRjNWQ0O1xuICAtLXJlZDogI2ZmMDA3MTtcbiAgLS1ncmVlbjogIzAwZmYwMDtcblxuICAvKiBmb250IGZhbWlseSAqL1xuICAtLWZmOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogcmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbmlucHV0LCBcbnRleHRhcmVhLFxuZmllbGRzZXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gIGhlaWdodDogNTAlO1xufVxuXG4vKiBjb250YWluZXIgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUtYmcpO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtcblxufVxuXG5cbi8qIHN0eWxlIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWxvZ28gaDEge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLmhlYWRlciAuaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHN0eWxlIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5uYXZiYXItcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNHJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5uYXZiYXItcHJvamVjdHMgLnRhYiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogdmFyKC0tZ3JleS1mKTtcbn1cblxuLm5hdmJhci1wcm9qZWN0cyAudGFiLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cblxuLyogc3R5bGUgbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcblxuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQge1xuICBmbGV4OiAxIDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JleS1mKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcblxuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQuZG9uZSB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JlZW4pO1xufVxuXG4ubWFpbiAudGFzay1jYXJkOmlzKDpob3ZlciwgOmZvY3VzKTpub3QoLmRvbmUpIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ibHVlKTtcbn1cblxuLnRhc2stY2FyZCBpbnB1dCB7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG5cbiAgZmxleDogMCAwIDFyZW07XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcblxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWNhcmQgaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG5cbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ncmVlbik7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XG4gIGZsZXg6IDE7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICByb3ctZ2FwOiAxcmVtO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xcmVtO1xuXG4gIHdpZHRoOiAxcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XG59XG5cbi50YXNrLWNhcmQgLnRhc2staW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi50YXNrLWNhcmQuZG9uZSAudGFzay1pbmZvIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrLWNhcmQgaSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xufVxuXG4vKiBzdHlsZSBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1ibHVlKTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbn1cblxuLyogY3JlYXRlIHRhc2sgYW5kIHByb2plY3QsIGVkaXQgdGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNyZWF0ZS10YXNrLFxuLmNyZWF0ZS1wcm9qZWN0LFxuLmVkaXQtdGFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtdGFzay5hY3RpdmUsXG4uY3JlYXRlLXByb2plY3QuYWN0aXZlLFxuLmVkaXQtdGFzay5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgXG4gIGhlaWdodDogODAlO1xuXG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uY3JlYXRlLXRhc2sgPiBmb3JtLFxuLmNyZWF0ZS1wcm9qZWN0ID4gZm9ybSxcbi5lZGl0LXRhc2sgPiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQsXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgc2VsZWN0LFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBzZWxlY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgb3B0aW9uLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5jcmVhdGUtcHJvamVjdCAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQge1xuICBoZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIGZvcm0gPiBidXR0b24sXG4uY3JlYXRlLXByb2plY3QgZm9ybSA+IGJ1dHRvbixcbi5lZGl0LXRhc2sgZm9ybSA+IGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgaW5wdXQsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IHVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYmxvY2s6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGxhYmVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCBsYWJlbCB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xufVxuXG4vKiB0YXNrIGRldGFpbHMgaW5mbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGFzay1kZXRhaWxzLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8uYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG5cbiAgei1pbmRleDogMTA7XG5cbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjhyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtZGVzY3JpcHRpb24gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50YXNrLWRldGFpbHMtaW5mbyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlMik7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XG59XG5cbi8qIG1lZGlhIHF1ZXJ5ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXIgbWFpbiBtYWluXCIgXG4gICAgICAgIFwibmF2IG1haW4gbWFpblwiXG4gICAgICAgIFwibmF2IG1haW4gbWFpbiBcIlxuICAgICAgICBcImJ1dHRvbnMgbWFpbiBtYWluXCI7XG4gICAgfVxuXG4gICAgLyogaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLmhlYWRlciB7XG4gICAgICBncmlkLWFyZWE6IGhlYWRlcjtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIGgxIHtcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28gaSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXIgLmhlYWRlci10ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiBuYXZiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAubmF2YmFyLXByb2plY3RzIHtcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xuXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGdhcDogMXJlbTsgICAgXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubmF2YmFyLXByb2plY3RzIC50YWI6aXMoOmhvdmVyLCA6Zm9jdXMpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgfVxuICAgIFxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIH1cbiAgICBcblxuICAgIC8qIG1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC5tYWluIHtcbiAgICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICBkaXNwbGF5OiBncmlkOyBcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xuICAgICAgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogbm9uZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogbm9uZTtcblxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgIC5tYWluIC50YXNrLWNhcmQgeyAgICBcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxuICAgIH1cblxuICAgIC50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogLTFyZW07XG5cbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XG4gICAgfVxuXG4gICAgLyogYnV0dG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgZ3JpZC1hcmVhOiBidXR0b25zO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XG5cbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9ucyBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9ucyBidXR0b246aXMoOmhvdmVyLCA6Zm9jdXMpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlMik7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQSwrRUFBK0U7O0FBRS9FO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLGlCQUFpQjtFQUNqQiwwQkFBMEI7O0VBRTFCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLCtFQUErRTs7QUFFL0U7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxhQUFhOztFQUViLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTs7RUFFVixhQUFhO0VBQ2IsNERBQTREOztBQUU5RDs7O0FBR0EsK0VBQStFOztBQUUvRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCOztFQUVyQiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7O0VBRW5CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsK0VBQStFOztBQUUvRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7O0VBRVgscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBR0EsK0VBQStFOztBQUUvRTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFNBQVM7O0VBRVQsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVzs7RUFFWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQzs7RUFFakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUzs7RUFFVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjOztFQUVkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTs7RUFFWiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjs7RUFFMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsT0FBTzs7RUFFUCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixhQUFhOztFQUViLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7O0VBRVgsVUFBVTs7RUFFViw2QkFBNkI7RUFDN0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLCtFQUErRTs7QUFFL0U7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSwrRUFBK0U7O0FBRS9FOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCOztFQUU3QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTOztFQUVULFdBQVc7O0VBRVgsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7O0VBRVosMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztFQU1FLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQSwrRUFBK0U7O0FBRS9FO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7O0VBRVQsZ0NBQWdDOztFQUVoQyxVQUFVO0VBQ1YsV0FBVzs7RUFFWCxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7O0VBRVosMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBLCtFQUErRTs7QUFFL0U7SUFDSTtNQUNFLG1DQUFtQztNQUNuQyx1Q0FBdUM7TUFDdkM7Ozs7MkJBSXFCO0lBQ3ZCOztJQUVBLDJFQUEyRTs7SUFFM0U7TUFDRSxpQkFBaUI7O01BRWpCLDZCQUE2QjtNQUM3QixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLDhCQUE4QjtNQUM5QixhQUFhOztNQUViLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsbUJBQW1CO01BQ25CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUEsMkVBQTJFOztJQUUzRTtNQUNFLGNBQWM7O01BRWQsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYiw4QkFBOEI7O01BRTlCLDZCQUE2Qjs7TUFFN0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtNQUMzQixTQUFTO01BQ1QsaUJBQWlCOztNQUVqQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCOzs7SUFHQSwyRUFBMkU7O0lBRTNFO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiwyREFBMkQ7TUFDM0QscUJBQXFCOztNQUVyQixvQkFBb0I7TUFDcEIscUJBQXFCOztNQUVyQixjQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFdBQVc7O01BRVgsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixPQUFPO01BQ1AsVUFBVTs7TUFFVixXQUFXO01BQ1gsV0FBVzs7TUFFWCw2QkFBNkI7TUFDN0IsK0JBQStCO0lBQ2pDOztJQUVBLDJFQUEyRTs7SUFFM0U7TUFDRSxrQkFBa0I7O01BRWxCLDZCQUE2QjtNQUM3QiwrQkFBK0I7O01BRS9CLGFBQWE7SUFDZjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO0lBQ2I7O0lBRUE7TUFDRSx1QkFBdUI7TUFDdkIsa0JBQWtCOztNQUVsQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSx1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLG1CQUFtQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIGNvbG9yIHNjaGVtZSAqL1xcbiAgLS1ibGFjazogIzBEMEMwMDtcXG4gIC0tZGFyay1ibHVlOiAjMEQwQzAwO1xcbiAgLS1kYXJrLWJsdWUyOiAjMTQyNjhDO1xcbiAgLS1ibHVlOiAjMzA0RUYyO1xcbiAgLS1ibHVlMjogIzA1MTFGMjtcXG4gIC0td2hpdGUtYmc6ICNmNWY3ZmE7XFxuXFxuICAvKiBkZXRhaWxzIHNjaGVtYSAqL1xcbiAgLS1ncmV5LWY6ICNjNGM1ZDQ7XFxuICAtLXJlZDogI2ZmMDA3MTtcXG4gIC0tZ3JlZW46ICMwMGZmMDA7XFxuXFxuICAvKiBmb250IGZhbWlseSAqL1xcbiAgLS1mZjogJ051bml0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIHJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcblxcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuaW5wdXQsIFxcbnRleHRhcmVhLFxcbmZpZWxkc2V0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiBjb250YWluZXIgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmcpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUtYmcpO1xcbiAgcGFkZGluZzogNDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBhdXRvIG1pbi1jb250ZW50O1xcblxcbn1cXG5cXG5cXG4vKiBzdHlsZSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItbG9nbyBoMSB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLm5hdmJhci1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDAuNHJlbTtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLm5hdmJhci1wcm9qZWN0cyAudGFiIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6IHZhcigtLWdyZXktZik7XFxufVxcblxcbi5uYXZiYXItcHJvamVjdHMgLnRhYi5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxuLyogc3R5bGUgbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbiAudGFzay1jYXJkIHtcXG4gIGZsZXg6IDEgMCA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHZhcigtLWdyZXktZik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLm1haW4gLnRhc2stY2FyZC5kb25lIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ubWFpbiAudGFzay1jYXJkOmlzKDpob3ZlciwgOmZvY3VzKTpub3QoLmRvbmUpIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNhcmQgaW5wdXQge1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG5cXG4gIGZsZXg6IDAgMCAxcmVtO1xcblxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1mKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stY2FyZCBpbnB1dDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICByb3ctZ2FwOiAxcmVtO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAtMXJlbTtcXG5cXG4gIHdpZHRoOiAxcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2staW5mbyB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4udGFzay1jYXJkLmRvbmUgLnRhc2staW5mbyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZCBpIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xcbn1cXG5cXG4vKiBzdHlsZSBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlMik7XFxufVxcblxcbi8qIGNyZWF0ZSB0YXNrIGFuZCBwcm9qZWN0LCBlZGl0IHRhc2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNyZWF0ZS10YXNrLFxcbi5jcmVhdGUtcHJvamVjdCxcXG4uZWRpdC10YXNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtdGFzay5hY3RpdmUsXFxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSxcXG4uZWRpdC10YXNrLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBcXG4gIGhlaWdodDogODAlO1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QuYWN0aXZlIHtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgPiBmb3JtLFxcbi5jcmVhdGUtcHJvamVjdCA+IGZvcm0sXFxuLmVkaXQtdGFzayA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHNlbGVjdCxcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHNlbGVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIG9wdGlvbixcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIG9wdGlvbntcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSxcXG4uY3JlYXRlLXByb2plY3QgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSxcXG4uY3JlYXRlLXByb2plY3QgLmZvcm0tZW50cnkgdGV4dGFyZWEsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jcmVhdGUtdGFzayBmb3JtID4gYnV0dG9uLFxcbi5jcmVhdGUtcHJvamVjdCBmb3JtID4gYnV0dG9uLFxcbi5lZGl0LXRhc2sgZm9ybSA+IGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGlucHV0LFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IHVsLFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgbGFiZWwsXFxuLmVkaXQtdGFzayBmaWVsZHNldCBsYWJlbCB7XFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwsXFxuLmVkaXQtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB3aGl0ZTtcXG59XFxuXFxuLyogdGFzayBkZXRhaWxzIGluZm8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4udGFzay1kZXRhaWxzLWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG5cXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuOHJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtZGVzY3JpcHRpb24gcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtbWFyay1jb21wbGV0ZSBidXR0b246aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlMik7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmciAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIG1haW4gbWFpblxcXCIgXFxuICAgICAgICBcXFwibmF2IG1haW4gbWFpblxcXCJcXG4gICAgICAgIFxcXCJuYXYgbWFpbiBtYWluIFxcXCJcXG4gICAgICAgIFxcXCJidXR0b25zIG1haW4gbWFpblxcXCI7XFxuICAgIH1cXG5cXG4gICAgLyogaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMTBweDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIGgxIHtcXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXIgLmhlYWRlci10ZXh0IHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiAgICAubmF2YmFyLXByb2plY3RzIHtcXG4gICAgICBncmlkLWFyZWE6IG5hdjtcXG5cXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgZ2FwOiAxcmVtOyAgICBcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcblxcbiAgICAubmF2YmFyLXByb2plY3RzIC50YWIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubmF2YmFyLXByb2plY3RzIC50YWI6aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB9XFxuICAgIFxcbiAgICAubmF2YmFyLXByb2plY3RzIC50YWIuYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIC8qIG1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDsgXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbiAgICAgIFxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBub25lO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogbm9uZTtcXG5cXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFpbiAudGFzay1jYXJkIHsgICAgXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZCAudGFzay1jb250ZW50OjphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIFxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFyZW07XFxuXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgLyogYnV0dG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuXFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDAuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgICAgXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5idXR0b25zIGJ1dHRvbjppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxuICAgICAgY29sb3I6IHZhcigtLWJsdWUyKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=