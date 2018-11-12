import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux'
const Home = (props) =>{
    return (
        <div>
            <Header/>
            <div>This is {props.name}!</div>
            <button onClick={()=>{alert('click')}}>
                click
            </button>
        </div>
    )
}
 const mapDispatchToProps = state => ({
    name:state.name
})
export default connect(mapDispatchToProps,null)(Home)
