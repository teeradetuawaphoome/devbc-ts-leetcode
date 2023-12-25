import { expect, test } from "bun:test";
import { stringToNumber } from "./convert";

test("ต้องแปลงstringเป็นnumber", () => {
	expect(stringToNumber("605")).toEqual(605);
});

test("ต้องแปลงstringเป็นnumber", () => {
	expect(stringToNumber("0")).toEqual(0);
});

test("ต้องแปลงstringเป็นnumber", () => {
	expect(stringToNumber("1234567890")).toEqual(1234567890);
});

test("ต้องแปลงstringเป็นnumber", () => {
	expect(stringToNumber("1234",)).toEqual(1234);
});