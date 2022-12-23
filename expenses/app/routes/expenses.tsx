import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function Expenses() {
  return (
    <main>
      <p>Shared component of Expenses</p>
      <Outlet />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
