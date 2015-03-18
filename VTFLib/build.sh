#! /usr/bin/bash

#emcc --bind ./*.cpp
emcc -o out.js  --js-library lib.js ./*.cpp -s EXPORTED_FUNCTIONS="['_fromData']"
