import React from "react";
import {  Menu, Layout } from 'antd';


function Nav() {
    const { Header } = Layout;
    return(
        <div>
        <Header>
            <div className="logo" />
            <h1 className="page-logo">Friends</h1>
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={['0']}>
                {new Array(0).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                })}
            </Menu>
        </Header>
    </div>
    );
}

export default Nav
