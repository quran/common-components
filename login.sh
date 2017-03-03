#!/bin/bash
set -o nounset
set -o errexit

echo "CIRCLE-CI NPM LOGIN"

npm login <<!
$NPM_USERNAME
$NPM_PASSWORD
$NPM_EMAIL
!
