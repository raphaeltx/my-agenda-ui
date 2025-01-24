import { TbPasswordUser } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IntlShape } from "react-intl";
import { IMenuItem } from "../../domain/interfaces/entities/IMenuItem";
import { IAuthContextProps } from "../../domain/interfaces/properties/IAuthContextProps";

// TODO: Refactor

class MenuListFactory {
  private intl: IntlShape;
  private useAuth: IAuthContextProps;

  constructor(intl: IntlShape, useAuth: IAuthContextProps) {
    this.intl = intl;
    this.useAuth = useAuth;
  }

  getChangePasswordMenuItem(): IMenuItem {
    return {
      icon: <TbPasswordUser />,
      text: this.intl.formatMessage({ id: "menu.item.changePassword" }),
      onClick: () => {
        console.log("Change Password");
      },
    };
  }

  getLogoutMenuItem(): IMenuItem {
    return {
      icon: <RiLogoutCircleLine />,
      text: this.intl.formatMessage({ id: "menu.item.logout" }),
      onClick: () => {
        this.useAuth.logout()
      },
    };
  }

  createMenuList(): IMenuItem[] {
    return [this.getChangePasswordMenuItem(), this.getLogoutMenuItem()];
  }
}

export default MenuListFactory;
