import { generateProofOfPasswordKnowledge } from "./proving";

// This file is meant to be executed from the command line. Given
// a password, it generates a ZKP that proves knowledge of the pre-image
// of the password given mimc(sha256(password)).

async function run() {
  const password = process.argv[2];

  if (password === undefined) {
    console.log("usage: getProof <password>");
    return;
  }

  console.log(`generating a ZKP for password '${password}'`);
  console.log();

  const fullProof = await generateProofOfPasswordKnowledge(password);
  const stringifiedFullProof = JSON.stringify(fullProof, null, 2);

  console.log(stringifiedFullProof);
  console.log();
}

run().then(() => {
  process.exit(0);
});
