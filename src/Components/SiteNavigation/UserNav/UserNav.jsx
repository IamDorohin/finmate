import {
  UserNavContainer,
  UserNavMenu,
  UserNavList,
  UserNavItem,
  UserNavLink,
} from './UserNav.styled';

const menuItemsContent = [
  { href: '/balance', text: 'Balance' },
  { href: '/budget', text: 'Budget' },
  { href: '/stocks', text: 'Stocks' },
];

export const UserNav = () => {
  return (
    <UserNavContainer>
      <UserNavMenu>
        <UserNavList>
          {menuItemsContent.map(({ href, text }) => (
            <UserNavItem key={text}>
              <UserNavLink to={href}>{text}</UserNavLink>
            </UserNavItem>
          ))}
        </UserNavList>
      </UserNavMenu>
    </UserNavContainer>
  );
};
