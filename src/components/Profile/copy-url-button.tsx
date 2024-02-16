'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  url: string;
};

const CopyURLButton = ({ url }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      setCopied(false);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  return (
    <Button
      variant="outline"
      className={`border-none rounded-md bg-violet text-claro hover:bg-lightViolet hover:text-oscuro ${
        copied && 'opacity-50 pointer-events-none'
      }`}
      onClick={() => copyToClipboard(url)}
    >
      {copied ? 'URL Copied!' : 'Copy URL'}
    </Button>
  );
};

export default CopyURLButton;
