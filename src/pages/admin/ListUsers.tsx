import { useEffect, useState } from "react";
import { getUsersAction } from "../../actions/users.action";
import { CardUser } from "../../components/CardUser";
import { UserI } from "../../interfaces/User.interface";

export const ListUsers = () => {
  const [users, setUsers] = useState<UserI[]>([]);

  const getUsers = async () => {
    const data = await getUsersAction();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Listado de usuarios</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-1">
        {users.map((user: UserI) => (
          <CardUser user={user} key={user.id}/>
        ))}
      </div>
    </div>
  );
};
