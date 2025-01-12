import { TbPasswordUser } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IntlShape } from "react-intl";
import { IMenuItem } from "../../domain/interfaces/IMenuItem";

export const createMenuList = (intl: IntlShape): IMenuItem[] => [
  {
    icon: <TbPasswordUser />,
    text: intl.formatMessage({ id: "menu.item.changePassword" }),
  },
  {
    icon: <RiLogoutCircleLine />,
    text: intl.formatMessage({ id: "menu.item.logout" }),
  },
];
