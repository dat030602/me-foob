import React from 'react';
import styles from './Contract.module.scss';

import classNames from 'classnames/bind';
import ListProduct from '~/components/Popper/ListProduct';
import Text from '~/components/Text';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Contract() {
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Hợp đồng</h1>
                </div>
                <div className={cx('content')}>
                    <Text>Mã hợp đồng: </Text>
                    <Text>Ngày lập hợp đồng: </Text>
                    <Text>Mã số thuế: </Text>
                    <Text>Người đại diện: </Text>
                    <Text>Số chi nhánh đăng ký: </Text>
                    <Text>Địa chỉ các chi nhánh: </Text>
                    <Text>Số tài khoản: </Text>
                    <Text>Ngân hàng: </Text>
                    <Text>Chi nhánh ngân hàng: </Text>
                </div>
                <div className={cx('btn-submit')}>
                <Button className={cx('btn')} to="/checkout">
                        Gia hạn
                    </Button>
                    <Button className={cx('btn')} to="/checkout">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Contract;
