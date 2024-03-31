import { sum } from "../Sum";

test("Sum function Should calculate the sum of two numbers",()=>{
const result = sum(3,4);
// Ässertion 
expect(result).toBe(7);
})