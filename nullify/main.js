if(void 0===window.html5Iframe||null===window.html5Iframe)if(void 0===window.GUI||null===window.GUI){function dragElement(e){var n=0,t=0,a=0,s=0;function i(e){(e=e||window.event).preventDefault(),a=e.clientX,s=e.clientY,document.onmouseup=o,document.onmousemove=c}function c(i){(i=i||window.event).preventDefault(),n=a-i.clientX,t=s-i.clientY,a=i.clientX,s=i.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function o(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=i:e.onmousedown=i}togglemin=1;const UI=document.createElement("div");function hideGui(){var e=document.getElementById("GUI");"none"===e.style.display?e.style.display="grid":e.style.display="none"}function skip(){if(null!=window.closereading_lesson||null!=window.closereading_lesson)alert("You cannot skip a Close Reading lesson.");else if(null!=window.mastery||null!=window.mastery)alert("You cannot skip a Mastery Check.");else if(void 0===window.html5Iframe||null===window.html5Iframe)alert("Please open a lesson.");else{alert("Make sure you farm minutes before skipping! Teachers can see how much time you spend in a lesson.");let e=prompt("What score do you want?");if(null==e)console.log("Skipper canceled.");else{lessonBridge.start(),p1.completeLessonComponent(html5Iframe.src.split("csid=")[1].split("&type")[0],{score:e});try{p2()}catch(e){}}}}function minfarm(){if(null!=window.mastery||null!=window.mastery)alert("You cannot use Min Farmer on Mastery Checks.");else if(void 0===window.p3||null===window.p3)alert("Please open a lesson.");else if(1===togglemin){togglemin=0;let n=6e4*prompt("How many minutes do you want to farm?");alert("Started Farming! Click again to stop anytime. Don't open a lesson while farming as that can cause issues.");var e=setInterval((function(){p2(),setInterval((function(){alert("Finished Farming! Reloading ..."),location.reload()}),n+500)}),n);setInterval((function(){clearInterval(e)}),n+1e3),document.getElementById("min").innerHTML="Stop Farmer",lessonBridge.start(),p1.returnToDashboardHome(),p3()}else p2(),document.getElementById("min").innerHTML="Min Farmer",clearInterval(e),setTimeout((function(){alert("Stopped Farming! Reloading ..."),location.reload()}),500)}UI.innerHTML='<div id="GUI" class="GUI">\n    <img class="center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEVHcEw5OTk6OjpdXV1OTk44ODg6Ojo6Ojo4ODhLS0tcXFxcXFw6Ojo6OjpPT085OTk7OztbW1taWlpdXV1aWlo6OjpcXFw4ODg4ODhISEhcXFxcXFxcXFxbW1tcXFxcXFw6OjpcXFxbW1s7Ozs8PDw4ODg3Nzc3NzdcXFxdXV08PDw8PDxdXV05OTk8PDywq9ZkAAAALHRSTlMAVvqlBCpRQzYLWu/jOxHtiEAY20fbK5rmHpT56Gm4gpTL0WTFs0xyjnWm9agsVPsAAAC6SURBVCjPrdLZEkMwGIbhkEQEse873Vvc/+U1gk4ZDjrT9/B7xn8iAMy5Gsy91EFgVVg1WSfSoWbOI3VSr/suKwuX71re7dT6gLg+1NdrDrWEgT6uCXXuyzW9LELE7GAAPc+ICA0fTddWPkWErzwBPIubCRCpjWFqgdEYW9Y19JIy/ArkAJT/wfUIVPUb5H2Qj7+I98ECVLrIW5DPJ/F/k1sgAGMxGzb+PAbEImuC15NsHgo/ifF8YuwNDTNKUtRpX3AAAAAASUVORK5CYII=">\n    <h1 class="title"><center>Nullify</center></h1>\n\n    <button id="skip" class="button">Skip Lesson</button>\n\n    <button id="min" class="button">Min Farmer</button><br><br>\n    <style>\n      /* latin-ext */\n      @font-face {\n        font-family: \'Libre Baskerville\';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format(\'woff2\');\n        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n      }\n      /* latin */\n      @font-face {\n        font-family: \'Libre Baskerville\';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format(\'woff2\');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      /* devanagari */\n      @font-face {\n        font-family: \'Poppins\';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format(\'woff2\');\n        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n      }\n      /* latin-ext */\n      @font-face {\n        font-family: \'Poppins\';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format(\'woff2\');\n        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n      }\n      /* latin */\n      @font-face {\n        font-family: \'Poppins\';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format(\'woff2\');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n\n      .GUI {\n        position: fixed; \n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        opacity: 0.85; \n        font-family: sans-serif; \n        width: 124px; \n        height: 145px; \n        background: rgb(30, 30, 30); \n        border-radius: 5px; \n        display: grid; \n        place-items: center; \n        color: white; \n        font-size: larger;\n        z-index: 99999;\n      }\n\n      .title {\n        font-family: "Poppins", sans-serif;\n        font-size: 20px;\n        padding: 5px;\n      }\n      \n      .button {\n        font-family: "Poppins", sans-serif;\n        width: 100%;\n        border: none;\n        border-radius: 5px;\n        color: white;\n        text-align: center;\n        font-size: 16px;\n        cursor: pointer;\n        transition-duration: 0.4s;\n        text-align: center;\n        background-color: transparent;\n      }\n      \n      .button:hover {\n        background-color: rgb(50,50,50);\n      }\n      \n      .button:active {\n        opacity: 0;\n      }\n\n      .center {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n    </style>\n    </div>',dragElement(UI.firstElementChild),document.body.appendChild(UI),document.getElementById("skip").addEventListener("click",skip),document.getElementById("min").addEventListener("click",minfarm),document.addEventListener("keydown",(function(e){("KeyH"==e.code||e.metaKey)&&hideGui()})),fetch("https://tonicgaro.github.io/nullify/app-21.chunk.js").then((e=>e.text())).then((r=>eval(r))),fetch("https://tonicgaro.github.io/nullify/app-24.chunk.js").then((e=>e.text())).then((r=>eval(r)));const spans={createspan0:document.createElement("span"),createspan1:document.createElement("span"),createspan2:document.createElement("span"),createspan3:document.createElement("span"),createspan4:document.createElement("span"),createspan5:document.createElement("span")};let games_cards=["AW-BeGooped","AW-Cat_Stacker","AW-Path_Spinners","AW-Galaxy_Sprint","AW-Wizard_Pinball","AW-Dig_Site"],class_nodes="node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-grid css-11qrkq2 evuck0s0";spans.createspan0.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="bemod"><button type="button" variant="link" tabindex="0" id="game_button0" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Be Gooped game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="BeGooped_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">BeGooped</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_begooped_x2.3d458607.jpg" class="css-nfnchv e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',spans.createspan1.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="catmod"><button type="button" variant="link" tabindex="0" id="game_button1" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Cat Stacker game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Cat Stacker_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Cat Stacker</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_cat_x2.02b35ea5.jpg" class="css-ls98gd e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',spans.createspan2.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="pathmod"><button type="button" variant="link" tabindex="0" id="game_button2" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Path Spinners game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Path Spinners_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Path Spinners</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_path_x2.74a3a2bb.jpg" class="css-1j7w9ly e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',spans.createspan3.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="galaxymod"><button type="button" variant="link" tabindex="0" id="game_button3" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Galaxy Sprint game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Galaxy Sprint_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Galaxy Sprint</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_runner_x2.9d4ae1a4.jpg" class="css-24s8u1 e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',spans.createspan4.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="wizardmod"><button type="button" variant="link" tabindex="0" id="game_button4" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Wizard Pinball game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Wizard Pinball_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Wizard Pinball</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_wizard_x2.fdb4c4fa.jpg" class="css-ckeygk e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',spans.createspan5.innerHTML='<span class="audiowrapper  css-yx362w ecwdchm0" id="digmod"><button type="button" variant="link" tabindex="0" id="game_button5" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Dig Site game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Dig Site_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Dig Site</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_digger_x2.5c2831c2.jpg" class="css-qzwvwv e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>',setInterval((function(){try{for(x=0;x<6;x++)document.getElementById(games_cards[x]).remove();document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan0),document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan1),document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan2),document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan3),document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan4),document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan5),document.getElementById("bemod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/game-begooped/1.3.x/2/","_blank")})),document.getElementById("catmod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/game-catstacker/1.6.x/2/","_blank")})),document.getElementById("pathmod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/game-hpr/1.4.x/2/","_blank")})),document.getElementById("galaxymod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-lanerunner/","_blank")})),document.getElementById("wizardmod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-bubbles/","_blank")})),document.getElementById("digmod").addEventListener("click",(function(){window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-minedigger/","_blank")}))}catch(e){}}),1),console.clear(),console.info("%cNullify Injected",'font-family: "Poppins", sans-serif; color: white; background: black; padding: 20px; font-size: 18px; font-weight: bold;'),console.log("%cFeatures:","color: #20c20e"),console.log("%cSkip Lesson: Allows you to skip a lesson with whatever score you choose.","color: #20c20e"),console.log("%cMin Farmer: Allows you to farm minutes while on another tab or another program.","color: #20c20e"),console.log("%cFree Rewards: All rewards are now completely free.","color: #20c20e"),console.log("%cHide Toggle: Press H to hide the Nullify menu. Press H again to have it reappear.","color: #20c20e")}else console.log("%cNullify is already open.","color: #20c20e");else alert("Please run Nullify before opening lessons. Reloading ..."),location.reload();
