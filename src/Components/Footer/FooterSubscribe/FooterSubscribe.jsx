import { BsSendFill } from 'react-icons/bs';
import {
  FooterSubscribeContainer,
  FooterSubscribeForm,
  FooterSubscribeLabel,
  FooterSubscribeTitle,
  FooterSubscribeInput,
  FooterSubscribeButton,
} from './FooterSubscribe.styled';

export const FooterSubscribe = () => {
  return (
    <FooterSubscribeContainer>
      <FooterSubscribeForm>
        <FooterSubscribeLabel>
          <FooterSubscribeTitle>
            Subscribe to the newsletter
          </FooterSubscribeTitle>
          <FooterSubscribeInput />
        </FooterSubscribeLabel>
        <FooterSubscribeButton type="submit">
          <BsSendFill size={'50%'} color="#fff" />
        </FooterSubscribeButton>
      </FooterSubscribeForm>
    </FooterSubscribeContainer>
  );
};
