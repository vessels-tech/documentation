(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{463:function(e,t,a){"use strict";a.r(t);var o=a(43),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mojaloop-versioning-a-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-versioning-a-proposal"}},[e._v("#")]),e._v(" Mojaloop Versioning, A Proposal")]),e._v(" "),a("p",[a("em",[e._v("Note: This document is a living draft of a proposal for versioning within Mojaloop. Once the proposal is ready, it will be submitted to the CCB for approval.")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The aim is to produce a proposal that keeps the versioning Scheme simple to use and clear regarding compatibility issues. However, it needs to include all the details needed for a Mojaloop ecosystem as well.")]),e._v(" "),a("p",[e._v("Goal:\nPropose a standard for a new 'Mojaloop Version', which embodies:")]),e._v(" "),a("ol",[a("li",[e._v("Helm: Individual Service Versions, Monitoring Component Versions")]),e._v(" "),a("li",[e._v("API Versions: FSPIOP API, Hub Operations / Admin API, Settlement API")]),e._v(" "),a("li",[e._v("Internal Schema Versions: Database Schema and Internal Messaging Versions")])]),e._v(" "),a("h2",{attrs:{id:"versioning-strategies-background-literature-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning-strategies-background-literature-review"}},[e._v("#")]),e._v(" Versioning Strategies/Background (Literature Review)")]),e._v(" "),a("p",[e._v("How do current systems handle versioning? Give a brief overview of the current space.")]),e._v(" "),a("ul",[a("li",[e._v("Most best practices follow semantic versioning for APIs, this will be covered more in "),a("a",{attrs:{href:"https://github.com/mojaloop/project/issues/1198",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1198"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"demonstrates-zero-downtime-deployment-approaches-with-kubernetes-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrates-zero-downtime-deployment-approaches-with-kubernetes-5"}},[e._v("#")]),e._v(" Demonstrates zero-downtime deployment approaches with Kubernetes [5]")]),e._v(" "),a("p",[e._v("Key observations:")]),e._v(" "),a("ul",[a("li",[e._v("in order to support rollbacks, the services must be both forward and backwards compatible.\nconsecutive app versions must be schema compatible")]),e._v(" "),a("li",[e._v("'Never deploy any breaking schema changes', separate into multiple deployments instead")])]),e._v(" "),a("p",[e._v("For example, start with a PERSON table:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PK  ID\n    NAME\n    ADDRESS_LINE_1\n    ADDRESS_LINE_2\n    ZIPCODE\n    COUNTRY\n")])])]),a("p",[e._v("And we want to break this down (normalize) into 2 tables, PERSON and ADDRESS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#person\nPK  ID\n    NAME\n\n#address\nPK  ID\nFK  PERSON_ID\n    ADDRESS_LINE_1\n    ADDRESS_LINE_2\n    ZIPCODE\n    COUNTRY\n")])])]),a("p",[e._v("If this change were made in one migration, 2 different versions of our application won't be compatible. Instead, the schema changes must be broken down:")]),e._v(" "),a("ol",[a("li",[e._v("Create ADDRESS table\n"),a("ul",[a("li",[e._v("App use the PERSON table data as previously")]),e._v(" "),a("li",[e._v("Trigger a copy of data to the ADDRESS table")])])]),e._v(" "),a("li",[e._v("The ADDRESS now becomes the 'source of truth'\n"),a("ul",[a("li",[e._v("App now uses the ADDRESS table data")]),e._v(" "),a("li",[e._v("Trigger a copy of new added to address to the PERSON table")])])]),e._v(" "),a("li",[e._v("Stop copying data")]),e._v(" "),a("li",[e._v("Remove extra columns from PERSON table")])]),e._v(" "),a("p",[e._v("This means for any one change of the database schema, multiple application versions will need to be created, and multiple deployments must be made in succession for this change to be made.")]),e._v(" "),a("ul",[a("li",[e._v("[5] also notes how simple Kubernetes makes deploying such a change\n* rolling upgrade deployments\n* Tip: make sure your health endpoint waits for the migrations to finish!")]),e._v(" "),a("li",[e._v("Q: so how do we make big changes that touch both the database schema and the API?\n* this seems really hard, and would need a lot of coordination\n* If we don't design it correctly, it could mean that a single schema change could require all DFSPs to be on board\n* This is why I think the API version and Service version should be unrelated. We should be able to\ndeploy a new version of a service (which runs a migration), and supports an old API version")])]),e._v(" "),a("h3",{attrs:{id:"using-a-schema-registry-for-kafka-messages-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-schema-registry-for-kafka-messages-6"}},[e._v("#")]),e._v(" Using a schema registry for Kafka Messages [6]")]),e._v(" "),a("ul",[a("li",[e._v("[6] suggests some approaches, such as using a schema registry for kafka messages, such as "),a("a",{attrs:{href:"https://docs.confluent.io/current/schema-registry/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Arvo"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("This adds a certain level of 'strictness' to the messages we produce, and will help enforce versioning")]),e._v(" "),a("li",[e._v("Adds a separate 'schema registry' component, which ensures messages conform to a given schema. This doesn't really\nhelp enforce versioning, and leaves the work up to us still, but does give more guarantees about the message formats.")])]),e._v(" "),a("h3",{attrs:{id:"backwards-and-forwards-compatibility-3-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-and-forwards-compatibility-3-4"}},[e._v("#")]),e._v(" Backwards and Forwards Compatibility [3], [4]")]),e._v(" "),a("ul",[a("li",[e._v('"The Robustness principle states that you should be “liberal in what you accept and conservative in what you send\n”. In terms of APIs this implies a certain tolerance in consuming services." [3]')]),e._v(" "),a("li",[e._v("Backwards Compatibility vs Backwards Incompatibility [4]:\n"),a("ul",[a("li",[e._v("Generally, additions are considered backwards compatible")]),e._v(" "),a("li",[e._v("Removing or changing names is backwards incompatible")]),e._v(" "),a("li",[e._v("It's more something to assess on a case-by-case basis, but "),a("a",{attrs:{href:"https://cloud.google.com/apis/design/compatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google's API Design Doc"),a("OutboundLink")],1),e._v(" helps lay out the cases.")])])])]),e._v(" "),a("h2",{attrs:{id:"mojaloop-ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-ecosystem"}},[e._v("#")]),e._v(" Mojaloop Ecosystem")]),e._v(" "),a("p",[e._v("When discussing versioning we need to be clear that we are versioning interfaces for various parties.")]),e._v(" "),a("h1",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),a("p",[e._v("The following section will outline the versioning proposal.")]),e._v(" "),a("h2",{attrs:{id:"a-mojaloop-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-mojaloop-version"}},[e._v("#")]),e._v(" A “Mojaloop Version”")]),e._v(" "),a("p",[e._v("A Mojaloop Version "),a("strong",[e._v("x.y")]),e._v(".z can be defined that can encompass the versions of all the three APIs included (detailed below).\nIn the version "),a("strong",[e._v("x.y")]),e._v(".z, ‘x’ indicates the Major version and ‘y’ a minor version, similar to the Mojaloop FSPIOP API versioning standards; ‘z’ represents the ‘hotfix’ version or a version released with the same major, minor version x.y but to keep things simple, there is a need to bundle all the components included in the Mojaloop ecosystem indicating what all items are included there.")]),e._v(" "),a("p",[e._v("In effect we may say Mojaloop version "),a("strong",[e._v("x.y")]),e._v(" includes")]),e._v(" "),a("ol",[a("li",[e._v("Mojaloop FSPIOP API\n"),a("ul",[a("li",[e._v("Maintained by the CCB (Change Control Board)")]),e._v(" "),a("li",[e._v("Uses x.y format")]),e._v(" "),a("li",[e._v("Currently version v1.0, v1.1 and v2.0 are in the pipeline")])])]),e._v(" "),a("li",[e._v("Settlement API\n"),a("ul",[a("li",[e._v("Maintained by the CCB")]),e._v(" "),a("li",[e._v("To use x.y format")]),e._v(" "),a("li",[e._v("Currently version v1.1 and v2.0 is in the pipeline")])])]),e._v(" "),a("li",[e._v("Admin / Operations API\n"),a("ul",[a("li",[e._v("Maintained by the CCB")]),e._v(" "),a("li",[e._v("To use x.y format")]),e._v(" "),a("li",[e._v("Can use version v1.0")])])]),e._v(" "),a("li",[e._v("Helm\n"),a("ul",[a("li",[e._v("Maintained by the Design Authority")]),e._v(" "),a("li",[e._v("Uses x.y.z format")]),e._v(" "),a("li",[e._v("PI (Program Increment) + Sprint based versioning.")])]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Note:")]),e._v(" "),a("em",[e._v("PI + Sprint based versioning")]),e._v(" make sense in the context of the current Mojaloop Program Increments, but will need to be revised at a later date.")])]),e._v(" "),a("ul",[a("li",[e._v("Bundles compatible versions of individual services together")])])]),e._v(" "),a("li",[e._v("Internal Schemas\n"),a("ul",[a("li",[e._v("Maintained by the Design Authority")]),e._v(" "),a("li",[e._v("DB Schema x.y")]),e._v(" "),a("li",[e._v("Internal messaging Schema (Kafka) x.y")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[e._v("Mojaloop")])]),e._v(" "),a("th",[e._v("x.y")]),e._v(" "),a("th"),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td"),e._v(" "),a("td",[e._v("Owner/Maintainer")]),e._v(" "),a("td",[e._v("Format")]),e._v(" "),a("td",[e._v("Meaning")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("APIs")])]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- FSPIOP API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("x.y")])]),e._v(" "),a("td",[e._v("Major.Minor")])]),e._v(" "),a("tr",[a("td",[e._v("- Settlement API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("x.y")])]),e._v(" "),a("td",[e._v("Major.Minor")])]),e._v(" "),a("tr",[a("td",[e._v("- Admin/Operations API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("x.y")])]),e._v(" "),a("td",[e._v("Major.Minor")])]),e._v(" "),a("tr",[a("td",[e._v("Helm")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("x.y.z")])]),e._v(" "),a("td",[e._v("PI.Sprint.Increment")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Internal Schemas")])]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- DB Schema")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("x.y")])]),e._v(" "),a("td",[e._v("Major.Minor")])]),e._v(" "),a("tr",[a("td",[e._v("- Internal Messaging")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("x.y")])]),e._v(" "),a("td",[e._v("Major.Minor")])])])]),e._v(" "),a("p",[e._v("For example: Mojaloop 1.0 includes")]),e._v(" "),a("ol",[a("li",[e._v("APIs\n"),a("ul",[a("li",[e._v("FSPIOP API v1.0")]),e._v(" "),a("li",[e._v("Settlements API v1.1")]),e._v(" "),a("li",[e._v("Admin API v1.0")])])]),e._v(" "),a("li",[e._v("Helm v9.1.0\n"),a("ul",[a("li",[e._v("Individual services' versions")]),e._v(" "),a("li",[e._v("Monitoring components versions")])])]),e._v(" "),a("li",[e._v("Internal Schemas\n"),a("ul",[a("li",[e._v("DB Schema v1.0")]),e._v(" "),a("li",[e._v("Internal messaging version v1.0")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[e._v("Mojaloop")])]),e._v(" "),a("th",[e._v("v1.0")]),e._v(" "),a("th"),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td"),e._v(" "),a("td",[e._v("Owner/Maintainer")]),e._v(" "),a("td",[e._v("Version")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("APIs")])]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- FSPIOP API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("1.0")])]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- Settlement API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("1.1")])]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- Admin/Operations API")]),e._v(" "),a("td",[e._v("CCB")]),e._v(" "),a("td",[a("em",[e._v("1.0")])]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Helm")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("9.1.0")])]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Internal Schemas")])]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- DB Schema")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("1.0")])]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("- Internal Messaging")]),e._v(" "),a("td",[e._v("Design Authority")]),e._v(" "),a("td",[a("em",[e._v("1.0")])]),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"advantages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages")]),e._v(" "),a("ol",[a("li",[e._v("The advantage of this strategy is primarily simplicity. A given version say - Mojaloop v1.0 can just be used in\ndiscussions which then refers to specific versions of the three APIs - FSPIOP, Settlements, Admin APIs, along with the Helm version that is a bundle of the individual services which are compatible with each other and can be deployed together.\nAlong with these, the Schema versions for the DB and Internal messaging to communicate whether any changes have been made to these or not since the previously released version.")]),e._v(" "),a("li",[e._v("The other advantage, obviously, is that it caters for everyone who may be interested in differing levels of details\n, whether high level or detailed. Because of the nature of the major and minor versions, it should be easy for Users and adopters to understand compatibility issues as well.")])]),e._v(" "),a("h3",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),a("p",[e._v("As described in "),a("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/API%20Definition%20v1.0.md#33-api-versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("section 3.3 of the API Definition v1.0"),a("OutboundLink")],1),e._v(", whether or not a version is backwards compatible is\nindicated by the "),a("strong",[e._v("Major")]),e._v(" version. All versions with the same major version must be compatible while those having different major versions, will most likely not be compatible.")]),e._v(" "),a("p",[a("em",[e._v("Important Note: Hub operators will likely need to support multiple versions of the FSPIOP API at the same time, in order to cater for different participants as they can't all be expected to upgrade at the same time.")])]),e._v(" "),a("h2",{attrs:{id:"breaking-down-the-mojaloop-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-down-the-mojaloop-version"}},[e._v("#")]),e._v(" Breaking down the “Mojaloop Version”")]),e._v(" "),a("p",[e._v("This section aims to break down the above proposed mojaloop version into its constituent parts, and provide support for the above proposed versioning strategy")]),e._v(" "),a("h3",{attrs:{id:"apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apis"}},[e._v("#")]),e._v(" APIs")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/API%20Definition%20v1.0.md#33-api-versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mojaloop Spec"),a("OutboundLink")],1),e._v(" already outlines many of the decisions made around versioning APIs.")]),e._v(" "),a("p",[e._v("In terms of common best practices, there are many approaches for requesting different versions, including adding in a\nversion in the url, but let's not worry about this because the spec already lays this out for us, using the HTML vendor extension: "),a("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/API%20Definition%20v1.0.md#3341-http-accept-header",target:"_blank",rel:"noopener noreferrer"}},[e._v("3.3.4.1 Http Accept Header"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("As for version negotiation, the spec also states that in the event of an unsupported version being requested by a\nclient, a HTTP status 406 can be returned, along with an error message which describes the supported versions. "),a("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/API%20Definition%20v1.0.md#3343-non-acceptable-version-requested-by-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("3.3.4.3 Non-Acceptable Version Requested by Client"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Another best practice around versioning is specifying to what level clients may request specific apis.")]),e._v(" "),a("ul",[a("li",[e._v("In a development environment, many APIs will allow specificy up to the BUGFIX version, i.e. vX.X.X")]),e._v(" "),a("li",[e._v("In production however, this is limited to Major versions only, e.g. v1, v2")]),e._v(" "),a("li",[e._v("e.g. The Google API Platform supports only major versions, not minor and patch versions")]),e._v(" "),a("li",[e._v("Given the new features that may become available with v1.1 of the Mojaloop API, we might want to allow participants\nto specify MAJOR and MINOR versions, i.e. vX.X. This practice should be avoided however, since minor versions should be backwards compatible")])]),e._v(" "),a("p",[e._v("Participants using the same MAJOR version of the API should be able to interact. Participants on different MAJOR\nversions are not able to interact. For example, a participant on API v1.1 can send transfers to another participant on v1.0, but not to a different participant on v2.0.")]),e._v(" "),a("h3",{attrs:{id:"helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm"}},[e._v("#")]),e._v(" Helm")]),e._v(" "),a("p",[e._v('This section deals with how Mojaloop services interact within a given deployment. Here, we attempt to propose questions such as "should an instance of central-ledger:v10.0.1 be able to talk to ml-api-adapter:v10.1.0? How about ml-api-adapter:v11.0.0?"? or "how do we make sure both central-ledger:v10.0.1 and central-ledger:v10.1.0 talk to the database at the same time?"')]),e._v(" "),a("p",[e._v("There are two places where this happens:")]),e._v(" "),a("ol",[a("li",[e._v("Where services interact with saved state - MySQL Percona Databases")]),e._v(" "),a("li",[e._v("Where services interact with each other - Apache Kakfa and (some) internal APIs")])]),e._v(" "),a("p",[e._v("This implies we need to version:")]),e._v(" "),a("ul",[a("li",[e._v("the database schema")]),e._v(" "),a("li",[e._v("messages within Apache kafka\n"),a("ul",[a("li",[e._v("need to make sure the right services can appropriately read the right messages. E.g. Can mojaloop/ml-api-adapter:v10\n.1.0 publish messages to kafka that mojaloop/central-ledger:v10.0.1 can understand?")]),e._v(" "),a("li",[e._v("Q: If we decide to make breaking changes to the message format, how can we ensure that messages in the kafka streams\ndon't get picked up by the wong services?")])])])]),e._v(" "),a("h3",{attrs:{id:"internal-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-schemas"}},[e._v("#")]),e._v(" Internal Schemas")]),e._v(" "),a("h4",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("todo: anything to be said here?")]),e._v(" "),a("h4",{attrs:{id:"kafka-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-messaging"}},[e._v("#")]),e._v(" Kafka/Messaging")]),e._v(" "),a("p",[e._v("Currently, we use the lime protocol for our kafka message formats: https://limeprotocol.org/")]),e._v(" "),a("p",[e._v("Also refer to the mojaloop/central-services-stream readme for more information about the message format.")]),e._v(" "),a("p",[e._v("The lime protocol provides for a type, field, which supports MIME type declarations. So we could potentially handle messages in a manner similar to the API above (e.g. application/vnd.specific+json). Versioning messages in this manner means that consumers reading these messages would need to be backwards and fowards compatible (consecutive message versions must be schema compatible).")]),e._v(" "),a("ul",[a("li",[e._v("Q. does it make sense to put the version in the Kafka topic?\n"),a("ul",[a("li",[e._v("One example, ml-api-adapter publishes messages to the prepare topic")]),e._v(" "),a("li",[e._v("If we add versioning to this, ml-api-adapter:v10.0.0 publishes messages to a prepare_v10.0 topic, and a new instance\nof the ml-api-adapter:v10.1.0 will publish to the prepare_v10.1 topic.")]),e._v(" "),a("li",[e._v("subscribers can subscribe to whichever prepare topic they want, or both, depending on their own tolerance to such\nmessages")]),e._v(" "),a("li",[e._v("This may have some serious performance side effects")])])]),e._v(" "),a("li",[e._v("Another potential option would be to allow for a message 'adapter' in the deployment. Say the ml-api-adapter:v10.1.0 is producing messages to a prepare_v10.1 topic, and there is no corresponding central-ledger in the deployment to read such messages, we could have an adapter, which subscribes to prepare_v10.1, reformats them to be backwards compatible, and publishes them to prepare_v10.0 in the old format.")])]),e._v(" "),a("p",[e._v("Such an approach would allow for incremental schema changes to the messaging format as services are gradually upgraded.")]),e._v(" "),a("p",[e._v("All in all, I didn't see too much about this subject, so we'll likely need to return later down the line.")]),e._v(" "),a("h2",{attrs:{id:"version-negotiation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-negotiation"}},[e._v("#")]),e._v(" Version Negotiation")]),e._v(" "),a("p",[e._v("todo: @sam Discuss how to deal with version negotiation strategy")]),e._v(" "),a("h2",{attrs:{id:"long-term-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#long-term-support"}},[e._v("#")]),e._v(" Long Term Support")]),e._v(" "),a("p",[e._v("todo: Discuss how long term support fits into the versioning proposal. I don’t think we want to get into too much detail, but more outline what it might look like")]),e._v(" "),a("p",[e._v("Mention current (lack of) lts support, current PI cadence")]),e._v(" "),a("h2",{attrs:{id:"appendix-a-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-definitions"}},[e._v("#")]),e._v(" Appendix A: Definitions")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("service")]),e._v(": Mojaloop follows a microservices oriented approach, where a large application is broken down into smaller\nmicro services. In this instance, Service refers to a containerized application running as part of a Mojaloop deployment. At the moment, this takes the form of a Docker container running inside of a Kubernetes cluster. e.g. mojaloop/central-ledger is the central-ledger service")]),e._v(" "),a("li",[a("strong",[e._v("service version")]),e._v(": The version of the given service. This currently doesn't follow semantic versioning, but may in the\nfuture e.g. mojaloop/central-ledger:v10.0.1. The current approach is described in more detail in the "),a("a",{attrs:{href:"https://github.com/mojaloop/documentation/blob/master/contributors-guide/standards/versioning.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("standards\n/Versioning doc"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("helm")]),e._v(': Helm is an application package manager that runs on top of Kubernetes. It may also be referred to as the\n"deployment". A single helm deployment runs many different services, and MAY run multiple versions of the same service simultaneously. We also refer to the deployment as it\'s repo, mojaloop/helm interchangeably.')]),e._v(" "),a("li",[a("strong",[e._v("helm version")]),e._v(": A helm version is the version of the packaged helm charts, e.g.mojaloop/helm:v1.1.0")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": An interface is the protocol by which a Mojaloop switch interacts with the outside world. This includes\ninteractions with Participants (DFSPs) who transfer funds through the switch, hub operators running a Mojaloop switch, and admins performing administrative functions.")]),e._v(" "),a("li",[a("strong",[e._v("api")]),e._v(": Application Programming Interface - in most cases referring to the FSPIOP-API a.k.a. Open API for FSP\nInteroperability defined "),a("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("api version")]),e._v(": The Version of the FSPIOP-API, e.g. FSPIOP-API v1. For the purposes of this document, it refers to the\ncontract between a Mojaloop Switch and Participants (DFSPs) who implement the FSPIOP-API")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("[1] LTS versioning within nodejs. This is a great example of an LTS strategy, and how to clearly communicate such a strategy.\n[2] Semantic Versioning Reference\n[3] https://www.ben-morris.com/rest-apis-dont-need-a-versioning-strategy-they-need-a-change-strategy/\n[4] https://cloud.google.com/apis/design/compatibility\n[5] Nicolas Frankel - Zero-downtime deployment with Kubernetes, Spring Boot and Flyway\n[6] Stackoverflow - Kafka Topic Message Versioning")])])}),[],!1,null,null,null);t.default=s.exports}}]);