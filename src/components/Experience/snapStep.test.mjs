// Run: node src/components/Experience/snapStep.test.mjs
import assert from "node:assert/strict";
import { snapStep } from "./snapStep.mjs";
const p = [3000, 3900, 4800, 5700];
assert.equal(snapStep(p, 3000, 100, 900), 3900); // one notch, one unit
assert.equal(snapStep(p, 3900, -100, 900), 3000);
assert.equal(snapStep(p, 5700, 100, 900), null); // leaves after the last panel
assert.equal(snapStep(p, 3000, -100, 900), null); // leaves above the first
assert.equal(snapStep(p, 1000, 100, 900), null); // far above: free scroll
assert.equal(snapStep(p, 2700, 100, 900), 3000); // entering from above
assert.equal(snapStep(p, 5950, -100, 900), 5700); // entering from below
assert.equal(snapStep(p, 8000, -100, 900), null);
console.log("snapStep ok");
