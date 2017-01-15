(function(me) {
	
	/*===================Set KeyHooks Here===================== */
	(function(x) {
		document.addEventListener('keyup', function(e) {
			// Key Hooking Here...
			switch(e.keyCode || e.which) {
			// Switch Case to handle our keys;
			case 49: // Key 1;
                break;
            case 50: // Key 2;
                break;
			case 51: // Key 3;
				break;
			case 52: // Key 4;
				break;
			case 53: // Key 5;
				break;
			case 54: // Key 6;
				break;
			case 48: // Key 0;
				break;
            default:
                return;
		}
		});
	})();

	/*================Scripts Update Function Here================= */
	(function Update() {
        // Automatic-Update Code here...
    setTimeout(Update, 100);})();
})(window);
