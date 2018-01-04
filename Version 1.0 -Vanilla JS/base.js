/* Simple Userscript Base;
 * Created by Xploit ~> @GuidedHacking
 * =====================
 * Features~
 * - Self Executing Update Function
 * - Self Executing Keyhooking
 * =====================
 * Yes i know "Only Two Features?"
 * If you followed my tutorial you
 * Would know how to make this and
 * Exactly how its working..
 * Still cleaner code than most others..
 */
(function(me) {
(function() {
    document.addEventListener('keyup', function(e) {
        switch(e.keyCode || e.which) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            default:
                return;
        } // end switch;
    }); // end event;
})(); // end keyHook;
(function Update() {
    console.log('Hello');
setTimeout(Update, 100);
})(); // end update;
})(window); // end;
