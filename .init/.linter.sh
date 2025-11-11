#!/bin/bash
cd /home/kavia/workspace/code-generation/hello-tv-interface-46758-46767/hello_tv_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

