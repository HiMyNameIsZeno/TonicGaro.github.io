const oldEval = eval; // allows to fallback to normal eval when done
eval = function() {} // disables eval globally
html5Iframe.contentWindow.eval = function() {} // disables eval on lesson iframe

debug(lessonBridge.start), lessonBridge.start(); // makes lessonBridge.start() vulnerable and submissive

window.p1 = q6C; // unlocks a ton of iready dev functions

window.p2 = function() { return Q2(new m$()); } // allows componentPause to be used globally

eval = oldEval; // allows eval to fallback to original globally
html5Iframe.contentWindow.eval = oldEval; // allows eval to fallback to original globally on lesson iframe

'\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x53\x74\x61\x72\x74' // componentStart in iready's hex format
