import { Layout, Menu} from 'antd';
import './index.css'
const { Header} = Layout;

function Head(){
    return(
        <div>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              {new Array(15).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
              })}
            </Menu>
            </Header>  
        </div>
    )
}

export default Head