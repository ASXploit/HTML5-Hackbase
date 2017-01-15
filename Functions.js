/* This Javascript file is just here to have helpful scripts placed within in */

// Create Elements..
function appendElement(type, id, className, style) {
	var elem = document.createElement(type);
        if (id) {
            elem.id = id;
        }
        if (className) {
            elem.className = className;
        }
        if (style) {
            elem.style = style;
        }
        document.body.appendChild(elem);
}

// Toggle display of Elements..
function toggleDisplay(id) {
	var elem = document.getElementById(id);
	if (elem.style.display === '')     {elem.style.display = 'none';} else
	if (elem.style.display === 'none') {elem.style.display = '';}
}
