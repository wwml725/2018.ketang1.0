import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import util from './util';
export default class PrivateRoute extends Component{
    render(){
        let {component:Component,...rest} = this.props;
;        return (
            <Route {...rest} render={(props)=>(
                util.get('User').username?<Component {...props}/>:
                    <Redirect to={'/login'}/>
            )}>
            </Route>
        )
    }
}
