import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AccountTypeContextType {
  accountType: number;
  setAccountType: (newValue: number) => void;
}

const AccountTypeContext = createContext<AccountTypeContextType>({
  accountType: 1,
  setAccountType: () => {},
});

export const AccountTypeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accountType, setAccountTypeState] = useState<number>(() => {
    return 12;
  });
  const [isClient, setIsClient] = useState<boolean>(false); // 新增状态判断是否为客户端渲染
  const router: any = useRouter();

  useEffect(() => {
    setIsClient(true); // 仅在客户端渲染时设置为 true
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedAccountType = parseInt(localStorage.getItem('account_type') || '1', 10);
      setAccountTypeState(savedAccountType);
    }
  }, [isClient]);

  const setAccountType = (newValue: number) => {
    setAccountTypeState(newValue);
    if (isClient) {
      localStorage.setItem('account_type', newValue.toString());
    }
  };

  useEffect(() => {
    if (isClient) {
      const handleRouteChange = (pathname: string) => {
        let newAccountType = accountType;

        // if (pathname.startsWith('/home')) {
        //   newAccountType += 1;
        // } else if (pathname.startsWith('/details')) {
        //   newAccountType += 1;
        // }
        newAccountType += 1;

        setAccountType(newAccountType);
      };

      handleRouteChange(window.location.pathname);

      return () => {
        handleRouteChange(router.pathname);
      };
    }
  }, [router.pathname, isClient]);

  useEffect(() => {
    if (isClient) {
      const syncAccountType = () => {
        const savedAccountType = parseInt(localStorage.getItem('account_type') || '1', 10);
        if (savedAccountType !== accountType) {
          setAccountTypeState(savedAccountType);
        }
      };

      window.addEventListener('storage', syncAccountType);

      return () => {
        window.removeEventListener('storage', syncAccountType);
      };
    }
  }, [accountType, isClient]);

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountTypeContext.Provider>
  );
};

const useAccountType = () => useContext(AccountTypeContext);

// 创建自定义 Hook 来使用 Context
export {
  useAccountType
}

export default AccountTypeProvider;
