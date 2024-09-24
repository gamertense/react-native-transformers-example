#!/bin/bash

# Define AVD name and device type
AVD_NAME="MyEmulator"
DEVICE="pixel_3"
IMAGE_TYPE="arm64-v8a"
IMAGE_PATH="system-images;android-30;default;arm64-v8a"

# Check for optional parameter
if [ "$1" == "x86_64" ]; then
  IMAGE_TYPE="x86_64"
  IMAGE_PATH="system-images;android-30;google_apis;x86_64"
fi

# Create AVD
echo "Creating AVD with $IMAGE_TYPE image..."
avdmanager create avd -n $AVD_NAME -k "$IMAGE_PATH" -d $DEVICE

# Configure AVD with max CPU and 4 GB RAM
echo "Configuring AVD..."
echo "hw.cpu.ncore=4" >> ~/.android/avd/$AVD_NAME.avd/config.ini
echo "hw.ramSize=4096" >> ~/.android/avd/$AVD_NAME.avd/config.ini

echo "AVD $AVD_NAME created and configured with max CPU and 4 GB RAM."

# Run the created emulator
echo "Starting the emulator..."
emulator -avd $AVD_NAME