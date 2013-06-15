/**
 * @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Mozilla Public License v. 2.0 for more details.

 * You should have received a copy of the Mozilla Public License v. 2.0
 * along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
 */
import lib.Enum as Enum;

exports.transitionMethod = Enum(
	'NONE',
	'SLIDE',
	'SCALE',
	'FADE',
	'ROTATE'
);

exports.DIALOG = {
	BACKGROUND: 'resources/images/ui/background.png',
	CONTENT_BORDER: 'resources/images/ui/contentBorder.png',
	SHOW_TRANSITION_METHOD: exports.transitionMethod.SLIDE,
	SHOW_TRANSITION_TIME: 300,
	HIDE_TRANSITION_METHOD: exports.transitionMethod.SLIDE,
	HIDE_TRANSITION_TIME: 300,
	BACK: {
		MARGIN_LEFT: 2,
		MARGIN_TOP: 4,
		WIDTH: 55,
		HEIGHT: 55,
		STYLE: 'BLUE',
		IMAGE: {
			MARGIN_LEFT: 9,
			MARGIN_TOP: 7,
			WIDTH: 35,
			HEIGHT: 35,
			URL: 'resources/images/ui/buttonBack.png'
		}
	},
	CLOSE: {
		MARGIN_RIGHT: 2,
		MARGIN_TOP: 4,
		WIDTH: 55,
		HEIGHT: 55,
		STYLE: 'RED',
		IMAGE: {
			MARGIN_LEFT: 9,
			MARGIN_TOP: 7,
			WIDTH: 35,
			HEIGHT: 35,
			URL: 'resources/images/ui/buttonClose.png'
		}
	},
	BUTTON: {
		HEIGHT: 80,
		MARGIN_BOTTOM: 30,
		MARGIN_RIGHT: 10
	},
	CONTENT: {
		BACKGROUND: 'resources/images/ui/item.png',
		FONT_FAMILY: 'BPReplay',
		FONT_SIZE: 36,
		PADDING: [0, 30, 0, 30],
		MARGIN_LEFT: 35,
		MARGIN_RIGHT: 35,
		MARGIN_TOP: 110,
		MARGIN_BOTTOM: 125
	},
	TUTORIAL: {
		MARGIN_LEFT: 0,
		MARGIN_RIGHT: 4
	}
};

exports.TUTORIAL = {
	BACKGROUND_COLOR: 'rgb(255, 255, 255)'
};

exports.MENU_TEXT = {
	FONT_FAMILY: 'BPReplay',
	FONT_SIZE: 36,
	PADDING: [0, 0, 0, 0],
	COLOR: '#000000',
	STROKE_COLOR: '#000000',
	STROKE_WIDTH: 0,
	ALIGN: 'center'
};

exports.MENU_ITEM = {
	BACKGROUND: 'resources/images/ui/buttonItem.png',
	FONT_FAMILY: 'BPReplay',
	FONT_SIZE: 36,
	PADDING: [0, 0, 3, 0],
	MARGIN_LEFT: 30,
	MARGIN_RIGHT: 30,
	MARGIN_BOTTOM: -4,
	HEIGHT: 80,
	COLOR: '#000000',
	STROKE_COLOR: '#000000',
	STROKE_WIDTH: 3
};

exports.TITLE = {
	BACKGROUND: 'resources/images/ui/title.png',
	FONT_FAMILY: 'BPReplay',
	FONT_SIZE: 36,
	COLOR: 'rgb(250, 227, 190)',
	STROKE_COLOR: '#000000',
	STROKE_WIDTH: 1
};

exports.BUTTONS = {
	BLUE: {
		UP: 'resources/images/ui/button1Up.png',
		DOWN: 'resources/images/ui/button1Down.png',
		FONT_FAMILY: 'BPReplay',
		FONT_SIZE: 36,
		COLOR: 'rgb(255, 255, 255)',
		STROKE_COLOR: 'rgb(73, 154, 203)',
		STROKE_WIDTH: 6
	},
	GREEN: {
		UP: 'resources/images/ui/button2Up.png',
		DOWN: 'resources/images/ui/button2Down.png',
		FONT_FAMILY: 'BPReplay',
		FONT_SIZE: 36,
		COLOR: 'rgb(255, 255, 255)',
		STROKE_COLOR: 'rgb(15, 111, 55)',
		STROKE_WIDTH: 6
	},
	RED: {
		UP: 'resources/images/ui/button3Up.png',
		DOWN: 'resources/images/ui/button3Down.png',
		FONT_FAMILY: 'BPReplay',
		FONT_SIZE: 36,
		COLOR: 'rgb(255, 255, 255)',
		STROKE_COLOR: 'rgb(111, 15, 55)',
		STROKE_WIDTH: 6
	}
};