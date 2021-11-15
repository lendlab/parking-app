import React from "react";
import { useLogout } from "../graphql/auth/custom-hooks";
import Button from "./Button";

const Logout = () => {
  const [logout, { loading }] = useLogout();

  return (
    <Button
      loading={loading}
      onPress={async () => {
        return logout({
          update: (cache) => {
            cache.evict({ fieldname: "me" });
          },
        });
      }}
      title="Cerrar sesión"
    ></Button>
  );
};

export default Logout;
