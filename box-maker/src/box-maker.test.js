import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";

//Smoke test
it("renders without crashing", () => {
    const { getByText } = render(
        <Box backgroundColor="red" width="100" height="100" />
    );
    const boxElement = getByText("X");

    expect(boxElement).toBeInTheDocument();
});

it("renders without crashing", () => {
    render(<BoxList />);
});

it("renders without crashing", () => {
    render(<NewBoxForm />);
});

//Snapshots
it("matches snapshot", function () {
    const { asFragment } = render(
        <Box backgroundColor="red" width="100" height="100" />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});


