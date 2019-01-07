/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

//Delete Icon 
import deleteIcon from '../src/delete.svg';
import upIcon from '../src/up.svg';
import downIcon from '../src/down.svg';

//Button UI
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';


class Delete extends Plugin {
    init() {
		const editor =this.editor;
		editor.ui.componentFactory.add('deleteItem', locale => {
			const view = new ButtonView (locale);
			view.set({
				label:'Delete Item',
				icon: deleteIcon ,
				tooltip: true
			});

			view.on('execute',() => {
				console.log("Delete button was clicked !");
			});
			return view ;
		});

    }
}
class Up extends Plugin {
    init() {
		const editor =this.editor;
		editor.ui.componentFactory.add('upItem', locale => {
			const view = new ButtonView (locale);
			view.set({
				label:'Move Up',
				icon: upIcon ,
				tooltip: true
			});

			view.on('execute',() => {
				console.log("Up button was clicked !");
			});
			return view ;
		});

    }
}
class Down extends Plugin {
    init() {
		const editor =this.editor;
		editor.ui.componentFactory.add('downItem', locale => {
			const view = new ButtonView (locale);
			view.set({
				label:'Move down',
				icon: downIcon ,
				tooltip: true
			});

			view.on('execute',() => {
				console.log("Down button was clicked !");
			});
			return view ;
		});

    }
}

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Delete,
	Up,
	Down
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'|',
			'deleteItem',
			'upItem',
			'downItem'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};