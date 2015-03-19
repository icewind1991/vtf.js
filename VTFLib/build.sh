#! /usr/bin/bash

#emcc --bind ./*.cpp
emcc -o out.js  --js-library lib.js ../squish/*.cpp ./*.cpp -s EXPORTED_FUNCTIONS="['_fromData']"
