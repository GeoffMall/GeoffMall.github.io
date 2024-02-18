#!/bin/bash

# Function to handle the SIGINT signal (Ctrl+C)
cleanup() {
    echo "Caught SIGINT signal. Sending SIGINT to subprocesses..."

    echo "templ: $PID1"
#    echo "tailwind css: $PID2"
    echo "air go: $PID3"

    # Send SIGINT to each subprocess
    kill -SIGINT "$PID1" "$PID3"

    # Optionally, wait for all subprocesses to exit
    wait "$PID1" "$PID3"
    echo "Subprocesses terminated gracefully."
    exit
}

# Set the trap to call cleanup function when SIGINT (Ctrl+C) is received
trap cleanup SIGINT

# Start your scripts in the background
templ generate --watch &
PID1=$!
echo "templ: $PID1"

#make dev_tailwind &
#PID2=$!
#echo "tailwind css: $PID2"

air -c .air.toml &
PID3=$!
echo "air go: $PID3"

# Wait for all background processes to finish
wait $PID1 $PID3
