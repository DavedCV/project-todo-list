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

      background-color: var(--dark-blue2);
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

      background-color: var(--dark-blue2);
  
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
      color: var(--dark-blue2);
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

      background-color: var(--dark-blue2);
      border-bottom-left-radius: 1rem;

      padding: 1rem;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .buttons button {
      background-color: white;
      color: var(--dark-blue2);
      
      width: 100%;
    }
    
    .buttons button:is(:hover, :focus) {
      background-color: white;
      box-shadow: 0 0 5px white;
      color: var(--blue2);
    }

    /* create task and project, edit task ------------------------------------*/

    .create-task.active,
    .create-project.active,
    .edit-task.active,
    .task-details-info.active {
      grid-area: main;
      
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      height: 100%;
      width: 98%;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* color scheme */\n  --black: #0D0C00;\n  --dark-blue: #0D0C00;\n  --dark-blue2: #14268C;\n  --blue: #304EF2;\n  --blue2: #0511F2;\n  --white-bg: #f5f7fa;\n\n  /* details schema */\n  --grey-f: #c4c5d4;\n  --red: #ff0071;\n  --green: #00ff00;\n\n  /* font family */\n  --ff: 'Nunito', sans-serif;\n}\n\n/* reset ---------------------------------------------------------------------*/\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--ff);\n  background-color: var(--black);\n  color: var(--black);\n\n  width: 100vw;\n  height: 100vh;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-family: var(--ff);\n  font-size: 1rem;\n\n  width: max-content;\n\n  font-weight: bold;\n  text-transform: capitalize;\n\n  padding: 0.5rem 0.5rem;\n  border-radius: 1rem;\n}\n\ninput, \ntextarea,\nfieldset {\n  outline: none;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n::-webkit-scrollbar {\n  width: 1px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--blue);\n  height: 50%;\n}\n\n/* container style -----------------------------------------------------------*/\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n\n  position: relative;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: var(--white-bg);\n  box-shadow: 0 0 10px var(--white-bg);\n  padding: 40px;\n\n  border-radius: 2rem;\n  height: 80%;\n  width: 80%;\n\n  display: grid;\n  grid-template-rows: min-content min-content auto min-content;\n\n}\n\n\n/* style header --------------------------------------------------------------*/\n\n.header {\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n\n.header .header-logo {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.header .header-logo h1 {\n  width: fit-content;\n}\n\n.header .header-logo i {\n  font-size: 2rem;\n  color: var(--blue);\n}\n\n.header .header-text {\n  text-align: center;\n}\n\n/* style navbar --------------------------------------------------------------*/\n\n.navbar-projects {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n\n  margin-bottom: 1.5rem;\n}\n\n.navbar-projects .tab {\n  text-transform: capitalize;\n  color: var(--grey-f);\n}\n\n.navbar-projects .tab.active {\n  color: var(--black);\n}\n\n\n/* style main ----------------------------------------------------------------*/\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n\n  overflow: auto;\n  padding: 0.5rem 1rem;\n  margin-bottom: 2rem;\n}\n\n.main .task-card {\n  flex: 1 0 50px;\n  width: 100%;\n\n  background-color: white;\n  border-radius: 1rem;\n  box-shadow: 0 0 4px var(--grey-f);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n\n  padding: 1.5rem;\n}\n\n.main .task-card.done {\n  box-shadow: 0 0 4px var(--green);\n}\n\n.main .task-card:is(:hover, :focus):not(.done) {\n  box-shadow: 0 0 4px var(--blue);\n}\n\n.task-card input {\n  margin-inline: auto;\n\n  flex: 0 0 1rem;\n\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n\n  border: 1px solid var(--grey-f);\n  border-radius: 5px;\n}\n\n.task-card input:checked {\n  background-color: var(--green);\n  border-color: var(--green);\n\n  box-shadow: 0 0 2px var(--green);\n}\n\n.task-card .task-content {\n  flex: 1;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr auto;\n  row-gap: 1rem;\n\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n\n  position: relative;\n}\n\n.task-card .task-content::after {\n  content: \"\";\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -1rem;\n\n  width: 1px;\n\n  background-color: var(--blue);\n  box-shadow: 0 0 2px var(--blue);\n}\n\n.task-card .task-info {\n  grid-column: 1 / 3;\n  \n  text-align: center;\n  text-transform: capitalize;\n}\n\n.task-card.done .task-info {\n  text-decoration: line-through;\n}\n\n.task-card i {\n  color: var(--grey-f);\n}\n\n/* style buttons -------------------------------------------------------------*/\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.buttons button {\n  background-color: var(--blue);\n  color: white;\n  box-shadow: 0 0 5px var(--blue);\n}\n\n.buttons button:is(:hover, :focus) {\n  background-color: var(--blue2);\n}\n\n/* create task and project, edit task ----------------------------------------*/\n\n.create-task,\n.create-project,\n.edit-task {\n  display: none;\n}\n\n.create-task.active,\n.create-project.active,\n.edit-task.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  \n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  \n  height: 80%;\n\n  padding: 2rem;\n\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n}\n\n.create-project.active {\n  height: 70%;\n}\n\n.create-task > form,\n.create-project > form,\n.edit-task > form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  justify-content: space-evenly;\n}\n\n.create-task .form-entry:first-child,\n.edit-task .form-entry:first-child {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.create-task .form-entry:first-child select,\n.edit-task .form-entry:first-child select{\n  background-color: var(--blue);\n  color: white;\n  padding: 0.2rem 0.5rem;\n  border: 2px solid white;\n  outline: none;\n}\n\n.create-task .form-entry:first-child option,\n.edit-task .form-entry:first-child option{\n  color: var(--blue);\n  background-color: white;\n  outline: none;\n  border: none;\n}\n\n.create-task .form-entry input,\n.create-task .form-entry textarea,\n.create-project .form-entry input,\n.create-project .form-entry textarea,\n.edit-task .form-entry input,\n.edit-task .form-entry textarea {\n  width: 100%;\n  border-bottom: 2px solid white;\n  color: white;\n}\n\n.create-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator,\n.edit-task .form-entry input[type=datetime-local]::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n.create-task .form-entry input,\n.create-project .form-entry input,\n.edit-task .form-entry input {\n  height: 1.8rem;\n}\n\n.create-task .form-entry textarea,\n.create-project .form-entry textarea,\n.edit-task .form-entry textarea {\n  height: 4rem;\n}\n\n.create-task form > button,\n.create-project form > button,\n.edit-task form > button {\n  align-self: center;\n\n  background-color: white;\n  color: var(--blue);\n}\n\n.create-task fieldset input,\n.edit-task fieldset input {\n  appearance: none;\n}\n\n.create-task fieldset ul,\n.edit-task fieldset ul {\n  display: flex;\n  gap: 0.5rem;\n  margin-block: 1rem;\n  justify-content: space-between;\n}\n\n.create-task fieldset label,\n.edit-task fieldset label {\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid white;\n}\n\n.create-task fieldset input:checked + label,\n.edit-task fieldset input:checked + label {\n  background-color: white;\n  color: var(--blue);\n  box-shadow: 0 0 10px white;\n}\n\n/* task details info ---------------------------------------------------------*/\n\n.task-details-info {\n  display: none;\n}\n\n.task-details-info.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  width: 80%;\n  height: 90%;\n\n  z-index: 10;\n\n  padding: 2rem;\n  border-radius: 2rem;\n  background-color: var(--blue);\n  color: white;\n\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.task-details-info i {\n  position: absolute;\n  top: 0.8rem;\n  right: 1rem;\n}\n\n.task-details-info .details-description p {\n  text-align: justify;\n}\n\n.task-details-info div:not(:last-child) {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid white;\n}\n\n.task-details-info .details-mark-complete button {\n  color: var(--blue);\n  background-color: white;\n}\n\n.task-details-info .details-mark-complete button:is(:hover, :focus) {\n  color: var(--blue2);\n  box-shadow: 0 0 5px white;\n}\n\n/* media queryes -------------------------------------------------------------*/\n\n@media (min-width: 1000px) {\n    .container {\n      grid-template-rows: 1fr 2fr 2fr 1fr;\n      grid-template-columns: 20% auto;\n      grid-template-areas:\n        \"header main main\" \n        \"nav main main\"\n        \"nav main main \"\n        \"buttons main main\";\n    }\n\n    /* header ----------------------------------------------------------------*/\n\n    .header {\n      grid-area: header;\n\n      background-color: var(--dark-blue2);\n      color: white;\n      margin-bottom: 0;\n      border-bottom: 2px solid white;\n      padding: 1rem;\n\n      border-top-left-radius: 1rem;\n    }\n\n    .header .header-logo {\n      flex-direction: column;\n      gap: 10px;\n      align-items: center;\n      margin-bottom: 10px;\n    }\n    \n    .header .header-logo h1 {\n      width: max-content;\n    }\n    \n    .header .header-logo i {\n      font-size: 2rem;\n      color: white;\n    }\n    \n    .header .header-text {\n      text-align: center;\n    }\n\n    /* navbar ----------------------------------------------------------------*/\n\n    .navbar-projects {\n      grid-area: nav;\n\n      margin-bottom: 0;\n      padding: 1rem;\n      border-bottom: 2px solid white;\n\n      background-color: var(--dark-blue2);\n  \n      flex-direction: column;\n      justify-content: flex-start;\n      gap: 1rem;    \n      flex-wrap: nowrap;\n      \n      overflow: auto;\n    }\n\n    .navbar-projects .tab {\n      color: white;\n    }\n\n    .navbar-projects .tab:is(:hover, :focus) {\n      color: var(--black);\n    }\n    \n    .navbar-projects .tab.active {\n      background-color: white;\n      padding: 0.5rem;\n      border-radius: 1rem;\n      color: var(--dark-blue2);\n    }\n    \n\n    /* main ------------------------------------------------------------------*/\n\n    .main {\n      grid-area: main;\n    }\n\n    .main {\n      display: grid; \n      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));\n      grid-auto-rows: 45%;\n      \n      gap: 2.4%;\n\n      flex-direction: none;\n      justify-content: none;\n\n      overflow: auto;\n      padding: 0.2rem 1rem;\n      margin-bottom: 0;\n    }\n    \n    .main .task-card {    \n      flex-direction: column;    \n    }\n\n    .task-card .task-content::after {\n      content: \"\";\n    \n      position: absolute;\n      right: 0;\n      left: 0;\n      top: -1rem;\n\n      height: 1px;\n      width: 100%;\n    \n      background-color: var(--blue);\n      box-shadow: 0 0 2px var(--blue);\n    }\n\n    /* buttons ---------------------------------------------------------------*/\n\n    .buttons {\n      grid-area: buttons;\n\n      background-color: var(--dark-blue2);\n      border-bottom-left-radius: 1rem;\n\n      padding: 1rem;\n    }\n\n    .buttons {\n      flex-direction: column;\n      gap: 0.5rem;\n    }\n    \n    .buttons button {\n      background-color: white;\n      color: var(--dark-blue2);\n      \n      width: 100%;\n    }\n    \n    .buttons button:is(:hover, :focus) {\n      background-color: white;\n      box-shadow: 0 0 5px white;\n      color: var(--blue2);\n    }\n\n    /* create task and project, edit task ------------------------------------*/\n\n    .create-task.active,\n    .create-project.active,\n    .edit-task.active,\n    .task-details-info.active {\n      grid-area: main;\n      \n      top: 50%;\n      left: 50%;\n\n      transform: translate(-50%, -50%);\n\n      height: 100%;\n      width: 98%;\n\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxhQUFhLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsWUFBWSxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsUUFBUSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFL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QUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvciBzY2hlbWUgKi9cbiAgLS1ibGFjazogIzBEMEMwMDtcbiAgLS1kYXJrLWJsdWU6ICMwRDBDMDA7XG4gIC0tZGFyay1ibHVlMjogIzE0MjY4QztcbiAgLS1ibHVlOiAjMzA0RUYyO1xuICAtLWJsdWUyOiAjMDUxMUYyO1xuICAtLXdoaXRlLWJnOiAjZjVmN2ZhO1xuXG4gIC8qIGRldGFpbHMgc2NoZW1hICovXG4gIC0tZ3JleS1mOiAjYzRjNWQ0O1xuICAtLXJlZDogI2ZmMDA3MTtcbiAgLS1ncmVlbjogIzAwZmYwMDtcblxuICAvKiBmb250IGZhbWlseSAqL1xuICAtLWZmOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogcmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbmlucHV0LCBcbnRleHRhcmVhLFxuZmllbGRzZXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gIGhlaWdodDogNTAlO1xufVxuXG4vKiBjb250YWluZXIgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUtYmcpO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtcblxufVxuXG5cbi8qIHN0eWxlIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWxvZ28gaDEge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLmhlYWRlciAuaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHN0eWxlIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5uYXZiYXItcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNHJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5uYXZiYXItcHJvamVjdHMgLnRhYiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogdmFyKC0tZ3JleS1mKTtcbn1cblxuLm5hdmJhci1wcm9qZWN0cyAudGFiLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cblxuLyogc3R5bGUgbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcblxuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQge1xuICBmbGV4OiAxIDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JleS1mKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcblxuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5tYWluIC50YXNrLWNhcmQuZG9uZSB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JlZW4pO1xufVxuXG4ubWFpbiAudGFzay1jYXJkOmlzKDpob3ZlciwgOmZvY3VzKTpub3QoLmRvbmUpIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ibHVlKTtcbn1cblxuLnRhc2stY2FyZCBpbnB1dCB7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG5cbiAgZmxleDogMCAwIDFyZW07XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcblxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWNhcmQgaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG5cbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ncmVlbik7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XG4gIGZsZXg6IDE7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICByb3ctZ2FwOiAxcmVtO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xcmVtO1xuXG4gIHdpZHRoOiAxcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XG59XG5cbi50YXNrLWNhcmQgLnRhc2staW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi50YXNrLWNhcmQuZG9uZSAudGFzay1pbmZvIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrLWNhcmQgaSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xufVxuXG4vKiBzdHlsZSBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1ibHVlKTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbn1cblxuLyogY3JlYXRlIHRhc2sgYW5kIHByb2plY3QsIGVkaXQgdGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNyZWF0ZS10YXNrLFxuLmNyZWF0ZS1wcm9qZWN0LFxuLmVkaXQtdGFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtdGFzay5hY3RpdmUsXG4uY3JlYXRlLXByb2plY3QuYWN0aXZlLFxuLmVkaXQtdGFzay5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgXG4gIGhlaWdodDogODAlO1xuXG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uY3JlYXRlLXRhc2sgPiBmb3JtLFxuLmNyZWF0ZS1wcm9qZWN0ID4gZm9ybSxcbi5lZGl0LXRhc2sgPiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQsXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgc2VsZWN0LFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBzZWxlY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQgb3B0aW9uLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSBpbnB1dCxcbi5jcmVhdGUtcHJvamVjdCAuZm9ybS1lbnRyeSBpbnB1dCxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQge1xuICBoZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNHJlbTtcbn1cblxuLmNyZWF0ZS10YXNrIGZvcm0gPiBidXR0b24sXG4uY3JlYXRlLXByb2plY3QgZm9ybSA+IGJ1dHRvbixcbi5lZGl0LXRhc2sgZm9ybSA+IGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgaW5wdXQsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IHVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYmxvY2s6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGxhYmVsLFxuLmVkaXQtdGFzayBmaWVsZHNldCBsYWJlbCB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwsXG4uZWRpdC10YXNrIGZpZWxkc2V0IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xufVxuXG4vKiB0YXNrIGRldGFpbHMgaW5mbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGFzay1kZXRhaWxzLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8uYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG5cbiAgei1pbmRleDogMTA7XG5cbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjhyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtZGVzY3JpcHRpb24gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50YXNrLWRldGFpbHMtaW5mbyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlMik7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XG59XG5cbi8qIG1lZGlhIHF1ZXJ5ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiaGVhZGVyIG1haW4gbWFpblwiIFxuICAgICAgICBcIm5hdiBtYWluIG1haW5cIlxuICAgICAgICBcIm5hdiBtYWluIG1haW4gXCJcbiAgICAgICAgXCJidXR0b25zIG1haW4gbWFpblwiO1xuICAgIH1cblxuICAgIC8qIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC5oZWFkZXIge1xuICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gICAgfVxuXG4gICAgLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyBoMSB7XG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyIC5oZWFkZXItdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLm5hdmJhci1wcm9qZWN0cyB7XG4gICAgICBncmlkLWFyZWE6IG5hdjtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xuICBcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDFyZW07ICAgIFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIC5uYXZiYXItcHJvamVjdHMgLnRhYiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIH1cbiAgICBcbiAgICAubmF2YmFyLXByb2plY3RzIC50YWIuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcbiAgICB9XG4gICAgXG5cbiAgICAvKiBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAubWFpbiB7XG4gICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgZGlzcGxheTogZ3JpZDsgXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwJSwgMWZyKSk7XG4gICAgICBncmlkLWF1dG8tcm93czogNDUlO1xuICAgICAgXG4gICAgICBnYXA6IDIuNCU7XG5cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBub25lO1xuXG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLm1haW4gLnRhc2stY2FyZCB7ICAgIFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXG4gICAgfVxuXG4gICAgLnRhc2stY2FyZCAudGFzay1jb250ZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAtMXJlbTtcblxuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ibHVlKTtcbiAgICB9XG5cbiAgICAvKiBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcblxuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25zIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcbiAgICAgIFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25zIGJ1dHRvbjppcyg6aG92ZXIsIDpmb2N1cykge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xuICAgICAgY29sb3I6IHZhcigtLWJsdWUyKTtcbiAgICB9XG5cbiAgICAvKiBjcmVhdGUgdGFzayBhbmQgcHJvamVjdCwgZWRpdCB0YXNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAuY3JlYXRlLXRhc2suYWN0aXZlLFxuICAgIC5jcmVhdGUtcHJvamVjdC5hY3RpdmUsXG4gICAgLmVkaXQtdGFzay5hY3RpdmUsXG4gICAgLnRhc2stZGV0YWlscy1pbmZvLmFjdGl2ZSB7XG4gICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICBcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDk4JTtcblxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQSwrRUFBK0U7O0FBRS9FO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLGlCQUFpQjtFQUNqQiwwQkFBMEI7O0VBRTFCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLCtFQUEr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QUUzRTtNQUNFLGtCQUFrQjs7TUFFbEIsbUNBQW1DO01BQ25DLCtCQUErQjs7TUFFL0IsYUFBYTtJQUNmOztJQUVBO01BQ0Usc0JBQXNCO01BQ3RCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2Qix3QkFBd0I7O01BRXhCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2Qix5QkFBeUI7TUFDekIsbUJBQW1CO0lBQ3JCOztJQUVBLDJFQUEyRTs7SUFFM0U7Ozs7TUFJRSxlQUFlOztNQUVmLFFBQVE7TUFDUixTQUFTOztNQUVULGdDQUFnQzs7TUFFaEMsWUFBWTtNQUNaLFVBQVU7O01BRVYseUJBQXlCO01BQ3pCLDRCQUE0QjtJQUM5QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIGNvbG9yIHNjaGVtZSAqL1xcbiAgLS1ibGFjazogIzBEMEMwMDtcXG4gIC0tZGFyay1ibHVlOiAjMEQwQzAwO1xcbiAgLS1kYXJrLWJsdWUyOiAjMTQyNjhDO1xcbiAgLS1ibHVlOiAjMzA0RUYyO1xcbiAgLS1ibHVlMjogIzA1MTFGMjtcXG4gIC0td2hpdGUtYmc6ICNmNWY3ZmE7XFxuXFxuICAvKiBkZXRhaWxzIHNjaGVtYSAqL1xcbiAgLS1ncmV5LWY6ICNjNGM1ZDQ7XFxuICAtLXJlZDogI2ZmMDA3MTtcXG4gIC0tZ3JlZW46ICMwMGZmMDA7XFxuXFxuICAvKiBmb250IGZhbWlseSAqL1xcbiAgLS1mZjogJ051bml0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIHJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcblxcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuaW5wdXQsIFxcbnRleHRhcmVhLFxcbmZpZWxkc2V0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiBjb250YWluZXIgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmcpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUtYmcpO1xcbiAgcGFkZGluZzogNDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBhdXRvIG1pbi1jb250ZW50O1xcblxcbn1cXG5cXG5cXG4vKiBzdHlsZSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItbG9nbyBoMSB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIgLmhlYWRlci1sb2dvIGkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uaGVhZGVyIC5oZWFkZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLm5hdmJhci1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDAuNHJlbTtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLm5hdmJhci1wcm9qZWN0cyAudGFiIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6IHZhcigtLWdyZXktZik7XFxufVxcblxcbi5uYXZiYXItcHJvamVjdHMgLnRhYi5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxuLyogc3R5bGUgbWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbiAudGFzay1jYXJkIHtcXG4gIGZsZXg6IDEgMCA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHZhcigtLWdyZXktZik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLm1haW4gLnRhc2stY2FyZC5kb25lIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ubWFpbiAudGFzay1jYXJkOmlzKDpob3ZlciwgOmZvY3VzKTpub3QoLmRvbmUpIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNhcmQgaW5wdXQge1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG5cXG4gIGZsZXg6IDAgMCAxcmVtO1xcblxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1mKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stY2FyZCBpbnB1dDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICByb3ctZ2FwOiAxcmVtO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAtMXJlbTtcXG5cXG4gIHdpZHRoOiAxcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNhcmQgLnRhc2staW5mbyB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4udGFzay1jYXJkLmRvbmUgLnRhc2staW5mbyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZCBpIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LWYpO1xcbn1cXG5cXG4vKiBzdHlsZSBidXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlMik7XFxufVxcblxcbi8qIGNyZWF0ZSB0YXNrIGFuZCBwcm9qZWN0LCBlZGl0IHRhc2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNyZWF0ZS10YXNrLFxcbi5jcmVhdGUtcHJvamVjdCxcXG4uZWRpdC10YXNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtdGFzay5hY3RpdmUsXFxuLmNyZWF0ZS1wcm9qZWN0LmFjdGl2ZSxcXG4uZWRpdC10YXNrLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBcXG4gIGhlaWdodDogODAlO1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QuYWN0aXZlIHtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgPiBmb3JtLFxcbi5jcmVhdGUtcHJvamVjdCA+IGZvcm0sXFxuLmVkaXQtdGFzayA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnk6Zmlyc3QtY2hpbGQsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeTpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHNlbGVjdCxcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIHNlbGVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIG9wdGlvbixcXG4uZWRpdC10YXNrIC5mb3JtLWVudHJ5OmZpcnN0LWNoaWxkIG9wdGlvbntcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0LFxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSxcXG4uY3JlYXRlLXByb2plY3QgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IHRleHRhcmVhLFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIC5mb3JtLWVudHJ5IGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgLmZvcm0tZW50cnkgaW5wdXQsXFxuLmNyZWF0ZS1wcm9qZWN0IC5mb3JtLWVudHJ5IGlucHV0LFxcbi5lZGl0LXRhc2sgLmZvcm0tZW50cnkgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5jcmVhdGUtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSxcXG4uY3JlYXRlLXByb2plY3QgLmZvcm0tZW50cnkgdGV4dGFyZWEsXFxuLmVkaXQtdGFzayAuZm9ybS1lbnRyeSB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jcmVhdGUtdGFzayBmb3JtID4gYnV0dG9uLFxcbi5jcmVhdGUtcHJvamVjdCBmb3JtID4gYnV0dG9uLFxcbi5lZGl0LXRhc2sgZm9ybSA+IGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IGlucHV0LFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIGZpZWxkc2V0IHVsLFxcbi5lZGl0LXRhc2sgZmllbGRzZXQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgZmllbGRzZXQgbGFiZWwsXFxuLmVkaXQtdGFzayBmaWVsZHNldCBsYWJlbCB7XFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jcmVhdGUtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwsXFxuLmVkaXQtdGFzayBmaWVsZHNldCBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB3aGl0ZTtcXG59XFxuXFxuLyogdGFzayBkZXRhaWxzIGluZm8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4udGFzay1kZXRhaWxzLWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG5cXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuOHJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtZGVzY3JpcHRpb24gcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy1pbmZvIC5kZXRhaWxzLW1hcmstY29tcGxldGUgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWluZm8gLmRldGFpbHMtbWFyay1jb21wbGV0ZSBidXR0b246aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlMik7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmciAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0bztcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBtYWluIG1haW5cXFwiIFxcbiAgICAgICAgXFxcIm5hdiBtYWluIG1haW5cXFwiXFxuICAgICAgICBcXFwibmF2IG1haW4gbWFpbiBcXFwiXFxuICAgICAgICBcXFwiYnV0dG9ucyBtYWluIG1haW5cXFwiO1xcbiAgICB9XFxuXFxuICAgIC8qIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDEwcHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyBoMSB7XFxuICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyIC5oZWFkZXItbG9nbyBpIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyIC5oZWFkZXItdGV4dCB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4gICAgLm5hdmJhci1wcm9qZWN0cyB7XFxuICAgICAgZ3JpZC1hcmVhOiBuYXY7XFxuXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcXG4gIFxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIGdhcDogMXJlbTsgICAgXFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm5hdmJhci1wcm9qZWN0cyAudGFiLmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xcbiAgICB9XFxuICAgIFxcblxcbiAgICAvKiBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5tYWluIHtcXG4gICAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAlLCAxZnIpKTtcXG4gICAgICBncmlkLWF1dG8tcm93czogNDUlO1xcbiAgICAgIFxcbiAgICAgIGdhcDogMi40JTtcXG5cXG4gICAgICBmbGV4LWRpcmVjdGlvbjogbm9uZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7XFxuXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4gLnRhc2stY2FyZCB7ICAgIFxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLWNhcmQgLnRhc2stY29udGVudDo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcmVtO1xcblxcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLWJsdWUpO1xcbiAgICB9XFxuXFxuICAgIC8qIGJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4gICAgLmJ1dHRvbnMge1xcbiAgICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xcblxcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbnMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5idXR0b25zIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xcbiAgICAgIFxcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYnV0dG9ucyBidXR0b246aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlMik7XFxuICAgIH1cXG5cXG4gICAgLyogY3JlYXRlIHRhc2sgYW5kIHByb2plY3QsIGVkaXQgdGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiAgICAuY3JlYXRlLXRhc2suYWN0aXZlLFxcbiAgICAuY3JlYXRlLXByb2plY3QuYWN0aXZlLFxcbiAgICAuZWRpdC10YXNrLmFjdGl2ZSxcXG4gICAgLnRhc2stZGV0YWlscy1pbmZvLmFjdGl2ZSB7XFxuICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAgIFxcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG5cXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDk4JTtcXG5cXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9