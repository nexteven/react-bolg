import React, { PropsWithChildren } from 'react';
import 'antd/dist/antd.css';
import '../../assest/css/hearderImage.less';
interface Props {
    children?: React.ReactNode;
}

const NavHearder: React.FC<Props> = ({ children }) => {
    return <div className="hearder">{children}</div>;
};

export default NavHearder;
