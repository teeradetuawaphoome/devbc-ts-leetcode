import { expect, test } from "bun:test";
import { toAlternatingCase } from "./toalternating";

test("ต้องแปลงstringจากตัวเล็กเป็นตัวใหญ่และตัวใหญ่เป็นตัวเล็ก", () => {
	expect(toAlternatingCase("HELLO")).toEqual("hello");
});

test("ต้องแปลงstringจากตัวเล็กเป็นตัวใหญ่และตัวใหญ่เป็นตัวเล็ก", () => {
	expect(toAlternatingCase("TEERADET")).toEqual("teeradet");
});

test("ต้องแปลงstringจากตัวเล็กเป็นตัวใหญ่และตัวใหญ่เป็นตัวเล็ก", () => {
	expect(toAlternatingCase("tew TEERADET")).toEqual("TEW teeradet");
});

test("ต้องแปลงstringจากตัวเล็กเป็นตัวใหญ่และตัวใหญ่เป็นตัวเล็ก", () => {
	expect(toAlternatingCase("hH")).toEqual("Hh");
});