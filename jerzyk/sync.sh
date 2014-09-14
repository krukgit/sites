#!/bin/bash
s3cmd -c ~/.s3cfg-maciejkruk sync build/ s3://krukworld.com/jerzyk/
