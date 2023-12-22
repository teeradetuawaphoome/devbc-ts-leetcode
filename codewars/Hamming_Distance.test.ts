import { expect, test } from "bun:test";
import { hammingDistance } from "./Hamming_Distance";

test("ต้องได้จำนวนstringที่ไม่ตรง", () => {
	expect(hammingDistance("asad","asas")).toEqual(1);
});

test("ต้องได้จำนวนstringที่ไม่ตรง", () => {
	expect(hammingDistance("","")).toEqual(0);
});

test("ต้องได้จำนวนstringที่ไม่ตรง", () => {
	expect(hammingDistance("Hello World", "Hello World")).toEqual(0);
});

test("ต้องได้จำนวนstringที่ไม่ตรง", () => {
	expect(hammingDistance("old father, old artificer", "of my soul the uncreated ")).toEqual(24);
});
