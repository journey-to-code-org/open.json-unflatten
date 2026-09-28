import test from "node:test";import assert from "node:assert/strict";import{unflattenObject}from"../src/index.js";
test("restores nested objects",()=>assert.deepEqual(unflattenObject({"a.b":1,c:2}),{a:{b:1},c:2}));
test("restores arrays",()=>assert.deepEqual(unflattenObject({"a.0":"x","a.1":"y"}),{a:["x","y"]}));
test("supports delimiter",()=>assert.deepEqual(unflattenObject({"a__b":1},{delimiter:"__"}),{a:{b:1}}));
