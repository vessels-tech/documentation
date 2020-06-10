# Versioning Zero Downtime POC

This is a living document for the research and implementation of the Versioning workstream for PI10.

## Background
[
  todo: a bit of background about the ZDD poc, our outputs purpose etc.
  we have this elsewhere, so we can leave this section until later
]


## Proposed Steps:

Issue Reference: [#1329](https://github.com/mojaloop/project/issues/1329)

As a hub operator I want a series of simple steps to run a zero downtime deployment of a mojaloop upgrade so I can easily understand and execute these steps.


For simplicity, let's assume the following:
  - 3 `mojaloop/helm` versions: `1.0.0`, `1.1.0`, and `1.2.0`
    - `2.0.0` is an intermediary helm version we use to get from `1.0.0` to `2.1.0`?
  - `helm3`, kubernetes `v?`


## Example Changelog:

### `2.0.1`

- Database Schema: 
  - changes optional `quoteId` field to be required

Supported API Versions: `v2.0`  
DB Schema Version: `v2.0.0`

### `2.0.0`

- `BREAKING CHANGE`: changes `transfer.quoteId` in API to be a required field
  - this is incompatible with Mojaloop API v1.X, Clients **MUST** use API v2.0 or greater

- migration: 
  - we may be able to fill in `null` `quoteId` values in the transfer table if we want. 

Supported API Versions: `v2.0`  
DB Schema Version: `v1.0.1`

### `1.0.2`

- adds a new `transfer.quoteId` field in API, adding support for `v2.0` API
  - for `v2.0` API this is **required**
  - for `v1.X` this is **optional**

Supported API Versions: `v1.X`, `v2.0`  
DB Schema Version: `v1.0.1`

### `1.0.1`

- Database Schema: adds optional `quoteId` field to the `transfer` table, defaults to null

Supported API Versions: `v1.X`  
DB Schema Version: `v1.0.1`

### `1.0.0`

- `transfer.quoteId` does not exist, and will cause a validation error

Supported API Versions: `v1.X`  
DB Schema Version: `v1.0.0`  

### Background
```bash
helm install ...
#todo: all the steps to just get everything running for v1.0.0
```

### General Tips:
> Reference: https://zero-to-jupyterhub.readthedocs.io/en/latest/administrator/upgrading.html

1. Always backup your database!
2. Review the CHANGELOG for incompatible changes and upgrade instructions.
3. If you are planning an upgrade of a critical major installation, we recommend you test the upgrade out on a staging cluster first before applying it to production

### The Upgrades

> In order to fully upgrade the Mojaloop deployment from `v1.0.0` -> `v2.0.1`, we must go through a number of incremental helm upgrades, each of which is forwards and backwards compatible

<!-- #todo: api gateway instructions, drain the transfers -->
<!-- #todo: look at the actual underlying deployment object in kube -->


```bash
# apply the db schema changes: optional `quoteId` column
helm upgrade mojaloop --version v1.0.1 --reuse-values

# add support for v2.0 API
helm upgrade mojaloop --version v1.0.2 --reuse-values

# drop support for v1.X API
helm upgrade mojaloop --version v2.0.0 --reuse-values

# apply final db schema changes: required `quoteId` column
helm upgrade mojaloop --version v2.0.1 --reuse-values
```

### Rollback
```bash
# list all helm history
helm history mojaloop

# Rollback to revision 1
helm rollback mojaloop 1 
```


### Questions:
- To run a kubernetes rolling upgrade, do we need a separate helm _version_? Or can we do it somehow else?