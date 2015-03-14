#! /usr/bin/bash

#emcc --bind ./*.cpp
emcc -o out.js ./*.cpp -s EXPORTED_FUNCTIONS="['_fromData']"
