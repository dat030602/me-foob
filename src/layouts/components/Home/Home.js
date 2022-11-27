import styles from './Home.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import { ListItem } from '~/components/Popper';
import Why from './Why';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home({ children }) {
    const fetchData = async () => {
        const newData = await fetch('http://localhost:5000/home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => {
            console.log('thanh cong')
            return res.json()
        });
        console.log(newData);
    };

    return (
        <>
            <div className={cx('background')}>
                <div
                    className={cx('background-image')}
                    style={{ backgroundImage: `url("${images.background}")` }}
                ></div>
                <div className={cx('background-image-border')}></div>
            </div>

            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem title="There's something for everyone!" hint />
            </div>
            <div className={cx('container', 'grid')}>
                <Why />
            </div>
            <Button onClick={fetchData}>hihi</Button>
        </>
    );
}

export default Home;
