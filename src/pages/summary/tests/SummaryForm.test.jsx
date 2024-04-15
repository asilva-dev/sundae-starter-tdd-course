import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import { expect, test } from "vitest";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButtom = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButtom).toBeDisabled();
});

test("should checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButtom = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(confirmButtom).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButtom).toBeDisabled();
});
