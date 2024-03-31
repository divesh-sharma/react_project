import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import RestaurantCard,{withPromotedLabel} from "../../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json";
it("Should render RestaurantCard component with props Data",()=>{
render(
    <RestaurantCard resData={MOCK_DATA} />

);
const name = screen.getByText("Sardarji Londonwaley");

expect(name).toBeInTheDocument();

});

it("Should render RestaurantCard component with Promoted Label",()=>{
   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(
        <RestaurantCardPromoted resData={MOCK_DATA}  key={MOCK_DATA.info.id}/>
    
    );
    const name = screen.getByText("Sardarji Londonwaley");
    
    expect(name).toBeInTheDocument();
    
    });