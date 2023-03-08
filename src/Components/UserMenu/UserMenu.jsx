import {
  UserMenuContainer,
  UserMenuNav,
  UserMenuList,
  UserMenuItem,
  UserMenuLink,
} from './UserMenu.styled';

const menuItemsContent = [
  { href: '/balance', text: 'Balance' },
  { href: '/budget', text: 'Budget' },
  { href: '/stocks', text: 'Stocks' },
];

export const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserMenuNav>
        <UserMenuList>
          {menuItemsContent.map(({ href, text }) => (
            <UserMenuItem key={text}>
              <UserMenuLink to={href}>{text}</UserMenuLink>
            </UserMenuItem>
          ))}
        </UserMenuList>
      </UserMenuNav>
    </UserMenuContainer>
  );
};
