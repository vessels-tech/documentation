#!/usr/bin/env bash

##
# searches through `./docs` for plantuml sources
# and exports them using `node-plantuml`
##

for i in $(find ./docs -name '*.p*uml'); do
  echo "found diagram: $i"
  # make the destination directory if not exists
  # TODO: maybe we want to export in place?
  # mkdir -p $(dirname $i | sed 's#docs#docs/out#g')
  puml generate -s $i -o $(echo $i | sed 's/puml/svg/g' | sed 's/plantuml/svg/g' ) -i $(echo $i | sed -e 's;[^/]*$;;');
done
