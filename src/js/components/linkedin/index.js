import React, {Component} from 'react';

class LinkedinApp extends Component {
    render() {
        const clientID = '77160c0wcgyrxz';
        const root = location.origin+'/auth';
        const authurl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientID}&redirect_uri=${root}&scope=r_basicprofile`;
        return (
            <div className="App">
                <a href={authurl}>linkedin link</a>
            </div>
        );
    }
}


export default LinkedinApp;