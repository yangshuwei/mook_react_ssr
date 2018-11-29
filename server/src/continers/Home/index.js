import React, { Component } from 'react';
// import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import withStyle from '../../withStyle';
import styles from './style.css';
class Home extends Component {
    getList() {
        const { list } = this.props;
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }
    render() {
        return (
            <div className={styles.test}>
                {
                    this.getList()
                }
                <button onClick={() => { alert('click') }}>
                    click
                </button>
            </div>
        )
    }
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList()
        }
    }
}


const mapStateToProps = state => ({
    list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home,styles));
/**
 * 服务器端渲染，提前拉取数据
 * 
 */
ExportHome.loadData = (store) => {
    return store.dispatch(getHomeList())
}
export default ExportHome
