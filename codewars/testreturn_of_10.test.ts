import { expect, test } from "bun:test";
import { closestMultiple10 } from "./return_of_10";

test("ต้องได้จำนวนเต็ม", () => {
	expect(closestMultiple10(55)).toEqual(60);
});

test("ต้องได้จำนวนเต็ม", () => {
	expect(closestMultiple10(-55)).toEqual(-50);
});

test("ต้องได้จำนวนเต็ม", () => {
	expect(closestMultiple10(100)).toEqual(100);
});

test("ต้องได้จำนวนเต็ม", () => {
	expect(closestMultiple10(1)).toEqual(0);
});
