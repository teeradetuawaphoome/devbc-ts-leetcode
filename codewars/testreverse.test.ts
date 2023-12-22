import { expect, test } from "bun:test";
import { solution } from "./reverse";

test("ต้องได้stringที่ย้อนแล้ว", () => {
	expect(solution("world")).toEqual("dlrow");
});

test("ต้องได้stringที่ย้อนแล้ว", () => {
	expect(solution("")).toEqual("");
});

test("ต้องได้stringที่ย้อนแล้ว", () => {
	expect(solution("h")).toEqual("h");
});
