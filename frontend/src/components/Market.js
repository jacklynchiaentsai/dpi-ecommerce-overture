import axios from "axios";
import { useState, useEffect } from "react";
import { Layout, Card } from "antd";
import ItemCard from "./ItemCard";
import Nav from "./Nav";
const { Header, Content, Footer } = Layout;

const Market = ({category, gender}) => {
    const BASE_URL = 'http://127.0.0.1:5000/api/v0/'

    const [data, setData] = useState([]);

    useEffect(() => {
        const CFG = {
            category: category,
            gender: gender
        }
        axios.post(BASE_URL+'pull_category', CFG)
        .then((res) => {
          console.log(res);
          setData(() => res['data']['payload'])
        })
        .catch((err) => console.log(err))
    }, [category, gender])
    return (
        <Layout style={{height: '100vh'}}>
            <Header><Nav /></Header>
            <Content style={{overflowY: 'auto'}}>
                <Card title={<h1 style={{textAlign: 'center', fontFamily: "Lucida Console"}}>{`${category} ${gender}`}</h1>} style={{margin: 28}}>
                    {data.map((item) => {
                        return (
                            <Card.Grid style={{width:"50%"}}>
                                <ItemCard item={item} category={category} gender={gender} />
                            </Card.Grid>
                        )
                    })}
                </Card>
                {data.length > 0 && <Footer style={{textAlign: 'center', background: '#d46b08', color: 'white'}}>Overture © 2022</Footer>}
            </Content>
        </Layout>
     );
}

export default Market;