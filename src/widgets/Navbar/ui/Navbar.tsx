import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
