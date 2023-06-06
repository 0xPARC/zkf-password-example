import { verifyPasswordKnowledge } from "./proving";
import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Landing page of our website.
app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "./login.html"));
});

// Route which verifies a ZKP which proves knowledge of the master password
// and returns some secret contents in the case that the verification succeeds,
// otherwise redirects to the landing page with an error query string parameter.
app.post("/login", async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const fullProof = req.body.fullProof;
  try {
    const parsedFullProof = JSON.parse(fullProof);
    const proofCorrect = await verifyPasswordKnowledge(parsedFullProof);
    if (proofCorrect) {
      res.sendFile(path.join(__dirname, "./secrets.html"));
      return;
    }
  } catch (e) {
    console.log(e);
  }

  res.redirect("/?error=true");
});

app.listen(port, () => {
  console.log(`ZKP-password app listening on port ${port}`);
});
