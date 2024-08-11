import { AppProps } from 'next/app';
import { AccountTypeProvider } from '@myorg/service'; // 根据实际路径调整导入

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccountTypeProvider>
      <Component {...pageProps} />
    </AccountTypeProvider>
  );
}

export default MyApp;
