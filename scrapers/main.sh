#!/bin/bash

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create sitemaps. This can take a lot of time.
# There are three options where the scraper gets the URLs from:
# 1. A remote sitemap.xml file
# 2. A local sitemap.xml file (manually created or via createSitemap.js)
# 3. A sitemap on a webpage on the website to be scraped

# Option 2: via createSitemap.js
# $ node "$SCRIPT_DIR/createSitemap.js" https://www.example.com --depth x
# depth recomended: 3
# node "$SCRIPT_DIR/createSitemap.js" https://www.gleif.org --depth 3

# Prepare logfile. This means start a new one.
node "$SCRIPT_DIR/prepareLogFiles.mjs"
echo "Preparing logfiles finished"

# Scrape the websites. This can take a lot of time.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished"

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished"