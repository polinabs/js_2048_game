!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}function r(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=function(){var t;function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),this.score=0,this.status=n.STATUS.idle,this.initialState=t,this.state=this.initialState.map(function(t){return r(t)})}return t=[{key:"moveLeft",value:function(){var t=this;if("playing"===this.status){var e=this.cloneState(this.state);this.state.map(function(e){t.move("Left",e)}),this.checkState(e,this.state)}}},{key:"moveRight",value:function(){var t=this;if("playing"===this.status){var e=this.cloneState(this.state);this.state.map(function(e){t.move("Right",e)}),this.checkState(e,this.state)}}},{key:"moveUp",value:function(){if("playing"===this.status){var t=this.cloneState(this.state);this.move("Up"),this.checkState(t,this.state)}}},{key:"moveDown",value:function(){if("playing"===this.status){var t=this.cloneState(this.state);this.move("Down"),this.checkState(t,this.state)}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.isLoseCase()&&(this.status=n.STATUS.lose),this.isWinCase()&&(this.status=n.STATUS.win),this.status}},{key:"start",value:function(){"idle"===this.getStatus()&&(this.status=n.STATUS.playing,this.setRandomNumber(),this.setRandomNumber())}},{key:"restart",value:function(){this.status="idle",this.state=this.initialState.map(function(t){return r(t)}),this.score=0}},{key:"move",value:function(t,e){var r="shift".concat(t);this[r](e),this["mergeCells".concat(t)](e),this[r](e)}},{key:"checkState",value:function(t,e){this.areStatesEqual(t,e)||this.setRandomNumber()}},{key:"isWinCase",value:function(){return this.state.some(function(t){return t.includes(2048)})}},{key:"isLoseCase",value:function(){return 0===this.getEmptyCells().length&&this.noMovePossible()}},{key:"noMovePossible",value:function(){for(var t=0;t<n.NUM_ROWS;t++)for(var e=0;e<n.NUM_COLUMNS;e++)if(e<3&&this.state[t][e]===this.state[t][e+1]||t<3&&this.state[t][e]===this.state[t+1][e])return!1;return!0}},{key:"getEmptyCells",value:function(){for(var t=[],e=0;e<n.NUM_ROWS;e++)for(var r=0;r<n.NUM_COLUMNS;r++)0===this.state[e][r]&&t.push([e,r]);return t}},{key:"shiftDown",value:function(){for(var t=0;t<n.NUM_COLUMNS;t++){for(var e=[],r=0;r<n.NUM_ROWS;r++)0!==this.state[r][t]&&e.push(this.state[r][t]);for(;e.length<n.NUM_ROWS;)e.unshift(0);for(var a=0;a<n.NUM_ROWS;a++)this.state[a][t]=e[a]}return this.state}},{key:"mergeCellsDown",value:function(){for(var t=0;t<n.NUM_COLUMNS;t++){for(var e=[],r=0;r<n.NUM_ROWS;r++)e.push(this.state[r][t]);this.mergeCellsRight(e);for(var a=0;a<n.NUM_ROWS;a++)this.state[a][t]=e[a]}}},{key:"shiftUp",value:function(){for(var t=0;t<n.NUM_COLUMNS;t++){for(var e=[],r=0;r<n.NUM_ROWS;r++)0!==this.state[r][t]&&e.push(this.state[r][t]);for(;e.length<n.NUM_ROWS;)e.push(0);for(var a=0;a<n.NUM_ROWS;a++)this.state[a][t]=e[a]}return this.state}},{key:"mergeCellsUp",value:function(){for(var t=0;t<n.NUM_COLUMNS;t++){for(var e=[],r=0;r<n.NUM_ROWS;r++)e.push(this.state[r][t]);this.mergeCellsLeft(e);for(var a=0;a<n.NUM_ROWS;a++)this.state[a][t]=e[a]}}},{key:"setRandomNumber",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=this.getEmptyCells();if(0!==r.length){for(var a=0;a<t;a++)if(r.length>0){var s,i=Math.floor(Math.random()*r.length),o=Math.random()<n.PROBABILITY?4:2,l=function(t){if(Array.isArray(t))return t}(s=r[i])||function(t,e){var r,n,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var s=[],i=!0,o=!1;try{for(a=a.call(t);!(i=(r=a.next()).done)&&(s.push(r.value),2!==s.length);i=!0);}catch(t){o=!0,n=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw n}}return s}}(s,2)||e(s,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=l[0],c=l[1];this.state[u][c]=o}}}},{key:"shiftLeft",value:function(t){for(var e=1;e<t.length;e++)if(0!==t[e])for(var r=e;r>0&&0===t[r-1];)t[r-1]=t[r],t[r]=0,r--}},{key:"mergeCellsLeft",value:function(t){for(var e=0;e<t.length-1;e++)t[e]===t[e+1]&&(t[e]=2*t[e],t[e+1]=0,this.score+=t[e]);return t}},{key:"shiftRight",value:function(t){for(var e=t.length-2;e>=0;e--)if(0!==t[e])for(var r=e;r<t.length-1&&0===t[r+1];)t[r+1]=t[r],t[r]=0,r++}},{key:"mergeCellsRight",value:function(t){for(var e=t.length-1;e>=0;e--)t[e]===t[e-1]&&(t[e]=2*t[e],t[e-1]=0,this.score+=t[e]);return t}},{key:"cloneState",value:function(t){return t.map(function(t){return r(t)})}},{key:"areStatesEqual",value:function(t,e){for(var r=0;r<t.length;r++)for(var n=0;n<t[r].length;n++)if(t[r][n]!==e[r][n])return!1;return!0}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,t),n}();n(a,"STATUS",{idle:"idle",playing:"playing",win:"win",lose:"lose"}),n(a,"NUM_COLUMNS",4),n(a,"NUM_ROWS",4),n(a,"PROBABILITY",.1);var s=new a,i=document.querySelector("button"),o=document.querySelector(".game-score"),l=document.querySelector(".message-start"),u=document.querySelector(".message-lose"),c=document.querySelector(".message-win"),h=r(document.querySelectorAll(".field-row")).map(function(t){return r(t.querySelectorAll(".field-cell"))});function f(){var t,e;t=s.getState(),h.forEach(function(e,r){e.forEach(function(e,n){var a=t[r][n];e.textContent=0!==a?a:"",e.className="field-cell",0!==a&&e.classList.add("field-cell--".concat(a))})}),o.textContent="".concat(s.getScore()),e=s.getStatus(),[l,u,c].forEach(function(t){return t.classList.add("hidden")}),"idle"===e&&l.classList.remove("hidden"),"lose"===e&&u.classList.remove("hidden"),"win"===e&&c.classList.remove("hidden")}document.addEventListener("keydown",function(t){"playing"===s.getStatus()&&("ArrowLeft"===t.key&&(s.moveLeft(),f()),"ArrowRight"===t.key&&(s.moveRight(),f()),"ArrowUp"===t.key&&(s.moveUp(),f()),"ArrowDown"===t.key&&(s.moveDown(),f()))}),i.addEventListener("click",function(){i.classList.contains("start")?(s.start(),i.classList.remove("start"),i.classList.add("restart"),l.classList.add("hidden"),i.textContent="Restart",f()):i.classList.contains("restart")&&(s.restart(),i.classList.remove("restart"),i.classList.add("start"),l.classList.remove("hidden"),i.textContent="Start",f())})}();
//# sourceMappingURL=index.4beb8371.js.map
