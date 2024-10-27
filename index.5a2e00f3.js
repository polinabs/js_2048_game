class t{static STATUS={idle:"idle",playing:"playing",win:"win",lose:"lose"};static NUM_COLUMNS=4;static NUM_ROWS=4;static PROBABILITY=.1;constructor(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.score=0,this.status=t.STATUS.idle,this.initialState=e,this.state=this.initialState.map(t=>[...t])}moveLeft(){if("playing"===this.status){let t=this.cloneState(this.state);this.state.map(t=>{this.move("Left",t)}),this.checkState(t,this.state)}}moveRight(){if("playing"===this.status){let t=this.cloneState(this.state);this.state.map(t=>{this.move("Right",t)}),this.checkState(t,this.state)}}moveUp(){if("playing"===this.status){let t=this.cloneState(this.state);this.move("Up"),this.checkState(t,this.state)}}moveDown(){if("playing"===this.status){let t=this.cloneState(this.state);this.move("Down"),this.checkState(t,this.state)}}getScore(){return this.score}getState(){return this.state}getStatus(){return this.isLoseCase()&&(this.status=t.STATUS.lose),this.isWinCase()&&(this.status=t.STATUS.win),this.status}start(){"idle"===this.getStatus()&&(this.status=t.STATUS.playing,this.setRandomNumber(),this.setRandomNumber())}restart(){this.status="idle",this.state=this.initialState.map(t=>[...t]),this.score=0}move(t,e){let s=`shift${t}`,i=`mergeCells${t}`;this[s](e),this[i](e),this[s](e)}checkState(t,e){this.areStatesEqual(t,e)||this.setRandomNumber()}isWinCase(){return this.state.some(t=>t.includes(2048))}isLoseCase(){return 0===this.getEmptyCells().length&&this.noMovePossible()}noMovePossible(){for(let e=0;e<t.NUM_ROWS;e++)for(let s=0;s<t.NUM_COLUMNS;s++)if(s<3&&this.state[e][s]===this.state[e][s+1]||e<3&&this.state[e][s]===this.state[e+1][s])return!1;return!0}getEmptyCells(){let e=[];for(let s=0;s<t.NUM_ROWS;s++)for(let i=0;i<t.NUM_COLUMNS;i++)0===this.state[s][i]&&e.push([s,i]);return e}shiftDown(){for(let e=0;e<t.NUM_COLUMNS;e++){let s=[];for(let i=0;i<t.NUM_ROWS;i++)0!==this.state[i][e]&&s.push(this.state[i][e]);for(;s.length<t.NUM_ROWS;)s.unshift(0);for(let i=0;i<t.NUM_ROWS;i++)this.state[i][e]=s[i]}return this.state}mergeCellsDown(){for(let e=0;e<t.NUM_COLUMNS;e++){let s=[];for(let i=0;i<t.NUM_ROWS;i++)s.push(this.state[i][e]);this.mergeCellsRight(s);for(let i=0;i<t.NUM_ROWS;i++)this.state[i][e]=s[i]}}shiftUp(){for(let e=0;e<t.NUM_COLUMNS;e++){let s=[];for(let i=0;i<t.NUM_ROWS;i++)0!==this.state[i][e]&&s.push(this.state[i][e]);for(;s.length<t.NUM_ROWS;)s.push(0);for(let i=0;i<t.NUM_ROWS;i++)this.state[i][e]=s[i]}return this.state}mergeCellsUp(){for(let e=0;e<t.NUM_COLUMNS;e++){let s=[];for(let i=0;i<t.NUM_ROWS;i++)s.push(this.state[i][e]);this.mergeCellsLeft(s);for(let i=0;i<t.NUM_ROWS;i++)this.state[i][e]=s[i]}}setRandomNumber(e=1){let s=this.getEmptyCells();if(0!==s.length){for(let i=0;i<e;i++)if(s.length>0){let e=Math.floor(Math.random()*s.length),i=Math.random()<t.PROBABILITY?4:2,[a,l]=s[e];this.state[a][l]=i}}}shiftLeft(t){for(let e=1;e<t.length;e++)if(0!==t[e]){let s=e;for(;s>0&&0===t[s-1];)t[s-1]=t[s],t[s]=0,s--}}mergeCellsLeft(t){for(let e=0;e<t.length-1;e++)t[e]===t[e+1]&&(t[e]=2*t[e],t[e+1]=0,this.score+=t[e]);return t}shiftRight(t){for(let e=t.length-2;e>=0;e--)if(0!==t[e]){let s=e;for(;s<t.length-1&&0===t[s+1];)t[s+1]=t[s],t[s]=0,s++}}mergeCellsRight(t){for(let e=t.length-1;e>=0;e--)t[e]===t[e-1]&&(t[e]=2*t[e],t[e-1]=0,this.score+=t[e]);return t}cloneState(t){return t.map(t=>[...t])}areStatesEqual(t,e){for(let s=0;s<t.length;s++)for(let i=0;i<t[s].length;i++)if(t[s][i]!==e[s][i])return!1;return!0}}const e=new t,s=document.querySelector("button"),i=document.querySelector(".game-score"),a=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),r=document.querySelector(".message-win"),h=[...document.querySelectorAll(".field-row")].map(t=>[...t.querySelectorAll(".field-cell")]);function o(){(function(){let t=e.getState();h.forEach((e,s)=>{e.forEach((e,i)=>{let a=t[s][i];e.textContent=0!==a?a:"",e.className="field-cell",0!==a&&e.classList.add(`field-cell--${a}`)})}),i.textContent=`${e.getScore()}`})(),function(){let t=e.getStatus();[a,l,r].forEach(t=>t.classList.add("hidden")),"idle"===t&&a.classList.remove("hidden"),"lose"===t&&l.classList.remove("hidden"),"win"===t&&r.classList.remove("hidden")}()}document.addEventListener("keydown",function(t){"playing"===e.getStatus()&&("ArrowLeft"===t.key&&(e.moveLeft(),o()),"ArrowRight"===t.key&&(e.moveRight(),o()),"ArrowUp"===t.key&&(e.moveUp(),o()),"ArrowDown"===t.key&&(e.moveDown(),o()))}),s.addEventListener("click",function(){s.classList.contains("start")?(e.start(),s.classList.remove("start"),s.classList.add("restart"),a.classList.add("hidden"),s.textContent="Restart",o()):s.classList.contains("restart")&&(e.restart(),s.classList.remove("restart"),s.classList.add("start"),a.classList.remove("hidden"),s.textContent="Start",o())});
//# sourceMappingURL=index.5a2e00f3.js.map
