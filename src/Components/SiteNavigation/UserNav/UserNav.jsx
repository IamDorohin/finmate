import {
  UserNavContainer,
  UserNavMenu,
  UserNavList,
  UserNavItem,
  UserNavLink,
  UserNavLinkDescription,
} from './UserNav.styled';

const menuItemsContent = [
  { href: '/balance', text: 'Balance', status: 'true' },
  { href: '/budget', text: 'Budget', status: 'true' },
  { href: '/stocks', text: 'Stocks', status: 'false' },
];

export const UserNav = () => {
  return (
    <UserNavContainer>
      <UserNavMenu>
        <UserNavList>
          {menuItemsContent.map(({ href, text, status }) => (
            <UserNavItem key={text}>
              <UserNavLink to={href} status={status}>
                {text}
                {status === 'false' && (
                  <UserNavLinkDescription>Coming soon</UserNavLinkDescription>
                )}
              </UserNavLink>
            </UserNavItem>
          ))}
        </UserNavList>
      </UserNavMenu>
    </UserNavContainer>
  );
};
