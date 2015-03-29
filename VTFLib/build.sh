#! /usr/bin/bash

browserify -o lib-bundle.js lib.js
emcc -O2 -o ../src/vtflib.js  --memory-init-file 0  --js-library lib-bundle.js squish.bc ./*.cpp -s EXPORTED_FUNCTIONS="['_fromData','_vlImageGetSize','_vlImageSaveLump']"

# make the result work with browserify

MATCH='var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function";var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";'

REPLACE='ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;if(typeof module!=="undefined"){module["exports"] = Module;}'

MATCH=$(sed -e 's/[]\/$*.^|[]/\\&/g' <<< $MATCH)
REPLACE=$(sed -e 's/[\/&]/\\&/g' <<< $REPLACE)

sed -i "s/$MATCH/$REPLACE/" ../src/vtflib.js

# we're not using websockets and browserify complains about it
sed -i 's/require..ws../null/' ../src/vtflib.js


# The header we want

#var ENVIRONMENT_IS_WEB = typeof window === 'object';
#var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
#var ENVIRONMENT_IS_NODE = (typeof process === 'object' && typeof require === 'function') && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
#var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
#
#if (typeof module !== 'undefined') {
#	module['exports'] = Module;
#}
