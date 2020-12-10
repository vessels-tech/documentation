(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{586:function(e,a,t){"use strict";t.r(a);var n=t(43),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sdk-scheme-adapter-and-local-k8s-cluster-testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-scheme-adapter-and-local-k8s-cluster-testing"}},[e._v("#")]),e._v(" SDK Scheme Adapter and Local K8S cluster testing")]),e._v(" "),t("p",[e._v("A detailed documentation for dfsps who want to test the mojaloop cluster deployment with scheme adapter and a mock backend service.")]),e._v(" "),t("p",[t("img",{attrs:{src:"scheme-adapter-and-local-k8s-overview.png",alt:"Overview"}})]),e._v(" "),t("h2",{attrs:{id:"prerequisite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),t("ul",[t("li",[e._v("A working mojaloop k8s cluster (Local / Cloud deployment)")]),e._v(" "),t("li",[e._v("DFSP mock backend service")]),e._v(" "),t("li",[e._v("sdk-scheme-adapter > 8.6.0")])]),e._v(" "),t("h2",{attrs:{id:"configuration-starting-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-starting-services"}},[e._v("#")]),e._v(" Configuration & Starting services")]),e._v(" "),t("h3",{attrs:{id:"mojaloop-local-k8s-cluster-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-local-k8s-cluster-deployment"}},[e._v("#")]),e._v(" Mojaloop Local K8S cluster deployment")]),e._v(" "),t("p",[e._v("Please follow the below link to deploy your own cluster on local system.\nhttps://mojaloop.io/documentation/deployment-guide/")]),e._v(" "),t("p",[e._v("A Linux based operating system is recommended and at least 16GB RAM and 4 core processor is required.")]),e._v(" "),t("p",[e._v("After installation please complete the "),t("code",[e._v("OSS-New-Deployment-FSP-Setup.postman_collection")]),e._v(" collection available at https://github.com/mojaloop/postman")]),e._v(" "),t("p",[e._v('Then make sure the oracles & endpoints are configured correctly and that the "Golden Path Collection" can be run successfully.')]),e._v(" "),t("h3",{attrs:{id:"dfsp-mock-backend-service-sdk-scheme-adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dfsp-mock-backend-service-sdk-scheme-adapter"}},[e._v("#")]),e._v(" DFSP Mock Backend service & SDK Scheme adapter")]),e._v(" "),t("p",[e._v("The SDK scheme adapter version should be greater than 8.6.0\nThe next step starts the scheme adapter from docker-compose file automatically.")]),e._v(" "),t("p",[e._v("Please download the following repository\nhttps://github.com/mojaloop/sdk-mock-dfsp-backend")]),e._v(" "),t("p",[e._v("Edit the docker-compose.yml file and verify the following lines.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('version: \'3\'\nservices:\n  redis2:\n    image: "redis:5.0.4-alpine"\n    container_name: redis2\n  backend:\n    image: "mojaloop/sdk-mock-dfsp-backend"\n    env_file: ./backend.env\n    container_name: dfsp_mock_backend2\n    ports:\n      - "23000:3000"\n    depends_on:\n      - scheme-adapter2\n\n  scheme-adapter2:\n    image: "mojaloop/sdk-scheme-adapter:latest"\n    env_file: ./scheme-adapter.env\n    container_name: sa_sim2\n    ports:\n      - "4000:4000"\n    depends_on:\n      - redis2\n')])])]),t("p",[e._v("Edit the backend.env file and change the OUTBOUND_ENDPOINT value")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("OUTBOUND_ENDPOINT=http://sa_sim2:4001\n")])])]),t("p",[e._v("Edit scheme-adapter.env and change the following lines\nPlease replace the endpoint values with the appropriate hostnames provided in /etc/hosts file.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DFSP_ID=safsp\nCACHE_HOST=redis2\nALS_ENDPOINT=account-lookup-service.local\nQUOTES_ENDPOINT=quoting-service.local\nTRANSFERS_ENDPOINT=ml-api-adapter.local\nBACKEND_ENDPOINT=dfsp_mock_backend2:3000\nAUTO_ACCEPT_PARTY=true\nAUTO_ACCEPT_QUOTES=true\nVALIDATE_INBOUND_JWS=false\nVALIDATE_INBOUND_PUT_PARTIES_JWS=false\nJWS_SIGN=true\nJWS_SIGN_PUT_PARTIES=true\n")])])]),t("h3",{attrs:{id:"name-resolution-configuration-mac-only"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name-resolution-configuration-mac-only"}},[e._v("#")]),e._v(" Name resolution configuration - Mac ONLY")]),e._v(" "),t("p",[e._v("Point the following hostnames to your local machine IP by adding the below line in /etc/hosts file")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("192.168.5.101       ml-api-adapter.local account-lookup-service.local central-ledger.local central-settlement.local account-lookup-service-admin.local quoting-service.local moja-simulator.local central-ledger central-settlement ml-api-adapter account-lookup-service account-lookup-service-admin quoting-service simulator host.docker.internal moja-account-lookup-mysql\n")])])]),t("p",[e._v("Make sure to change 192.168.5.101 to your real external IP.")]),e._v(" "),t("h3",{attrs:{id:"name-resolution-configuration-linux-only"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name-resolution-configuration-linux-only"}},[e._v("#")]),e._v(" Name resolution configuration - Linux ONLY")]),e._v(" "),t("p",[e._v("Add extra_hosts configuration to scheme-adapter2 config in the docker-compose.yml file, so that the scheme-adapter2 container can resolve dns of account-lookup-service.local, quoting-service.local and ml-api-adapter.local. For example the config could be:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  scheme-adapter2:\n    image: "mojaloop/sdk-scheme-adapter:latest"\n    env_file: ./scheme-adapter.env\n    container_name: sa_sim2\n    ports:\n      - "4000:4000"\n    depends_on:\n      - redis2\n    extra_hosts:\n      - "account-lookup-service.local:172.17.0.1"\n      - "quoting-service.local:172.17.0.1"\n      - "ml-api-adapter.local:172.17.0.1"\n')])])]),t("p",[e._v("The 172.17.0.1 is a default docker0 network interface on linux, however please make sure it's valid in your configuration and change it if needed.")]),e._v(" "),t("h3",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" Start")]),e._v(" "),t("p",[e._v("Start the backend and scheme adapter using the following command.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd src\ndocker-compose up -d\n")])])]),t("h2",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("h3",{attrs:{id:"configure-new-fsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-new-fsp"}},[e._v("#")]),e._v(" Configure new FSP")]),e._v(" "),t("p",[e._v("Download the following files:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"assets/postman_files/Mojaloop-Local.postman_environment_modified.json"}},[e._v("Mojaloop-Local.postman_environment_modified.json")]),e._v(" - modified environment variables that point to your local setup")]),e._v(" "),t("li",[t("a",{attrs:{href:"assets/postman_files/OSS-Custom-FSP-Onboaring-SchemeAdapter-Setup.postman_collection.json"}},[e._v("OSS-Custom-FSP-Onboaring-SchemeAdapter-Setup.postman_collection.json")]),e._v(" - steps that will setup new FSP")])]),e._v(" "),t("p",[e._v("The SCHEME_ADAPTER_ENDPOINT in the environment file should point to your local scheme-adapter deployment. For mac this is configured already to be http://host.docker.internal:4000. If you're running on Linux, please edit the environment file, so that SCHEME_ADAPTER_ENDPOINT points to your docker0 interface (usually 172.17.0.1 - see remarks in previous step).")]),e._v(" "),t("p",[e._v('In postman, select the environment file and run the custom collection in the postman to provision a new FSP called "safsp". The endpoints for safsp will be set to the URL of the scheme adapter which is configured in environment file.')]),e._v(" "),t("h3",{attrs:{id:"add-the-target-msisdn-to-payee-simulator-which-is-running-inside-the-k8s-run-the-following-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-target-msisdn-to-payee-simulator-which-is-running-inside-the-k8s-run-the-following-commands"}},[e._v("#")]),e._v(" Add the target MSISDN to payee simulator which is running inside the K8S. Run the following commands")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -X POST \\\n  http://moja-simulator.local/payeefsp/parties/MSISDN/27713803912 \\\n  -H \'Accept: */*\' \\\n  -H \'Accept-Encoding: gzip, deflate\' \\\n  -H \'Cache-Control: no-cache\' \\\n  -H \'Connection: keep-alive\' \\\n  -H \'Content-Length: 406\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Host: moja-simulator.local\' \\\n  -H \'User-Agent: PostmanRuntime/7.20.1\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n    "party": {\n        "partyIdInfo": {\n            "partyIdType": "MSISDN",\n            "partyIdentifier": "27713803912",\n            "fspId": "payeefsp"\n        },\n        "name": "Siabelo Maroka",\n        "personalInfo": {\n            "complexName": {\n                "firstName": "Siabelo",\n                "lastName": "Maroka"\n            },\n            "dateOfBirth": "1974-01-01"\n        }\n    }\n}\'\n\ncurl -X POST \\\n  http://account-lookup-service.local/participants/MSISDN/27713803912 \\\n  -H \'Accept: application/vnd.interoperability.participants+json;version=1\' \\\n  -H \'Connection: keep-alive\' \\\n  -H \'Content-Length: 50\' \\\n  -H \'Content-Type: application/vnd.interoperability.participants+json;version=1.0\' \\\n  -H \'Date: Fri, 21 Dec 2018 12:17:01 GMT\' \\\n  -H \'FSPIOP-Source: payeefsp\' \\\n  -H \'Host: account-lookup-service.local\' \\\n  -H \'User-Agent: PostmanRuntime/7.11.0\' \\\n  -H \'accept-encoding: gzip, deflate\' \\\n  -H \'cache-control: no-cache,no-cache\' \\\n  -d \'{\n    "fspId": "payeefsp",\n    "currency": "USD"\n}\'\n')])])]),t("h3",{attrs:{id:"try-to-send-money"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#try-to-send-money"}},[e._v("#")]),e._v(" Try to send money")]),e._v(" "),t("p",[e._v('Try to send funds from "safsp" (Mock DFSP) to a MSISDN which is in "payeedfsp" (Simulator in K8S) through scheme adapter.\nRun the following curl command to issue command to Mock DFSP service.')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -X POST \\\n  http://localhost:23000/send \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "from": {\n        "displayName": "John Doe",\n        "idType": "MSISDN",\n        "idValue": "123456789"\n    },\n    "to": {\n        "idType": "MSISDN",\n        "idValue": "27713803912"\n    },\n    "amountType": "SEND",\n    "currency": "USD",\n    "amount": "100",\n    "transactionType": "TRANSFER",\n    "note": "testpayment",\n    "homeTransactionId": "123ABC"\n}\'\n')])])]),t("p",[e._v("You should get a response with COMPLETED currentState.")])])}),[],!1,null,null,null);a.default=o.exports}}]);