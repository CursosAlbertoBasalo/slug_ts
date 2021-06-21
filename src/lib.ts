export function getSlug(source, lenght = 100, timestamp, datestamp) {
  let cleanSource = String(source)
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")
    .split("’")
    .join("")
    .split("’")
    .join("")
    .split("?")
    .join("")
    .split(",")
    .join("")
    .split(":")
    .join("")
    .split(".")
    .join("")
    .split("#")
    .join("")
    .split("+")
    .join("")
    .replace("$", "dollar")
    .replace("€", "euros");

  if (cleanSource.length > lenght) {
    cleanSource = cleanSource.slice(0, lenght);
  }
  if (timestamp) {
    cleanSource += "_" + Date.now();
  }
  if (datestamp) {
    cleanSource += "_" + new Date().toISOString().slice(0, 10);
  }
  return cleanSource;
}
