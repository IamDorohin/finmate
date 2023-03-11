import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const reverseRotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SwitcherWrapper = styled.div`
  animation: ${props => {
    // eslint-disable-next-line default-case
    switch (props.theme) {
      case 'light':
        return css`
          ${rotate} 1s 1 linear
        `;
      case 'dark':
        return css`
          ${reverseRotate} 1s 1 linear
        `;
    }
    // if (props.theme === 'light') {
    //   return css`
    //     ${rotate} 1s 1 linear
    //   `;
    // }
    // if (props.theme === 'dark') {
    //   return css`
    //     ${reverseRotate} 1s 1 linear
    //   `;
    // }
  }};
`;

/* &:hover,
  &:focus {
    animation: ${props =>
    props &&
    css`
      ${rotate} 3s infinite linear
    `};
    color: #0cc9eb;
  } */
