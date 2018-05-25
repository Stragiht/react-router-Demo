import React from 'react';

// import history from './../history';
import './../assets/css/login.css'
class Login extends React.Component {
  constructor (){
    super();
    this.state = {
      userName:'',
      passWord:''
    }
  }
  handelParams(e){
    let type = e.target.name;
    let value =  e.target.value;
    this.setState({
        [type]:value
    })

  }
  login(){
   // history.push('/app/product');
    this.props.history.push( '/app/product/'+2  )
  }
  render () {
    return (
        <div className="login">
          <div className="box">
            <input type="text" placeholder='请输入用户名' name='userName' onChange= { this.handelParams.bind(this)}/>
            <input type="text" placeholder='请输入密码'  name='passWord' onChange= { this.handelParams.bind(this)}/>
            <button onClick={ this.login.bind(this)}>登录</button>
          </div>
        </div>
    )
  }
}
export default  Login