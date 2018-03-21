import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../actions';
import _ from 'lodash';


const table_margin = {
    margin: 'auto',
};

class Landing extends Component {

    componentDidMount() {
        this.props.loadUser();

    }

    renderUsers() {
        return _.map(this.props.user, myUsers => {
            return (<li> {myUsers._id} {myUsers.firstname} {myUsers.lastname} </li>)
        })

    };

    render() {
        return (
            <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Basic MERN Program</title>
</head>
<body>
<table width="50%" border="0" cellspacing="0" cellpadding="10" style={table_margin}>
  <tr>
    <th colspan="3">Basic Program</th>
  </tr>
    <tr>
  <th colspan="3"><ul> 
  <li> <Link to="/reactrouter/restfulrouting">Add A Post</Link> </li> 
 <li> <Link to="reactrouter/:id/show">Show A Post</Link> </li> </ul> </th>
  </tr>
  <tr>
    <td>User ID:</td>
    <td colspan="2">
    <ul>
    {this.renderUsers()}
    </ul>
   </td>
  </tr>
 
</table>

</body>
</html>

        ) //end of return
    } //end of render 
} //end of component 

function mapStateToProps(state) {
    return { user: state.user };
}
export default connect(mapStateToProps, { loadUser })(Landing);
