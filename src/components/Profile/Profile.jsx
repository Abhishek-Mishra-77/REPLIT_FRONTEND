import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openProfileModal } from "../../store/slices/profileSlice";
import ProfileDetails from "./ProfileDetails";
import { onGetAllUsersHandler, onRemoveUserHandler } from "../../Api/auth";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import { toast } from "react-toastify";


const Profile = ({ isOpenProfileModal }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const [users, setUsers] = useState([])
    const [confirmation, setConfirmation] = useState(false);
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

        </>
    );
};

export default Profile;
