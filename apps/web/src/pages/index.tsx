import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';

import CreateSigning from '../components/CreateSigning';
import Home from './Home';

const Page = () => {
  return (
    <div>
      <Head>
        <title>gates.wtf</title>
      </Head>
      <Home />
    </div>
  );
};

export default Page;
