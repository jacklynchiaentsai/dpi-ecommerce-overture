import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DoubleLeftOutlined } from '@ant-design/icons';
const {SubMenu} = Menu;

const Nav = () => {
    return ( 
        <Menu theme="dark" mode="horizontal">
            <Menu.Item>
                <Link to="/"><DoubleLeftOutlined /></Link>
            </Menu.Item>
            <SubMenu title={"Mens"} key="Mens" style={{margin: "0px 20px"}}>
                <Menu.Item key="men1">
                    <Link to="/men/pants">Pants</Link>
                </Menu.Item>
                <Menu.Item key="men2">
                    <Link to="/men/shorts">Shorts</Link>
                </Menu.Item>
                <Menu.Item key="men3">
                    <Link to="/men/sweatshirts">Sweatshirts</Link>
                </Menu.Item>
                <Menu.Item key="men4">
                    <Link to="/men/tees">Tees and Tanks</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu title={"Womens"} key="Womens" style={{margin: "0px 20px"}}>
                <Menu.Item key="women1">
                    <Link to="/women/dresses">Dresses</Link>
                </Menu.Item>
                <Menu.Item key="women2">
                    <Link to="/women/shorts">Shorts</Link>
                </Menu.Item>
                <Menu.Item key="women3">
                    <Link to="/women/sweatpants">Sweatpants</Link>
                </Menu.Item>
                <Menu.Item key="women4">
                    <Link to="/women/tees">Tees and Tanks</Link>
                </Menu.Item>
                <Menu.Item key="women5">
                    <Link to="/women/pants">Pants</Link>
                </Menu.Item>
                <Menu.Item key="women6">
                    <Link to="/women/rompers">Rompers & Jumpsuits</Link>
                </Menu.Item>
                <Menu.Item key="women7">
                    <Link to="/women/skirts">Skirts</Link>
                </Menu.Item>
            </SubMenu>
            {/* <SubMenu title={"Featured"} key="Featured" style={{margin: "0px 20px"}}>
                <Menu.Item key="1">
                    <Link to="/men/pants">Pants</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/men/shorts">Shorts</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/men/sweatshirts">Sweatshirts</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/men/tees">Tees and Tanks</Link>
                </Menu.Item>
            </SubMenu> */}
        </Menu>
     );
}
 
export default Nav;