import React from 'react';
import Link from 'next/link';

interface TextWithLinkProps {
  text: string;
  linkText: string;
  href: string;
}

const TextWithLink: React.FC<TextWithLinkProps> = ({ text, linkText, href }) => {
  return (
    <p>
      {text}
      <Link href={href} className="text-blue-500 hover:underline" as="a">
        {linkText}
      </Link>
    </p>
  );
};

export default TextWithLink; 