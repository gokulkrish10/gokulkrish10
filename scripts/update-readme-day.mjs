import { readFileSync, writeFileSync } from "node:fs";

const paths = [
  new URL("../README.md", import.meta.url),
  new URL("../assets/profile-chat.svg", import.meta.url),
];
const day = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
}).format(new Date());

for (const path of paths) {
  const content = readFileSync(path, "utf8");
  const updated = content
    .replace(/Happy\+[A-Za-z]+%21/g, `Happy+${day}%21`)
    .replace(/Happy [A-Za-z]+!/g, `Happy ${day}!`);

  writeFileSync(path, updated);
}
