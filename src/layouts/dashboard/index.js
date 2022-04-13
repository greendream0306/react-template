import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';

import DasboardBavbar from './DashboardNavbar';

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
})

export default function DashboardLayout() {
    const [open, setOpen] = useState(false);

    return (
        <RootStyle>
            <DasboardBavbar onOpenSidebar={() => setOpen(true)} />
        </RootStyle>
    );
}