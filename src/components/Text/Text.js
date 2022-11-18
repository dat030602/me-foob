import React from 'react';
import styles from './Text.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Text({ children, none=false, green=false, className }) {
    const classes = cx('wrapper', {
        [className]: className,
        none,
        green,
    });
    return <span className={classes}>{children}</span>;
}

export default Text;