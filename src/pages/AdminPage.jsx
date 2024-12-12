import React from 'react'
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';
import Admin from '../components/Admin/Admin';

const AdminPage = () => {
    const { isOpenProfileModal } = useSelector((state) => state.profile);
    return (
        <div className="p-12 text-white">
            <Admin />
            {isOpenProfileModal && <Profile isOpenProfileModal={isOpenProfileModal} />}
        </div>
    )
}

export default AdminPage