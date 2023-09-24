import {sum} from "../components/sum"
test("Sum of a and b", ()=>{
    //write implementation test
    const result = sum(1,2); 

    //assertion
    expect(result).toBe(3);
});