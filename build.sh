#!/bin/bash

make download_resources

OUTPUT_ZIP="Offline_AI_Chat.zip"

zip "$OUTPUT_ZIP" ./*.js ./*.css ./*.json ./*.html ./*.png ./*.ico resources/ resources/*

echo "Files have been zipped as $OUTPUT_ZIP"
