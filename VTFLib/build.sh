#! /usr/bin/bash

#emcc --bind ./*.cpp
emcc -o out.js  --js-library lib.js squish.bc ./*.cpp -s EXPORTED_FUNCTIONS="['_fromData','_vlImageGetSize','_vlImageSaveLump']"
