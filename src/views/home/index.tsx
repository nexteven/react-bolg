import React from 'react';
import NavHearder from '../../commponet/hearderImage';
import FooterContent from '../../commponet/footer';

import '../../assest/css/home.less';
class Home extends React.Component {
    render() {
        return (
            <div>
                <NavHearder>
                    <div className="my-header">
                        <div className="text-content">
                            <div className="my-title">艾尔的博客</div>
                            <div className="my-introduction">写一些简单的东西自己看看</div>
                        </div>
                    </div>
                </NavHearder>
                <FooterContent />
            </div>
        );
    }
}

export default Home;
