export function getSlug(source: string, slugOptions?: Partial<slugOptions>): string {
  const options: slugOptions = {
    length: 100,
    timestamp: false,
    datestamp: false,
    replaceFn: replace,
    removeFn: remove,
    ...slugOptions,
  };

  let cleanSource = String(source).trim().toLowerCase();
  const targets = ["’", "!", "?", ",", ":", ".", "#", "+", "/", "&", "@"];
  cleanSource = options.removeFn(cleanSource, targets);
  cleanSource = options.replaceFn(cleanSource, " ", "-");
  cleanSource = options.replaceFn(cleanSource, "$", "dollars");
  cleanSource = options.replaceFn(cleanSource, "€", "euros");

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
  replaceFn: (source: string, target: string, change: string) => string;
  removeFn: (source: string, targets: string[]) => string;
};

export function replace(source: string, target: string, change: string): string {
  return source.split(target).join(change);
}

export function remove(source: string, targets: string[]): string {
  let result = source;
  targets.forEach(target => {
    result = replace(result, target, "");
  });
  return result;
}
