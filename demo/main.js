(function(){
	'use strict';

	var sideHref;
	var sectionComp;

	window.onload = function() {
		sideHref = document.querySelectorAll('.nav > li > a');
		[].forEach.call(sideHref, function(a){
			a.onclick = showCompSection;
		});

		sectionComp = document.querySelectorAll('#main-section > section');
	};

	function showCompSection(event) {
		var a = event.target;

		[].forEach.call(sideHref, function(a){
			a.parentNode.className = '';
			a.className = '';
		});

		a.parentNode.className = 'active';
		a.className = 'active';


		var href = a.href.split('#').pop();

		[].forEach.call(sectionComp, function(section){
			section.style.display = 'none';
			if(section.id === href) {
				section.style.display = 'block';
			}
		});
	}
})();