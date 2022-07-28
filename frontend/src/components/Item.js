import { useParams } from "react-router-dom";
import { Layout, Card } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const { Header, Content, Footer } = Layout;

const Item = (props) => {
    const BASE_URL = 'http://127.0.0.1:5000/api/v0/'
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const CFG = {
            _id: id
        }
        axios.post(BASE_URL+'pull_specific', CFG)
            .then((res) => {
                console.log(res);
                setData(() => res['data']['payload'])
            })
            .catch((err) => console.log(err))
    }, [id])

    return ( 
        <Layout style={{height: '100vh'}}>
            <Header><Nav /></Header>
            <Content style={{overflowY: 'auto'}}>
                    {
                        data.length === 0 ? <div>loading...</div> : (
                            <div>{data[0].name}</div>
                        )
                    }
            </Content>
            {data.length > 0 && <Footer style={{textAlign: 'center', background: '#d46b08', color: 'white'}}>Overture © 2022</Footer>}
        </Layout>
     );
}
 
export default Item;