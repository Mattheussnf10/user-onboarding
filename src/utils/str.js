
// transforma em letra minusculas
const ToLower = (str)=> {
	if(typeof str !== 'string') {
		return "";
	}

	return str.toLowerCase();
}

module.exposrts = { ToLower };