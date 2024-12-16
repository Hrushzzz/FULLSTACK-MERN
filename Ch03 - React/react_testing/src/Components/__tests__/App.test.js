import {render, screen} from "@testing-library/react";
// "render" helps us to render our react component into virtual DOM for testing.
// "screen" helps us to access to virtual DOM.
import App from "../../App";

test("renders learn react link", () => {
    //rendering our component
    render(<App></App>)

    //screen --> will get the output
    const linkElement = screen.getByText(/learn react/i);

    //comparing the expected output with actual output
    // this is called as "ASSERTION".
    expect(linkElement).toBeInTheDocument();

});