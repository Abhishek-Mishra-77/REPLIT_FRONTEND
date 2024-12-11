import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../store/slices/profileSlice";
import ProfileDetails from "./ProfileDetails";
import { onGetAllUsersHandler, onRemoveUserHandler, onUpdateUserHandler } from "../../Api/auth";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import UserEditModal from "../../Modals/UserEditModal";
import { toast } from "react-toastify";


const Profile = ({ isOpenProfileModal }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const [users, setUsers] = useState([])
    const [confirmation, setConfirmation] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedId, setSelectedId] = useState("");

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

    const removeUser = async () => {
        if (selectedId && auth?.userDetails?.role === "admin" && auth?.userDetails?.id !== selectedId) {
            try {
                const response = await onRemoveUserHandler(selectedId);
                const filteredUsers = users.filter((user) => user._id !== selectedId);
                setUsers(filteredUsers);
                setConfirmation(false);
                setSelectedId("")
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            toast.warning("You cannot remove yourself")
        }
    }
    const userUpdateHandler = async () => {
        if (auth?.userDetails?.role === "admin") {

            if (!selectedUser?.name || !selectedUser?.email || !selectedUser?.role || !selectedUser?.password) {
                toast.error("Please fill all the fields");
                return;
            }

            try {
                await onUpdateUserHandler(selectedUser?._id, selectedUser);
                const updatedUsers = users.map((user) => user._id === selectedUser?._id ? selectedUser : user);
                setUsers(updatedUsers);
                setOpenEditModal(false);
                setSelectedUser(null);
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            toast.warning("You cannot update your profile")
        }
    }

    return (
        <>
            <ProfileDetails
                isOpenProfileModal={isOpenProfileModal}
                openProfileModal={openProfileModal}
                auth={auth}
                users={users}
                dispatch={dispatch}
                confirmation={confirmation}
                setConfirmation={setConfirmation}
                setSelectedId={setSelectedId}
                setSelectedUser={setSelectedUser}
                setOpenEditModal={setOpenEditModal}
            />

            {confirmation &&
                <ConfirmationModal
                    confirmation={confirmation}
                    onSubmitHandler={removeUser}
                    setConfirmation={setConfirmation}
                    setSelectedId={setSelectedId}
                    heading="Confirm User Removal"
                    message="Are you sure you want to remove this user? This action cannot be undone."
                    type="error"
                />
            }

            {openEditModal &&
                <UserEditModal
                    setOpenEditModal={setOpenEditModal}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                    userUpdateHandler={userUpdateHandler}
                />
            }

        </>
    );
};

export default Profile;
