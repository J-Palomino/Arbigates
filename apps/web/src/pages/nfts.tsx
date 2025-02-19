import { Button, Space, Box, Image, Text } from '@mantine/core';
import { useContractWrite, useContractRead } from 'wagmi-lfg';
import { useAccount } from 'wagmi';
import useEvent from '../hooks/useEvent';
import { Arbigates__factory } from 'web3-config';
import { useState, useEffect } from 'react';
import useGated from '../hooks/useGated';
import axios from 'axios';

const gateId = '4';
const NFTs = () => {
  const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const IPFS_ADDRESS =
    'https://gateway.pinata.cloud/ipfs/QmfK4jMsx5qZ3fBiixfYawRQsrCGrGjgMXKbYzkovF7Qwg';
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);
  const [minted, setMinted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [mintedNFT, setMintedNFT] = useState('');
  const { address } = useAccount();
  const { write, isLoading } = useContractWrite(
    Arbigates__factory,
    'addAddress',
    {
      reckless: true,
      onSuccess: () => {
        localStorage.setItem('minted', 'true');
        setCounter(counter + 1);
        localStorage.setItem('mintedNFT', counter.toString());
        setMinted(true);
        setIsSignedUp(false);
      },
    }
  );

  // const { data: balanceOf } = useContractRead(Arbigates__factory, 'balanceOf', {
  //   args: [address],
  //   enabled: Boolean(address),
  // });
  useEffect(() => {
    const getNftImage = async (id: any) => {
      const { data } = await axios.get(`${IPFS_ADDRESS}/${id}`);
      return data.image;
    };
     getNftImage(counter).then((res) => setMintedNFT(res))
  }, [mintedNFT, counter])


  const { data: match } = useContractRead(
    Arbigates__factory,
    'addressesToVerify',
    {
      args: [address],
      enabled: Boolean(address),
    }
  );

  const a = useEvent(Arbigates__factory, 'Transfer', {
    onChange: (data) => {
      console.log({ data});
      console.log("hello")
      if (data[0] === NULL_ADDRESS && data[1] === address) {
        setMinted(true);
      }
    },
  });

  const eligible = useGated({ gateId });
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {alreadySignedUp ? "You've already minted!" : 'Sign up to mint the NFT'}
      <Space h={30} />

      {/* {balanceOf && <div>you own {balanceOf.toString()}</div>} */}

      {eligible && isSignedUp && (
        <div>User is eligible. You should receive an NFT. Wait a minute...</div>
      )}
      <Button
        style={{ width: '100px' }}
        loading={isLoading}
        disabled={alreadySignedUp}
        onClick={(e) => {
          if (localStorage.getItem('minted')) {
            setAlreadySignedUp(true);
            return;
          }
          write({
            args: [address],
          });
          setIsSignedUp(true);
        }}
      >
        Sign up
      </Button>
      <Space h={30} />
      {minted && (
        <>
        {console.log({mintedNFT})}
          <Text>Token Id: {counter}</Text>
          <Image src={mintedNFT} alt={'Bob Saget'} />
        </>
      )}
    </Box>
  );
};

export default NFTs;
