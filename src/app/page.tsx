"use client";

import LoadingSpinner from "../components/LoadingSpinner";
import SimpleCatalog from "./simple-catalog";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SimpleCatalog />
    </Suspense>
  );
}
