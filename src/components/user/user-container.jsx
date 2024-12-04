import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entities/users/users-slice";
import {User} from "../user/user";

export const UserContainer = (({ id }) => {
    const user = useSelector((state) => selectUserById(state, id));

    if (!user) {
        return null;
    }

    const { name } = user;

    return <User name={name} />;
});
