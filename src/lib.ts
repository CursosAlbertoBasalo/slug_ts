export function getSlug(source: string, slugOptions?: Partial<slugOptions>): string {
  const options: slugOptions = {
    length: 100,
    timestamp: false,
    datestamp: false,
    ...slugOptions,
  };

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

  if (cleanSource.length > options.length) {
    cleanSource = cleanSource.slice(0, options.length);
  }
  if (options.timestamp) {
    cleanSource += "_" + Date.now();
  }
  if (options.datestamp) {
    cleanSource += "_" + new Date().toISOString().slice(0, 10);
  }
  return cleanSource;
}

export type slugOptions = {
  length: number | 100;
  timestamp: boolean;
  datestamp: boolean;
};
