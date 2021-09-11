import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Board from "./Board/Board.js";
import _1 from "./_1/_1.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import _6 from "./_6/_6.js";
import _7 from "./_7/_7.js";
import _8 from "./_8/_8.js";
import _9 from "./_9/_9.js";
import _10 from "./_10/_10.js";
import _11 from "./_11/_11.js";
import _12 from "./_12/_12.js";
import Pen from "./Pen/Pen.js";
import Tet from "./Tet/Tet.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Board: new Board({
    x: -61.69248262517258,
    y: -155.5,
    direction: 90,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: false
  }),
  _1: new _1({
    x: -81.57083848050087,
    y: -152.11420909972398,
    direction: 90,
    costumeNumber: 1,
    size: 45,
    visible: false
  }),
  _2: new _2({
    x: -59.98261300910896,
    y: -116.54054664707898,
    direction: 90,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: false
  }),
  _3: new _3({
    x: -41.884820533889865,
    y: -152.11422977866602,
    direction: 90,
    costumeNumber: 1,
    size: 45,
    visible: false
  }),
  _4: new _4({
    x: -79.6384203744033,
    y: -143.64989151628842,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  _5: new _5({
    x: -43.899420374403306,
    y: -143.64989151628842,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite5: new Sprite5({
    x: -61.69248262517258,
    y: -155.5,
    direction: 90,
    costumeNumber: 1,
    size: 204.99999999999997,
    visible: true
  }),
  _6: new _6({
    x: -60.03941385974489,
    y: -104.69788816286275,
    direction: 90,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: false
  }),
  _7: new _7({
    x: -60.10310687621847,
    y: -94.59526105922198,
    direction: 90,
    costumeNumber: 1,
    size: 120,
    visible: false
  }),
  _8: new _8({
    x: -77.68555119160891,
    y: -135.18538328821128,
    direction: 90,
    costumeNumber: 1,
    size: 63.653999999999996,
    visible: false
  }),
  _9: new _9({
    x: -45.91755119160892,
    y: -135.18538328821128,
    direction: 90,
    costumeNumber: 1,
    size: 63.653999999999996,
    visible: false
  }),
  _10: new _10({
    x: -60.17452820465748,
    y: -82.87292645535008,
    direction: 90,
    costumeNumber: 1,
    size: 126.21359223300969,
    visible: false
  }),
  _11: new _11({
    x: -75.77421270476982,
    y: -126.71482170869763,
    direction: 90,
    costumeNumber: 1,
    size: 67.5305286,
    visible: false
  }),
  _12: new _12({
    x: -47.93964143438714,
    y: -126.71903669881087,
    direction: 90,
    costumeNumber: 1,
    size: 65.56362,
    visible: false
  }),
  Pen: new Pen({
    x: -20.829081084407903,
    y: -95.3232567663589,
    direction: 90,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: false
  }),
  Tet: new Tet({
    x: -60.33684917261587,
    y: -78.25349727292088,
    direction: 85,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: true
  }),
  Sprite1: new Sprite1({
    x: -84.16284917261586,
    y: -88.41089727292089,
    direction: 73,
    costumeNumber: 1,
    size: 80,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: -100.2490810844079,
    y: -95.3232567663589,
    direction: 55,
    costumeNumber: 1,
    size: 70,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: -36.51084917261586,
    y: -88.41089727292089,
    direction: 135,
    costumeNumber: 1,
    size: 80,
    visible: false
  }),
  Sprite4: new Sprite4({
    x: -20.829081084407903,
    y: -95.3232567663589,
    direction: 87,
    costumeNumber: 1,
    size: 70,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
