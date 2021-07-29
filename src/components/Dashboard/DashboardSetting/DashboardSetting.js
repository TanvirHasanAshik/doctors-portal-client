import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DashboardSetting = () => {
    const style = {
        backgroundColor: '#f3fcfc',
        height: '100%'
    }
    return (
        <div style={style} className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className=" text-center col-md-5 mt-5 pt-5">
                <h5 className="text-success">No Setting Data Available Yet</h5>
            </div>
        </div>
    );
};

export default DashboardSetting;