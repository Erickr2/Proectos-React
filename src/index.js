//componenetes que eh usado para hacer pruebas

//import { Memorize } from './components/memos/memorize';
//import { Layout } from './components/useLayoutEffect/Layout';
//import { UsoRealRef } from './components/Useref/UsoRealRef';
//import { FocusScreen } from './components/Useref/FocusScreen';
//import { MultipleCustomHook } from './components/ejemplos/MultipleCustomHook';
//import { FormWithCustomHook } from './components/UseEffect/formWithCustomHook';
//import { HookApp } from './HookApp';
//import { CounteApp } from './components/useState/CounteApp';
//import { CounterWihtCustomHook } from './components/useState/counterWihtCustomHook';
//import { MemoHook } from './components/memos/MemoHook';
/* import { Callback } from './components/memos/Callback'; */
/* import { Padre } from './components/07-tarea-memo/Padre';*/
/* import Todoapp from './components/useReducer/Todoapp'; */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./components/useContext/MainApp";



ReactDOM.render(
  <BrowserRouter>
  <MainApp />
  </BrowserRouter>, document.getElementById('root')
 
);
