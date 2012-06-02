# jQuery "placeholder" Attribute Polyfill

A basic jQuery plugin that reads the [**"placeholder"** attribute](http://www.w3schools.com/html5/att_input_placeholder.asp) (HTML5) and renders the placeholder text as an overlay (if not natively supported). Unlike most other plugins, this works by adding a properly-positioned `<span>` on top of the input element rather than setting its value. This keeps form serialization & validation from breaking. 

Check out the [demos](http://diy.github.com/jquery-placeholder/)!

## Usage

```javascript
$('input,textarea').placeholder();
```

### Options

<table>
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td valign="top">force</td>
		<td valign="top"><code>bool</code></td>
		<td valign="top"><code>false</code></td>
		<td valign="top">If <code>true</code>, artificial placeholder elements will be added even if the browser natively supports them.</td>
	</tr>
</table>

### CSS Styling

```css
.placeholder { color: #d0d0d0; }
::-webkit-input-placeholder { color: #d0d0d0; }
:-moz-placeholder { color: #d0d0d0; }
```

## License

Copyright (c) 2010 DIY Co

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.