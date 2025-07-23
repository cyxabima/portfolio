import { JSX } from 'react';
import { highlight } from 'sugar-high';
import Counter from '@/components/counter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import React from 'react';
import Image from 'next/image';

// Explicitly type props
type CodeProps = React.HTMLAttributes<HTMLElement> & {
    children: string;
};

function Code({ children, ...props }: CodeProps) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Components mapping
const components = {
    code: Code,
    Counter,
    Image
};

// MDX Content renderer
export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
