/*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */
var Avgrund = (function(){

	var container = document.documentElement,
		popup = document.querySelector( '.avgrund-popup-animate' ),
		cover = document.querySelector( '.avgrund-cover' ),
		currentState = null;

	container.classList.add( 'avgrund-ready' );

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {

		if( event.keyCode === 27 ) {
			deactivate();
		}

	}

	// Deactivate on click outside
	function onDocumentClick( event ) {

		if( event.target === cover ) {
			deactivate();
		}

	}

	function activate( state ) {

		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );
		document.addEventListener( 'touchstart', onDocumentClick, false );

		popup.classList.remove( currentState );
		popup.classList.add( 'no-transition' );
		if(state)
			popup.classList.add( state );

		setTimeout( function() {
			popup.classList.remove( 'no-transition' );
			container.classList.add( 'avgrund-active' );
		}, 0 );

		currentState = state;

	}

	function deactivate() {

		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );
		document.removeEventListener( 'touchstart', onDocumentClick, false );

		container.classList.remove( 'avgrund-active' );
		popup.classList.remove( 'avgrund-popup-animate' );

	}

	function disableBlur() {

		document.documentElement.classList.add( 'no-blur' );

	}

	function show( selector ) {

		popup = document.querySelector( selector );
		popup.classList.add( 'avgrund-popup-animate' );
		activate();
		return this;

	}

	function hide() {

		deactivate();

	}

	return {

		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur,
		show: show,
		hide: hide

	}

})();
