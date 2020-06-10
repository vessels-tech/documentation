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


For simplicty, let's assume the following:
  - 3 `mojaloop/helm` versions: `1.0.0`, `2.0.0`, and `2.0.1`
    - `2.0.0` is an intermediary helm version we use to get from `1.0.0` to `2.0.1`?


  - `helm3`, kubernetes `v?`

### Background
```bash
helm install ...
#todo: all the steps to just get everything running for v1.0.0
```

### The Upgrade

```bash
#todo: api gateway instructions, drain the transfers
#todo: start the rolling upgrade
helm upgrade mojaloop --version v2.0.0 --reuse-values

```

### Rollback
```bash

helm history mojaloop
#TODO: how do we perform a rollback
# Rollback to revision 1
helm rollback mojaloop 1 
```


### Questions:
- To run a kubernetes rolling upgrade, do we need a separate helm _version_? Or can we do it somehow else?