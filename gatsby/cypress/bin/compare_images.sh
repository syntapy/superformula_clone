#!/bin/bash

# Define the directories
dir1="cypress/screenshots/mobile.cy.js/"
dir2="cypress/snapshots/base/"
dir3="cypress/snapshots/diff/"

# Get the list of files in the first directory (assuming all directories have the same filenames)
files=$(ls "$dir1")

# Loop through each file and open the corresponding images with feh
for file in $files; do
    # Construct the full paths for each image
    img1="$dir1$file"
    img2="$dir2$file"
    img3="$dir3$file"

    ls $img1
    #echo "$image1"
    
    # Check if the files exist in all directories
    #if [[ -f "$img1" && -f "$img2" && -f "$img3" ]]; then
    #    # Use feh to display the images
    #    feh "$img1" "$img2" "$img3"
    #else
    #    echo "One of the files does not exist: $file"
    #fi
done
