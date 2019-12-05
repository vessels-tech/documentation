#!/usr/bin/env bash

##
# _copy_images.sh
# 
# Copies all image assets to a common location for dactyl
##

# TODO: I'm not sure this is still needed

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DOCS_ROOT="${DIR}../"

mkdir -p ${DIR}/images

# cp ${DOCS_ROOT}/Wiki/*.png ./images
# cp ${DOCS_ROOT}/Wiki/*.PNG ./images

# #cp docs/DFSP/*.png ./images
# #cp docs/DFSP/*.png ./images
# cp docs/DFSP/PendingTransactions/*.png ./images
# cp docs/DFSP/BulkPayment/src/*.png ./images
# #cp docs/DFSP/USSD/*.PNG ./images
# #cp docs/DFSP/USSD/*.png ./images
# #cp docs/DFSP/USSD/*.JPG ./images
# cp "docs/DFSP/Pending Transactions Api/diagrams"/*.png ./images
# #cp docs/DFSP/ManageAcccoutHolders/*.jpg ./images
# #cp "docs/DFSP/GSMA MM & L1P DFSP API"/*.jpg ./images
# cp docs/CentralDirectory/*.png ./images
# cp docs/CentralLedger/*.png ./images
# cp central-ledger/images/*.png ./images 
# cp docs/CentralRules/*.png ./images
# cp "docs/Interop Services and Mule"/*.png ./images
# cp "docs/Interop Services and Mule"/*.jpg ./images
# cp docs/test/ilp-integration/media/*.jpg ./images
# cp docs/ILP/*.png ./images
# cp docs/ILP/*.gif ./images
# cp docs/ELK/images/*.png ./images
