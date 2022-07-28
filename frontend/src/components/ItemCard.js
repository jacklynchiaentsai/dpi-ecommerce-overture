import { Image, Divider } from "antd";
import { Link } from "react-router-dom";
import { StepForwardOutlined } from "@ant-design/icons";

const ItemCard = ({item, category, gender}) => {
    // let onClickUrl = `/market/${item._id}`;
    let onClickUrl = item.url;
    return ( 
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Image src={item.image_url} width={'40%'}/>
            <div style={{marginLeft: 20, width: '60%', scroll: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>{item.name} - {item.price}</h2>
                    {/* <Link to={onClickUrl}>
                        <StepForwardOutlined style={{fontSize: "1.4rem"}} />
                    </Link> */}
                    <a href={onClickUrl} target="_blank"><StepForwardOutlined style={{fontSize: "1.4rem"}} /></a>
                </div>
                
                <Divider plain>Description</Divider>
                <p>
                    {item.description.length > 400 ? item.description.substring(0,400)+"..." : item.description}
                </p>
                <Divider plain>Sustainability</Divider>
                <p>
                    {item.sustainability.length > 400 ? item.sustainability.substring(0,400)+"..." : item.sustainability}
                </p>
            </div>
        </div>
     );
}
 
export default ItemCard;