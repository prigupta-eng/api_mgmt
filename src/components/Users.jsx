import { useEffect } from "react";
import { useApi } from "../api/useApi";
import { getUsers } from "../services/users.service";

export default function Users() {
  const { data, loading, error, execute } = useApi(getUsers);

  useEffect(() => {
    execute();
  }, [execute]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
