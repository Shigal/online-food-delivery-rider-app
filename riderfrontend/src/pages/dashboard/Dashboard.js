import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import {fetchUserData, updateProfile} from '../../services/authService'
import { Link, useNavigate, useParams } from "react-router-dom";
import {EditProfile} from "./EditProfile";
import { Layout, Button, Menu, Avatar, Typography, Switch, Image, Descriptions, Table, Tag, Space, Modal, Form, Input } from 'antd';
import { OrderDetails } from "./OrderDetails";


const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;



export const Dashboard = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [form] = Form.useForm();
    const {id} = useParams();
    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [selectedMenuItem, setSelectedMenuItem]= useState('dashboard');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeSwitch = () => {
        // set rider as active
    }

    const onFinish = () => {
        // handle submit form
    }


    useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
        }).catch((e) => {
            localStorage.clear();
            navigate("/");
        })
    }, [])

    console.log("response.data->", );

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    const handleUpdate = (e) => {

        try{
            updateProfile(data, data.id);
            setData({...data, [e.name]: e.value})
        } catch(error){
            console.log(error);
        }
    }


    const componentsSwitch = (key) => {
        switch(key){
            case 'dashboard': 
                return(
                    <>
                    <Descriptions title="User Info" >
                            <Descriptions.Item label="First Name">{data && `${data && data.firstName}` }</Descriptions.Item>
                            <Descriptions.Item label="Last Name">{data && `${data && data.lastName}` }</Descriptions.Item>
                            <Descriptions.Item label="Email">{data && `${data && data.email}` }</Descriptions.Item>
                            <Descriptions.Item label="Contact">{data && `${data && data.contact}` }</Descriptions.Item>
                            <Descriptions.Item label="License">{data && `${data && data.license}` }</Descriptions.Item>
                            <Descriptions.Item label="id">{data && `${data && data.id}` }</Descriptions.Item>
                            <Descriptions.Switch label="Active"><Switch checked="false" onChange={onChangeSwitch} /></Descriptions.Switch>
                        </Descriptions>

                        <div>
                
                            </div>
                        </>
                );
            case 'orders':
                return(
                    // <Link to="/order"><OrderDetails/></Link>
                    <>
                    <OrderDetails/>
                    </>
                );
            case 'profile':
                return(
                    <>
                    <EditProfile data={data}/>
                    {/* <Link to={`/update-profile/${data.data.id}`}></Link> */}
                    </>
                );
        }
    }

    return(
        <div>

            <Layout>
            <Header>
            <Title level={3} style={{color: 'white', padding: '10px'}}>
            {data && `${data.firstName} ${data.lastName}`}
                <Button type="primary" style={{float: 'right'}} onClick={logout}>Logout</Button>
                </Title>
            {/* <Avatar style={{float:'right'}} size={64} src='./delivery.png' /> */}
            </Header>
                <Layout>
                <Sider>
                    <Menu selectedKeys={selectedMenuItem} onClick={(e) => 
        setSelectedMenuItem(e.key)} mode="inline">
                        <Menu.Item key='dashboard'>
                            <Avatar style={{float:'left', padding: '5px'}} size={30} src='./dashboard.png'/>
                            <Title level={5} >Dashboard</Title>
                        </Menu.Item>
                            <Menu.Item key="orders" >
                            {/* <Image width={40} height={40}  src="./restaurant.png"/> */}
                            <Avatar style={{float:'left', padding: '5px'}} size={30} src='./restaurant.png' />
                            {/* <Title level={5}><Link to="/order">Orders</Link></Title> */}
                            <Title level={5}>Order Details</Title>
                                </Menu.Item>
                                
                            <Menu.Item key="profile">
                            <Avatar style={{float:'left', padding: '5px'}} size={30} src='./customer.png' />
                            <Title level={5}>Profile</Title>
                            </Menu.Item>
                    </Menu>
                    
                </Sider>
                    <Content style={{padding: '0 50px'}}>
                        <div>
                            {componentsSwitch(selectedMenuItem)}
                        </div>
                        </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
       
    )
    
}

