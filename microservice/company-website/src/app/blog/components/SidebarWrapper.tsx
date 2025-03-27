'use client';

import { useEffect } from 'react';
import { initSidebarScroll } from '../scripts/sidebar';

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initSidebarScroll();
    }, []);

    return children;
}