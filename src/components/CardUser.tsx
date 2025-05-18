import { UserI } from "../interfaces/User.interface";

interface Props {
  user: UserI;
}

export const CardUser = ({user}:Props) => {
  return (
    <div className="col pt-4">
      <div className="card text-center">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-Background.png"
              alt={user.name}
              className="rounded-circle mb-3"
              width="100"
            />
          </div>
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text text-muted">{user.email}</p>
          <p className="card-text text-muted">{user.role}</p>
        </div>
      </div>
    </div>
  );
};
