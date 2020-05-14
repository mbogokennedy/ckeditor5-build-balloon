/**
 * @license Copyright (c) 2020, CK-Amelia Kennedy Mbogo. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window, document, console */

import BalloonEditor from '../../build/ckeditor';

BalloonEditor.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
