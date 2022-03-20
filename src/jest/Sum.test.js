

// test("first test", () => {
//     let data = 100
//     expect(data).toBe(100)
// })

import sum from "./Sum"


// test("second test", () => {
//     let data = 20
//     expect(data).toBe(100)
// })

// describe("Sum function testing", () => {
//     test("first test", () => {
//         expect(sum(2, 4)).toBe(6)
//     })
// })

// describe("Sum function testing - 2", () => {
//     test("first test", () => {
//         expect(sum(2, 4)).not.toBe(6)
//     })
// })

describe("Sum function test", () => {
    test("Object check", () => {
        let data = sum(1, 2)
        expect(data).toEqual({ name: 'James' })
    })
})