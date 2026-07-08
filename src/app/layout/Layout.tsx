"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../store";
import AppLayout from "../features/chat/layout/AppLayout";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function Layout({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  );
}
