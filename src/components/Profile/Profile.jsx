import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../store/slices/profileSlice";
import ProfileDetails from "./ProfileDetails";
import { onGetAllUsersHandler } from "../../Api/auth";

const Profile = ({ isOpenProfileModal }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (isOpenProfileModal && auth?.userDetails?.role === "admin") {
            (async () => {
                try {
                    const response = await onGetAllUsersHandler();
                    setUsers(response?.users)
                }
                catch (error) {
                    console.log(error)
                }
            })();
        }
    }, [isOpenProfileModal]);


    return (
        <>
            <ProfileDetails
                isOpenProfileModal={isOpenProfileModal}
                openProfileModal={openProfileModal}
                auth={auth}
                users={users}
                dispatch={dispatch}
            />
        </>
    );
};

export default Profile;
