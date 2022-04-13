import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';

import Iconify from '../../components/Iconify';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const DRAWER_WIDTH = 280;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
}));

export default function DashboardNavbar({ onOpenSiderbar }) {
    return (
        <RootStyle>
            <ToolbarStyle>
                <IconButton onClick={onOpenSiderbar} sx={{ mr: 1, color: 'Text.primary', display: { lg: 'none' } }}>
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>
            </ToolbarStyle>
        </RootStyle>
    );
}