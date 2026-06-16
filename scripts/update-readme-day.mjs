import { readFileSync, writeFileSync } from "node:fs";

const readmePath = new URL("../README.md", import.meta.url);
const day = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
}).format(new Date());

const readme = readFileSync(readmePath, "utf8");
const updated = readme
  .replace(/Happy\+[A-Za-z]+%21/g, `Happy+${day}%21`)
  .replace(/Happy [A-Za-z]+!/g, `Happy ${day}!`);

writeFileSync(readmePath, updated);
