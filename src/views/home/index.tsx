import React from 'react';
import NavHearder from '../../commponet/hearderImage';
import FooterContent from '../../commponet/footer';
import { homeInfoSearch } from '../../hooks/homeInfoSearch';
import '../../assest/css/home.less';
import httpRequest from '../../axios/axios';

interface data {
    title: String;
    describe: String;
}

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '艾尔的博客',
            describe: '写自己的东西'
        };
        // 不要在这里调用 this.setState()
        this.searchData();
    }
    searchData = () => {
        httpRequest.post('/api/get_describe').then((res) => {
            this.setState({ title: res.data.data.title });
            this.setState({ describe: res.data.data.describe });
        });
    };
    render() {
        return (
            <div>
                <NavHearder>
                    <div className="my-header">
                        <div className="text-content">
                            <div className="my-title">{this.state.title}</div>
                            <div className="my-introduction">{this.state.describe}</div>
                        </div>
                    </div>
                </NavHearder>
                <FooterContent />
            </div>
        );
    }
}

export default Home;
