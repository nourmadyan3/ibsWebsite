import React from 'react';
//import Link from 'next/link';

interface TextWithLinkProps {
  text: string;
  text2: string;
  href: string;
}

const TextWithLink: React.FC<TextWithLinkProps> = ({ text, text2, href }) => {
  return (
    <p className='text-gray-700 dark:text-[#EFEFEF]'>
      <a
        href={href}
      className="text-[#ed253c] hover:text-[#ed253c] cursor-default"
        >
        {text} <span className='text-[#828282] text-sm hover:text-[#ed253c] cursor-default'>{text2 }</span>    {/* Both texts are now inside the link */}
      </a>
    </p>
  );
};

export default TextWithLink; 