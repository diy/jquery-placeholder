# jQuery "placeholder" Attribute Polyfill

A basic jQuery plugin that reads the [**"placeholder"** attribute](http://www.w3schools.com/html5/att_input_placeholder.asp) (HTML5) and renders the placeholder text as an overlay (if not natively supported). Unlike most other plugins, this works by adding a properly-positioned `<span>` on top of the input element rather than setting its value. This keeps form serialization & validation from breaking. 

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