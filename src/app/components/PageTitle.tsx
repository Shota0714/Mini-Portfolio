'use client';

import { useEffect } from 'react';

// receive a title prop as a string
export default function PageTitle({ title }: { title: string }) {
    // update the page title every time the title prop value changes
    useEffect(() => {
        document.title = `${title} - Portfolio`
    },[title]);
    return null;
}