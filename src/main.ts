import { getSlug } from "./lib.js";

console.log(getSlug("Elon Musk considers move to Mars"));

console.log(getSlug("Fintech startups raised 34B€ in 2019"));

console.log(getSlug("Shopify joins Facebook’s cryptocurrency Libra Association"));

console.log(getSlug("What is a slug and how to optimize it?"));

console.log(getSlug("The COVID-19, coronavirus desease, is being defeated"));

console.log(
  getSlug(
    "Design Patterns: Top 5 Techniques for Implementing Fault Tolerance in Distributed Systems"
  )
);

console.log(
  getSlug(
    "Running our test suite with Mocha took 12+ minutes. In CI with our beefy build machines we’re now able to run the entire Jest suite in 4 minutes 30 seconds"
  )
);

console.log(
  getSlug(
    "When should I migrate my Frontend to an architecture based on microfrontends?",
    undefined,
    true
  )
);

console.log(
  getSlug("Solve Module Import Aliasing for Webpack, Jest, and VSCode", undefined, false, true)
);

console.log(getSlug("What Is A Smart Contract And How Does It Work ?", 30, true));
