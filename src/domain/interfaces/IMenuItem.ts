import React from 'react';

export interface IMenuItem {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
}