import "./_menu-item.scss";

interface MenuItemProps{
  itemName?: string;
  itemRouter?: string;
  singlLink?: boolean;
};

export const MenuItem = ({
    itemName = '',
    itemRouter = '',
    singlLink = false,
    ...props
  }: MenuItemProps) => {
    return (
     <>
      {!singlLink ? (
          <li className="main__menu--item">
            <a className="main__menu--link" href={itemRouter}>
              {itemName}
            </a>
          </li>
        ) : (
          <a className="main__menu--link single--link" href={itemRouter}>{itemName}</a>
        )}
     </>

    );
};

export default MenuItem;