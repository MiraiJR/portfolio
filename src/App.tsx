import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { queryClient } from "./configs/QueryClientConfig";
import { QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};
