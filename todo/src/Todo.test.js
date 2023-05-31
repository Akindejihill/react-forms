import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Todo from "./Todo";

function fakeFunction(){
    console.log("");
}

//smoketests
it("renders without crashing", function () {
    render(<TodoForm />);
});

it("renders without crashing", function () {
    render(<TodoList />);
});

it("renders without crashing", function () {
    render(<Todo key={99} index={99} todo={"test todo list"} removeTodo={fakeFunction} />);
});

//snapshot tests
it("matches snapshot", function () {
    const { asFragment } = render(<TodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
    const { asFragment } = render(<Todo key={99} index={99} todo={"test todo list"} removeTodo={fakeFunction} />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the add todo function on form submit", function () {
    const createMock = jest.fn();
    const { getByText } = render(<TodoForm addTodo={createMock} />);
    const createButton = getByText("Add Todo");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});
