import { FiMail } from 'react-icons/fi';

import {
  SupportContactContainer,
  SupportContactLogo,
  SupportContactLink,
} from './SupportContact.styled';

export const SupportContact = () => {
  return (
    <SupportContactContainer>
      <SupportContactLogo>
        <FiMail />
      </SupportContactLogo>
      <SupportContactLink
        href="mailto:iamdorohin@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        Send mail to support
      </SupportContactLink>
    </SupportContactContainer>
  );
};
