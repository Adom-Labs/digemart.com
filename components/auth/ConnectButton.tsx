import { useWeb3Modal } from '@web3modal/wagmi/react';
import React from 'react';
import { SiWalletconnect } from 'react-icons/si';

function ConnectButton({ text }: { text: string }) {
  const { open } = useWeb3Modal();
  return (
    <button
      onClick={() => {
        return open({ view: 'Connect' });
      }}
      className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
    >
      <div className='bg-white p-1 rounded-full'>
        <SiWalletconnect />
      </div>
      <span className='ml-4'>{text}</span>
    </button>
  );
}

export default ConnectButton;
