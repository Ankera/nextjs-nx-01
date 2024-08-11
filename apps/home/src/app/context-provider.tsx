// /app/context-provider.js
"use client"; // 这个文件将作为 Client Component

import { AccountTypeProvider } from '@myorg/service';

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return <AccountTypeProvider>{children}</AccountTypeProvider>;
}
