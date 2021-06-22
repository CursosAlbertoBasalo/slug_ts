import { getSlug, remove, replace, slugOptions } from "./lib";
describe("GIVEN: the getSlug function used without options and a string source", () => {
  it("WHEN has spaces THEN should be replaced with a hyphen", () => {
    const input = "3 concepts you need to get started";
    const actual = getSlug(input);
    const expected = "3-concepts-you-need-to-get-started";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has capital letters THEN should be on lowercase", () => {
    const input = "Elon Musk considers move to Mars";
    const actual = getSlug(input);
    const expected = "elon-musk-considers-move-to-mars";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has € THEN should be on replaced with euros", () => {
    const input = "Fintech startups raised 34B€ in 2019";
    const actual = getSlug(input);
    const expected = "fintech-startups-raised-34beuros-in-2019";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has an apostrophe THEN should be removed", () => {
    const input = "Shopify joins Facebook’s cryptocurrency Libra Association";
    const actual = getSlug(input);
    const expected = "shopify-joins-facebooks-cryptocurrency-libra-association";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has question marks THEN should be removed", () => {
    const input = "What is a slug and how to optimize it?";
    const actual = getSlug(input);
    const expected = "what-is-a-slug-and-how-to-optimize-it";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has commas THEN should be removed", () => {
    const input = "The COVID-19, coronavirus desease, is being defeated";
    const actual = getSlug(input);
    const expected = "the-covid-19-coronavirus-desease-is-being-defeated";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN has colons THEN should be removed", () => {
    const input =
      "Design Patterns: Top 5 Techniques for Implementing Fault Tolerance in Distributed Systems";
    const actual = getSlug(input);
    const expected =
      "design-patterns-top-5-techniques-for-implementing-fault-tolerance-in-distributed-systems";
    expect(actual).toStrictEqual(expected);
  });
  it("WHEN is too long THEN should be truncated to 100 chars", () => {
    const input =
      "Running our test suite with Mocha took 12+ minutes. In CI with our beefy build machines we’re now able to run the entire Jest suite in 4 minutes 30 seconds";
    const actual = getSlug(input);
    const expected =
      "running-our-test-suite-with-mocha-took-12-minutes-in-ci-with-our-beefy-build-machines-were-now-able-";
    expect(actual).toStrictEqual(expected);
  });
});

describe("GIVEN: the getSlug function used with options", () => {
  it("WHEN we want a timestamp THEN should be added to the end", () => {
    const inputSource =
      "When should I migrate my Frontend to an architecture based on microfrontends?";
    const inputOptions: Partial<slugOptions> = { timestamp: true };
    const actual = getSlug(inputSource, inputOptions);
    const expected =
      "when-should-i-migrate-my-frontend-to-an-architecture-based-on-microfrontends_";
    expect(actual.startsWith(expected)).toBeTruthy();
    expect(actual.length - expected.length).toStrictEqual(13);
  });
  it("WHEN we want a datestamp THEN should be added to the end", () => {
    const inputSource = "Solve Module Import Aliasing for Webpack, Jest, and VSCode";
    const inputOptions: Partial<slugOptions> = { datestamp: true };
    const actual = getSlug(inputSource, inputOptions);
    const expected = "solve-module-import-aliasing-for-webpack-jest-and-vscode_";
    expect(actual.startsWith(expected)).toBeTruthy();
    expect(actual.length - expected.length).toStrictEqual(10);
  });
  it("WHEN we want several options THEN should be added to the end", () => {
    const inputSource = "What Is A Smart Contract And How Does It Work ?";
    const inputOptions: Partial<slugOptions> = {
      length: 30,
      timestamp: true,
    };
    const actual = getSlug(inputSource, inputOptions);
    const expected = "what-is-a-smart-contract-and-h_";
    expect(actual.startsWith(expected)).toBeTruthy();
    expect(actual.length - expected.length).toStrictEqual(13);
    expect(actual).toHaveLength(30 + 1 + 13);
  });
});

describe("GIVEN the replace function", () => {
  it("WHEN gets a $ THEN returns dollars", () => {
    const input = "Bitcoins drops under 50000$";
    const actual = replace(input, "$", "dollars");
    const expected = "Bitcoins drops under 50000dollars";
    expect(actual).toStrictEqual(expected);
  });
});

describe("GIVEN the remove function", () => {
  it("WHEN gets an array of targets $ THEN returns without them", () => {
    const input = "Learn JavaScript, Testing, Async/Await & more following @albertobasalo";
    const inputTargets = ["’", "!", "?", ",", ":", ".", "#", "+", "/", "&", "@"];
    const actual = remove(input, inputTargets);
    const expected = "Learn JavaScript Testing AsyncAwait  more following albertobasalo";
    expect(actual).toStrictEqual(expected);
  });
});
