import { Layout, Menu, SubMenu } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Nav';

import img4 from "../static/4.jpg"
import img6 from "../static/6.jpg"
import img9 from "../static/9.jpg"
import img11 from "../static/11.jpg"
import img12 from "../static/12.jpg"
import img15 from "../static/15.jpg"


const { Header, Content, Footer } = Layout;

const contentStyle = {
    height: '100%',
    display: 'flex'
};

const Home = () => {

    const [firstImgIdx, setFirstImgIdx] = useState(0);
    const [secondImgIdx, setSecondImgIdx] = useState(0);

    const firstImgs = [img4, img6, img9];
    const secondImgs = [img11, img12, img15];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFirstImgIdx((org) => (org+1) % 3)
    //     }, 1000);
        
    //     const secondInterval = setInterval(() => {
    //         setSecondImgIdx((org) => (org+1) % 3)
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval);
    //         clearInterval(secondInterval);
    //     }
    // }, [])
    return ( 
        <Layout style={{height: '100vh'}}>
            <Header>
                <Nav />
            </Header>
            <Content className="site-layout" style={{background: '#fff'}}>
                <div style={{height: '100%'}}>
                    <div style={contentStyle}>
                        <div style={{
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                width: "50%",
                                height: "100%",
                                backgroundImage: `url(${img4})`
                            }} >
                        <div style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            height: '100%',
                            color: "#fff"
                        }}>
                            <div style={{background: '#595959', padding: "12px 28px", borderRadius: "5px"}}>
                                <div style={{textAlign: 'center', fontSize: '2.75rem'}}>Overture</div>
                                <div>Eco-Friendly Ecommerce Aggregator</div>
                            </div>
                        </div>
                        </div>
                        <div style={{
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                width: "50%",
                                height: "100%",
                                backgroundImage: `url(${img12})`
                            }} >
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{textAlign: 'center', background: '#d46b08', color: 'white'}}>Overture © 2022</Footer>
        </Layout>
     );
}
 
export default Home;