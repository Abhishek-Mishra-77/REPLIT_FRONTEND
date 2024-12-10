import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../store/slices/profileSlice";
import ProfileDetails from "./ProfileDetails";

const Profile = ({ isOpenProfileModal }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);

    return (
        <>
            <ProfileDetails
                isOpenProfileModal={isOpenProfileModal}
                openProfileModal={openProfileModal}
                auth={auth}
                dispatch={dispatch}
            />
        </>
    );
};

export default Profile;
