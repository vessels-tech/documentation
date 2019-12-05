#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}

dactyl_build -t all -c ${DIR}/dactyl-config.yml --pdf --leave_temp_files