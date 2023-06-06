import {
  generateProofOfPasswordKnowledge,
  verifyPasswordKnowledge,
} from "./proving";

// This file is meant to be called from the command line, and is a minimal
// end-to-end example of the generation and verification of a proof of knowledge
// of the master password.

async function run() {
  const fullProof = await generateProofOfPasswordKnowledge("password");
  const verified = await verifyPasswordKnowledge(fullProof);

  console.log("proof correct", verified);
}

run().then(() => {
  process.exit(0);
});
