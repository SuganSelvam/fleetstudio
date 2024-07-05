import React from "react";
import ReactDOM from "react-dom/client";
import CommitComponent from "./components/commit-component";
import RouterError from "./components/router-error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "repositories/:owner/:repository/commit/:commitSHA",
        element: <CommitComponent />,
        errorElement: <RouterError />,
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
