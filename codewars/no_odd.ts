//  โจทย์ต้องการ ให้สร้าง funtion ที่รับ array มาและ return array 
//  Write a small function that returns the values of an array that are not odd.
//  All values in the array will be integers. Return the good values in the order they are given.

// ผลลัพธ์ที่โจทย์ต้องการ วิเคราะห์จากผลลัพธ์ที่โจทย์ให้มาได้ว่ามีแค่เลขคู่ที่ถูก return ออกไป เลขคู่ หรือจำนวนที่ 2 หารได้ลงตัวพอดี แสดงว่าต้องใช้ values%2===0
// import { assert } from "chai";
// import { noOdds } from "./solution";
// describe( "Testing some inputs", function(){
//   it("should return [0] for [0,1]", function(){
//     assert.deepEqual( noOdds( [0,1] ), [0]);
//   });
//   it("should return [0,2] for [0,1,2,3]", function(){
//     assert.deepEqual(noOdds( [0,1,2,3] ), [0,2]);
//   });
// });

// ตัวอย่างการใช้filter
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

export function noOdds(values: number[]): number[] {
  const result:number[] = [];

  for (const even of values) {
    if (even % 2 === 0) {
      result.push(even);
    }
  }

  return result;
}
console.log(noOdds([4,5,6,7]));