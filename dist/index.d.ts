import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface AvatarProps {
    src?: string;
    initials?: string;
    size?: "sm" | "md" | "lg";
    status?: "online" | "busy" | "away" | "offline";
}
declare function Avatar({ src, initials, size, status, }: AvatarProps): react_jsx_runtime.JSX.Element;

interface BadgeProps {
    label: string;
    color?: "primary" | "berry" | "terracotta" | "amber" | "sky" | "plum" | "sage" | "neutral" | "success" | "warning" | "error" | "info";
    variant?: "filled" | "subtle" | "outline";
    dot?: boolean;
    size?: "sm" | "md";
}
declare function Badge({ label, color, variant, dot, size, }: BadgeProps): react_jsx_runtime.JSX.Element;

interface BannerProps {
    severity?: "info" | "warning" | "error" | "success";
    title?: string;
    message: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare function Banner({ severity, title, message, action, dismissible, onDismiss, }: BannerProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "destructive";
    size?: "sm" | "md";
    iconOnly?: boolean;
    disabled?: boolean;
    loading?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
declare function Button({ variant, size, iconOnly, disabled, loading, children, onClick, style, type, ...rest }: ButtonProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
}
declare function Checkbox({ checked, indeterminate, onChange, disabled, label, ...rest }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface ContentSectionProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}
declare function ContentSection({ title, description, action, children, }: ContentSectionProps): react_jsx_runtime.JSX.Element;

type Column = {
    key: string;
    label: string;
    width?: number | string;
};
type Row = {
    id: string;
    [key: string]: React.ReactNode;
};
interface DataTableProps {
    columns: Column[];
    rows: Row[];
    selectable?: boolean;
    actions?: (row: Row) => React.ReactNode;
}
declare function DataTable({ columns, rows, selectable, actions, }: DataTableProps): react_jsx_runtime.JSX.Element;

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    color?: string;
}
declare function Divider({ orientation, color, }: DividerProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    variant?: "full" | "minimal";
}
declare function EmptyState({ icon, title, description, action, variant, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface FormSectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
declare function FormSection({ title, description, children, footer, }: FormSectionProps): react_jsx_runtime.JSX.Element;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: "default" | "search";
    size?: "sm" | "md";
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    placeholder?: string;
    prefixIcon?: React.ReactNode;
}
declare function Input({ variant, size, label, helperText, error, errorMessage, disabled, placeholder, prefixIcon, onFocus, onBlur, style, ...rest }: InputProps): react_jsx_runtime.JSX.Element;

type MenuItem = {
    label: string;
    onClick?: () => void;
    description?: string;
    shortcut?: string;
    icon?: React.ReactNode;
    destructive?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    dividerAfter?: boolean;
};
interface MenuProps {
    trigger: React.ReactNode;
    items: MenuItem[];
    align?: "left" | "right";
}
declare function Menu({ trigger, items, align, }: MenuProps): react_jsx_runtime.JSX.Element;

interface PropertyRowProps {
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
}
declare function PropertyRow({ label, value, icon }: PropertyRowProps): react_jsx_runtime.JSX.Element;

interface SegmentedControlProps {
    options: Array<{
        label: string;
        value: string;
    }>;
    activeValue: string;
    onChange: (value: string) => void;
    size?: "sm" | "md";
}
declare function SegmentedControl({ options, activeValue, onChange, size, }: SegmentedControlProps): react_jsx_runtime.JSX.Element;

interface SelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    placeholder?: string;
    variant?: "form" | "inline";
    size?: "sm" | "md";
    disabled?: boolean;
    onClick?: () => void;
}
declare function Select({ value, placeholder, variant, size, disabled, onClick, style, ...rest }: SelectProps): react_jsx_runtime.JSX.Element;

interface SettingRowProps {
    label: string;
    description?: string;
    control: React.ReactNode;
}
declare function SettingRow({ label, description, control }: SettingRowProps): react_jsx_runtime.JSX.Element;

interface TabItem {
    label: string;
    value: string;
    count?: number;
}
interface TabsProps {
    items: TabItem[];
    activeValue: string;
    onChange: (value: string) => void;
    variant?: "landing" | "bracket";
    size?: "sm" | "md";
    surface?: "light" | "dark";
}
declare function Tabs({ items, activeValue, onChange, variant, size, surface, }: TabsProps): react_jsx_runtime.JSX.Element;

interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
declare function Toggle({ checked, onChange, disabled, ...rest }: ToggleProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    content: string;
    position?: "top" | "bottom";
    children: React.ReactNode;
}
declare function Tooltip({ content, position, children, }: TooltipProps): react_jsx_runtime.JSX.Element;

export { Avatar, type AvatarProps, Badge, type BadgeProps, Banner, type BannerProps, Button, type ButtonProps, Checkbox, type CheckboxProps, type Column, ContentSection, type ContentSectionProps, DataTable, type DataTableProps, Divider, EmptyState, type EmptyStateProps, FormSection, type FormSectionProps, Input, type InputProps, Menu, type MenuItem, type MenuProps, PropertyRow, type PropertyRowProps, type Row, SegmentedControl, type SegmentedControlProps, Select, type SelectProps, SettingRow, type SettingRowProps, type TabItem, Tabs, type TabsProps, Toggle, type ToggleProps, Tooltip, type TooltipProps };
