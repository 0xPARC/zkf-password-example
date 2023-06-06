# ZKP Password Website

This repository is forked from https://github.com/0xPARC/circom-starter. You can (and should) read the [original README](./README_OLD.md) in order to get an understanding of how this repository is structured, in particular when it comes to the compilation and execution of the circuits.

## Problem Statement

Your task is to create a website that lets users log in by proving knowledge of a super secret password using a zero knowledge proof. This zero knowledge proof must not include the password itself. This repository contains several circuits, one of which may be a useful starting point for instantiating a protocol that allows users to prove knowledge of a password without revealing what the password is.

Your solution must be able to work end-to-end. This means you should be able to navigate to some localhost web-server, and get a webpage which prompts you to log in. You should be able to generate a ZK proof, either on the website itself, or on the command line, and send it to the web server, which should verify the proof, and show some secret hidden message to the user.

### Extension 1

Build proof generation into the website: the user should enter their password, and the website should automatically generate the ZK proof in-browser and send it to the server.

## Scaffolding

This repository contains some scaffolding which takes you 80% of the way to the solution, leaving out only the ZK aspects for you to solve. Check out the [./src](./src/) directory to get started.

### Command-Line

Install the dependencies

```bash
yarn
```

You can start the web-server using the following command:

```bash
yarn server
```

... after which you can navigate to http://localhost:3000

On the command-line, you can generate a correct proof (which is stubbed for you to fill in) via the following command:

```bash
yarn getCorrectProof
```

You can also generate an incorrect proof using the following command:

```bash
yarn getWrongProof
```

## Example Solution

You can see an example solution to the problem on [this branch](https://github.com/0xPARC/zkf-password-example/tree/solution) of this repository.
