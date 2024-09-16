'use client';

import { deleteAuction } from '@/app/actions/auctionActions';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  id: string;
}

const DeleteButton = ({id} : Props) => {
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const doDelete = () => {
    setloading(true);
    deleteAuction(id).then(res => {
      if (res.error) throw res.error;

      router.push('/');
    }).catch(error => {
      toast.error(`${error.status} ${error.message}`);
    }).finally(() => setloading(false));
  }
  
  return (
    <Button color='failure' isProcessing={loading} onClick={doDelete}>
      Delete Auction
    </Button>
  )
}

export default DeleteButton;
