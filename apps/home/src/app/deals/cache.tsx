'use client';

import { useAccountType } from '@myorg/service';

export default function Deals() {
  const { accountType, setAccountType } = useAccountType()

  return (
    <div>
      <pre>
        222
      </pre>

      <div style={{ color: 'red' }} onClick={() => {
        const num = localStorage.getItem('account_type')
        setAccountType((num === null ? 0 : +num) + 1);
      }} >缓存数据: {accountType}</div>
    </div>
  );
}
