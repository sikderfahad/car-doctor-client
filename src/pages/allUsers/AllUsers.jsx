import { Helmet } from "react-helmet";
import SpinnerCircle from "../../components/spinnerCircle/SpinnerCircle";
import useLoadData from "../../hooks/useLoadData";
import UserRow from "./UserRow";

const AllUsers = () => {
  const { data: users, refetch, isLoading } = useLoadData("/users", true);
  // console.log(users);
  return (
    <div>
      <Helmet>
        <title>Car doctor | All users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="capitalize">
              <th></th>
              <th>Profile</th>
              <th>email</th>
              <th>Joining date (m/d/y)</th>
              <th>Last login</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <SpinnerCircle />
          ) : (
            <tbody>
              {users?.success &&
                users?.data.map((user) => (
                  <UserRow key={user?._id} user={user} refetch={refetch} />
                ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
