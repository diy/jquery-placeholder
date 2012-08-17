#!/bin/bash
out=jquery.placeholder.min.js
banner="/*! jquery.placeholder.js | https://github.com/diy/jquery-placeholder | Apache License (v2) */"

curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS \
        -d output_format=text \
        -d output_info=compiled_code \
		--data-urlencode "js_code@jquery.placeholder.js" \
        http://closure-compiler.appspot.com/compile \
        > $out

echo "$banner" | cat - $out > temp && mv temp $out