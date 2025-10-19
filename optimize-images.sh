#!/bin/bash

# Image Optimization Script for Portfolio
# This script optimizes images for web display

echo "Starting image optimization..."

# Create optimized directory if it doesn't exist
mkdir -p assets/optimized

# Optimize images to 800px max dimension for web display
echo "Optimizing Travelmate.jpg..."
sips -Z 800 --out assets/optimized/Travelmate-optimized.jpg assets/Travelmate.jpg

echo "Optimizing 2.jpg..."
sips -Z 800 --out assets/optimized/2-optimized.jpg assets/2.jpg

# Create smaller versions for mobile (400px)
echo "Creating mobile versions..."
sips -Z 400 --out assets/optimized/Travelmate-mobile.jpg assets/Travelmate.jpg
sips -Z 400 --out assets/optimized/2-mobile.jpg assets/2.jpg

echo "Image optimization complete!"
echo "Optimized images saved to assets/optimized/"

# Show file sizes for comparison
echo ""
echo "File size comparison:"
echo "Original Travelmate.jpg: $(ls -lh assets/Travelmate.jpg | awk '{print $5}')"
echo "Optimized Travelmate.jpg: $(ls -lh assets/optimized/Travelmate-optimized.jpg | awk '{print $5}')"
echo "Original 2.jpg: $(ls -lh assets/2.jpg | awk '{print $5}')"
echo "Optimized 2.jpg: $(ls -lh assets/optimized/2-optimized.jpg | awk '{print $5}')"
