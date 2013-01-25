/**
 * placeholder - HTML5 input placeholder polyfill
 * Copyright (c) 2012 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function($) {

	var NATIVE_SUPPORT = ('placeholder' in document.createElement('input'));
	var CSS_PROPERTIES = [
		'-moz-box-sizing', '-webkit-box-sizing', 'box-sizing',
		'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
		'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
		'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
		'line-height', 'font-size', 'font-family', 'width', 'height',
		'top', 'left', 'right', 'bottom'
	];

	var setupPlaceholder = function(input, options) {
		var i, evt, text, styles, zIndex, marginTop, dy, attrNode;
		var $input = $(input), $placeholder;

		try {
			attrNode = $input[0].getAttributeNode('placeholder');
			if (!attrNode) return;
			text = $input[0].getAttribute('placeholder');
			if (!text || !text.length) return;
			$input[0].setAttribute('placeholder', '');
			$input.data('placeholder', text);
		} catch (e) {
			return;
		}

		// enumerate textbox styles for mimicking
		styles = {};
		for (i = 0; i < CSS_PROPERTIES.length; i++) {
			styles[CSS_PROPERTIES[i]] = $input.css(CSS_PROPERTIES[i]);
		}
		zIndex = parseInt($input.css('z-index'), 10);
		if (isNaN(zIndex) || !zIndex) zIndex = 1;

		// create the placeholder
		$placeholder = $('<span>').addClass('placeholder').html(text);
		$placeholder.css(styles);
		$placeholder.css({
			'cursor': $input.css('cursor') || 'text',
			'display': 'block',
			'position': 'absolute',
			'overflow': 'hidden',
			'z-index': zIndex + 1,
			'background': 'none',
			'border-top-style': 'solid',
			'border-right-style': 'solid',
			'border-bottom-style': 'solid',
			'border-left-style': 'solid',
			'border-top-color': 'transparent',
			'border-right-color': 'transparent',
			'border-bottom-color': 'transparent',
			'border-left-color': 'transparent'
		});
		$placeholder.insertBefore($input);

		// compensate for y difference caused by absolute / relative difference (line-height factor)
		dy = $input.offset().top - $placeholder.offset().top;
		marginTop = parseInt($placeholder.css('margin-top'));
		if (isNaN(marginTop)) marginTop = 0;
		$placeholder.css('margin-top', marginTop + dy);

		// event handlers + add to document
		$placeholder.on('mousedown', function() {
			if (!$input.is(':enabled')) return;
			window.setTimeout(function(){
				$input.trigger('focus');
			}, 0);
		});

		$input.on('focus.placeholder', function() {
			$placeholder.hide();
		});
		$input.on('blur.placeholder', function() {
			$placeholder.toggle(!$.trim($input.val()).length);
		});

		$input[0].onpropertychange = function() {
			if (event.propertyName === 'value') {
				$input.trigger('focus.placeholder');
			}
		};

		$input.trigger('blur.placeholder');
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	$.fn.placeholder = function(options) {
		var $this = this;
		options = options || {};

		if (NATIVE_SUPPORT && !options.force) {
			return this;
		}

		window.setTimeout(function() {
			$this.each(function() {
				var tagName = this.tagName.toLowerCase();
				if (tagName === 'input' || tagName === 'textarea') {
					setupPlaceholder(this, options);
				}
			});
		}, 0);

		return this;
	};

})(jQuery);
