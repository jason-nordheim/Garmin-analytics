import cors from "cors";
import express from "express";
import logger from "morgan";
import { XMLParser } from "fast-xml-parser";

const xmlParser = new XMLParser();

export const app = express();
app.use(cors());

app.post("/api/upload", express.raw({ type: "application/octet-stream" }), async (req, res) => {
  const data: Buffer[] = [];
  req.on("data", (chunk) => {
    data.push(chunk);
  });
  req.on("end", () => {
    const fulldata = Buffer.concat(data);
    const str = fulldata.toString("utf8");
    const jsonData = xmlParser.parse(str);
    console.log(JSON.stringify(jsonData, null, 2));
    res.send("file processed");
  });
});

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(logger("dev"));
