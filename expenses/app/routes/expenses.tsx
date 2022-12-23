import { Outlet } from "@remix-run/react";

export default function Expenses() {
  return (
    <main>
      <p>Shared component of Expenses</p>
      <Outlet />
    </main>
  );
}
