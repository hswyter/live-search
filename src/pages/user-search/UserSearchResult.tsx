import React, {
  FunctionComponent,
  useContext,
} from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import Card from "../../components/ui/molecules/card/Card";
import UserSearchContext from "../../components/context/UserSearchContext";

const UserSearchResult: FunctionComponent = () => {
  const { t } = useTranslation();
  const { users } = useContext(UserSearchContext);

  return (
    <div className="flex flex-col gap-4">
      <div className="my-4 font-medium">{t("users")}</div>
      <div className="container m-auto grid grid-cols-3 gap-4">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <Card
              key={user.id}
              title={`${user.firstName} ${user.lastName}`}
              subtitle={`${t("birthday")}: ${dayjs(user.birthDate).format("DD.MM.YYYY")}`}
              topElement={<img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="w-40" />}
            />
          ))
        ) : (
          <div className="col-span-3">{t("notFound")}</div>
        )}
      </div>
    </div>
  );
};

export default UserSearchResult;