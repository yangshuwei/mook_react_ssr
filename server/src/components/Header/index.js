import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from './store/';
import withStyle from '../../withStyle';
import styles from './style.css'
class Header extends Component {
  render() {
    const { login, handleLogin ,handleLogout } = this.props;
    return (
      <div className={styles.test}>
        <Link to="/">首页</Link><br />
        {
          login ? <Fragment>
            <div onClick={handleLogout}>退出</div><br />
            <Link to="/translation">翻译列表</Link>
          </Fragment> : <div onClick={handleLogin}>登录</div>
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  login: state.header.login
})
const mapDispatchToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})
export default connect(mapState, mapDispatchToProps)(withStyle( Header , styles) );

