#!/bin/bash

if ! command -v feh &> /dev/null
then
    echo "feh could not be found"
    exit 1
fi

screen_folder="mobile.cy.js"
if [[ $1 == "--desktop" ]]; then
    screen_folder="desktop.cy.js"
fi

# Define the directories
dir1="cypress/snapshots/diff/cypress/e2e/${screen_folder}/"
dir2="cypress/snapshots/base/cypress/e2e/${screen_folder}/"
dir3="cypress/screenshots/${screen_folder}/cypress/e2e/${screen_folder}/"

# Loop through each file and open the corresponding images with feh
if [ -d $dir1 ]; then
    echo "diff folder exists"
    # Get the list of files in the first directory (assuming all directories have the same filenames)
    files=$(ls "$dir1")
    echo "found in diff folder: $files"
    for file in $files; do
        # Construct the full paths for each image
        img1="$dir1$file"
        img2="$dir2$file"
        img3="$dir3$file"

        # Check if the files exist in all directories
        if [[ -f "$img1" && -f "$img2" && -f "$img3" ]]; then
            # Use feh to display the images
            feh -F "$img1" "$img2" "$img3"
        fi

        read -p "update base image? y/[n]/q " UPDATE

        if [ $UPDATE == "y" ]; then
            cp -y $img3 $img2
        elif [ $UPDATE == "q" ]; then
            break
        fi
    done
else
    echo "no diff folder"
fi
