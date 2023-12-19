import { expect, test } from "bun:test";
import { noOdds } from "./no_odd";

test("ส่งarray[4,5,6,7]ไปทำงานในnoOddsต้องได้array[4,6]", () => {
	expect(noOdds([4,5,6,7])).toEqual([4,6]);
});