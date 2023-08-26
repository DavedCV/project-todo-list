import "./styles.css";
import {
  setCurrentDate,
  setNavbar,
  setStaticButtonsListeners,
  setTasks,
} from "./Dom.js";
import { init } from "./Todo.js";

init();
setCurrentDate();
setNavbar();
setStaticButtonsListeners();
setTasks();
