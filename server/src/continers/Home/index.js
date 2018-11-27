import React ,{ Component} from 'react';
// import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from './store/actions'
class Home extends Component{
    getList(){
        const { list } = this.props;
        return list.map(item=> <div key={item.id}>{item.labelName}</div>)
    }
    render(){
        return (
            <div>
                {/* <Header/> */}
                {
                    this.getList()
                    // this.props.list.map((item)=>{
                    //     return <div key={item.id}>{item.labelName}</div>
                    // })
                }
                <button onClick={()=>{alert('click')}}>
                    click
                </button>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.list.length){
            this.props.getHomeList()
        }
    }
}
/**
 * 服务器端渲染，提前拉取数据
 * 
 */
Home.loadData = (store) => {
    return store.dispatch(getHomeList())
}
 const mapStateToProps = state => ({
    list:state.home.newsList
})
 const mapDispatchToProps = dispatch => ({
   getHomeList (){
    dispatch(getHomeList())
   }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
