import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Counter";

test("initial state check", () => {
    //render
    render(<Counter></Counter>)

    //selection
    const countElement = screen.getByText("Count is 0");
    const plusElement = screen.getByText("+");
    const minusElement = screen.getByText("-");

    //assertion
    expect(countElement).toBeInTheDocument();
    expect(plusElement).toBeInTheDocument();
    expect(minusElement).toBeInTheDocument();
});


test("increment by one", () => {
    //render
    render(<Counter></Counter>)

    //selection
    const plusElement = screen.getByText("+");
        //"fireEvent" is used to access action performed on the element
    fireEvent.click(plusElement);

    // assertion
    const countElement = screen.getByText("Count is 1");
    expect(countElement).toBeInTheDocument(); 
});


test("decrement by one", () => {
    //render
    render(<Counter></Counter>)

    //selection
    const minusElement = screen.getByText("-");
        //"fireEvent" is used to access action performed on the element
    fireEvent.click(minusElement);
    fireEvent.click(minusElement);

    // assertion
    const countElement = screen.getByText("Count is -2");
    expect(countElement).toBeInTheDocument(); 
});