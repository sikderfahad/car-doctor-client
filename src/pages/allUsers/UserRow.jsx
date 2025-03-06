import { formateDateTime, getTimeAgo } from "../../hooks/timeStampValidation";
import updateUserRole from "../../hooks/updateUserRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";

const UserRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { role } = useAuth();
  // console.log(user);

  const roleActionBtn = [
    { role: "user", style: "btn btn-soft btn-primary capitalize " },
    {
      role: "officer",
      style: "btn btn-soft btn-success capitalize ",
    },
    {
      role: "admin",
      style: "btn btn-soft btn-secondary capitalize ",
    },
  ];

  const handleUpdateToAdmin = (newRole) => {
    // console.log(user, newRole);
    const updateRoleProps = {
      user,
      currentUserRole: role,
      newRole,
      axiosSecure,
      refetch,
    };
    updateUserRole(updateRoleProps);
  };
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-20 w-20">
              <img src={user?.photoURL} alt={user?.displayName + " photo"} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold">{user?.displayName}</div>
            {user?.role !== "user" && (
              <div
                className={`badge badge-soft ${
                  user?.role === "admin"
                    ? "badge-success"
                    : user?.role === "officer"
                    ? "badge-primary"
                    : ""
                } `}
              >
                {user?.role}
              </div>
            )}
          </div>
        </div>
      </td>
      <td>
        <span>{user?.email}</span>
      </td>
      <td>
        <span>{formateDateTime(user?.metadata?.createdAt)}</span>
      </td>
      <td>
        <span>{getTimeAgo(user?.metadata?.lastLoginAt)}</span>
      </td>
      <th>
        <div className="flex flex-col gap-3">
          {roleActionBtn
            .filter((btn) => btn.role !== user?.role)
            .map((btn, idx) => (
              <button
                onClick={() => handleUpdateToAdmin(btn.role)}
                key={idx}
                className={btn.style}
              >
                {btn.role}
              </button>
            ))}
        </div>
      </th>
    </tr>
  );
};

export default UserRow;
