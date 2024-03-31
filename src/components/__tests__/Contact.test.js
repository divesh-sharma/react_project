import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us Page Test Case",()=>{

    beforeAll(()=>{
        console.log("before All");
    });

    beforeEach(()=>{
        console.log("before each");
    });

    afterAll(()=>{
        console.log("after all");
    })

    afterEach(()=>{
        console.log("after each");
    })
    test('should load contact us component',()=>{
        render(<Contact />)
        const heading = screen.getByRole("heading");// all the heading inside the contact component
        expect(heading).toBeInTheDocument();
        })
        
        test('should load contact us component',()=>{
            render(<Contact />)
            const button = screen.getByRole("button");// all the button inside the contact component
            const text = screen.getByText("Submit");
            expect(button).toBeInTheDocument();
            expect(text).toBeInTheDocument();
            })
        
            it('should load input name inside contact us component',()=>{
                render(<Contact />)
                const inputName = screen.getByPlaceholderText("name");// all the placeholder inside the contact component
              
                expect(inputName).toBeInTheDocument();
                })
        
                
            it('should load two input box inside contact us component',()=>{
                render(<Contact />)
                // Querying
                const inputBoxed = screen.getAllByRole("textbox");// all the placeholder inside the contact component
              console.log(inputBoxed[0]) // React element or jsx element
                expect(inputBoxed.length).toBe(2);
                })
})