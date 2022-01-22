import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { mockStore } from "./setupTests";
import { act } from "react-dom/test-utils";

describe("App without data", () => {
  const store = mockStore({
    data: false,
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("should renders heading", () => {
    expect(
      screen.getByRole("heading", { name: "Women's Top" })
    ).toBeInTheDocument();
  });

  it("should renders loading when data is not loaded", () => {
    expect(
      screen.getByRole("heading", { name: "loading..." })
    ).toBeInTheDocument();
  });
});

describe("App with data", () => {
  let container, store;
  const handleFilter = jest.fn();
  const props = {
    handleFilter,
  };
  store = mockStore({
    data: [
      {
        index: 0,
        isSale: true,
        isExclusive: false,
        price: "$18.88",
        productImage: "product-1.jpg",
        productName: "Striped shirt",
        size: ["XS", "S", "L", "XL"],
      },
    ],
  });

  beforeEach(() => {
    const wrapper = render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
    container = wrapper.container;
  });
  it("should renders heading", () => {
    expect(
      screen.getByRole("heading", { name: "Women's Top" })
    ).toBeInTheDocument();
  });

  it("should renders filter button dropdown ,onclick functionality and rendering its dropdown item", async () => {
    const filterButton = screen.getByRole("button", {
      name: "Filter Top Size",
    });
    expect(filterButton).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(filterButton);
    });
    const dropDownItem = container.getElementsByClassName("dropdown-item");
    expect(dropDownItem.length).toBe(6);
    expect(dropDownItem[0].textContent).toBe("All Sizes");
    expect(dropDownItem[1].textContent).toBe("XS");
    expect(dropDownItem[2].textContent).toBe("S");
    expect(dropDownItem[3].textContent).toBe("M");
    expect(dropDownItem[4].textContent).toBe("L");
    expect(dropDownItem[5].textContent).toBe("XL");
  });

  it("should renders card and its details", () => {
    expect(screen.getByText("Striped shirt")).toBeInTheDocument();
    expect(screen.getByText("Price - $18.88")).toBeInTheDocument();
    expect(screen.getByText("Size Available-")).toBeInTheDocument();
    expect(screen.getByText("XS")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("XL")).toBeInTheDocument();
  });
});
