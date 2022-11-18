import React, { useRef } from 'react';
import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('grid', 'container')}>
                <div className={cx('logo')}>
                    <img src={images.logo1} alt="" />
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('about')}>
                    <div className={cx('group')}>
                        <Button to="/">Về GrabFood</Button>
                        <Button to="/">Về Grab</Button>
                        <Button to="/">Blog</Button>
                    </div>
                    <div className={cx('group')}>
                        <Button to="/">Mở quán trên GrabFood</Button>
                        <Button to="/">Trở thành tài xế Grab</Button>
                    </div>
                    <div className={cx('group')}>
                        <Button to="/">Trung tâm hỗ trợ</Button>
                        <Button to="/">Câu hỏi thường gặp</Button>
                    </div>
                    <div className={cx('group')}>
                        <Button to="/">
                            <img src={images.facebook} alt="" />
                        </Button>
                        <Button to="/">
                            <img src={images.instagram} alt="" />
                        </Button>
                        <Button to="/">
                            <img src={images.twitter} alt="" />
                        </Button>
                    </div>
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('stores-terms')}>
                    <div className={cx('download')}>
                        <img src={images.chplay} alt="" />
                        <img src={images.appstore} alt="" />
                    </div>
                    <div className={cx('copyright')}>
                        <Text>© 2022 Grab</Text>
                        <Button to="/">Câu hỏi thường gặp</Button>
                        <Text>•</Text>
                        <Button to="/">Chính sách bảo mật</Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;