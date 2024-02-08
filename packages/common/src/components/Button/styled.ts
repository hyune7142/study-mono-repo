import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.typography.default};
  align-items: center;

  .btn-loader {
    position: absolute;
    margin-right: 5px;
  }

  &.default {
    background-color: inherit;
    border-color: ${({ theme }) => theme.border.default};
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);

    &:hover {
      color: ${({ theme }) => theme.primary.main};
      border-color: ${({ theme }) => theme.primary.main};

      svg {
        fill: ${({ theme }) => theme.primary.main};
      }
    }
  }

  &.default-danger {
    background-color: inherit;
    color: ${({ theme }) => theme.border.danger};
    border-color: ${({ theme }) => theme.border.danger};
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);

    svg {
      fill: ${({ theme }) => theme.border.danger};
    }

    &:hover {
      color: ${({ theme }) => theme.background.danger};
      border-color: ${({ theme }) => theme.background.danger};
      svg {
        fill: ${({ theme }) => theme.background.danger};
      }
    }
  }

  &.primary {
    color: #fff;
    background-color: ${({ theme }) => theme.primary.main};
    box-shadow: 0 2px 0 rgb(5 145 255 / 10%);

    svg {
      fill: #fff;
    }

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.primary.sub};
    }
  }

  &.primary-danger {
    color: #fff;
    background-color: ${({ theme }) => theme.border.danger};
    box-shadow: 0 2px 0 rgb(255 38 5 / 6%);

    svg {
      fill: #fff;
    }

    &:hover {
      background-color: #ff7875;
    }
  }

  &.dashed {
    background-color: inherit;
    border-color: ${({ theme }) => theme.border.default};
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    border-style: dashed;

    &:hover {
      color: ${({ theme }) => theme.primary.main};
      border-color: ${({ theme }) => theme.primary.main};

      svg {
        fill: ${({ theme }) => theme.primary.main};
      }
    }
  }

  &.dashed-danger {
    background-color: inherit;
    color: #ff4d4f;
    border-color: #ff4d4f;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    border-style: dashed;

    svg {
      fill: #ff4d4f;
    }

    &:hover {
      color: #ff7875;
      border-color: #ffa39e;

      svg {
        fill: #ff7875;
      }
    }
  }

  &.btn-sm {
    font-size: 12px;
    height: 20px;
    padding: 0px 5px;
    border-radius: 4px;

    .btn-loader-on {
      margin-left: 15px;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }

  &.btn-md {
    font-size: 14px;
    height: 30px;
    padding: 5px 10px;
    border-radius: 6px;

    .btn-loader-on {
      margin-left: 25px;
    }
  }

  &.btn-lg {
    font-size: 16px;
    height: 40px;
    padding: 6.5px 15px;
    border-radius: 8px;

    .btn-loader-on {
      margin-left: 35px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }

  &.btn-sharp {
    border-radius: 0px;
  }

  &.btn-round {
    border-radius: 32px;
    padding-inline-start: 16px;
    padding-inline-end: 16px;
    width: auto;
  }

  &.btn-circle {
    min-width: 33px;
    border-radius: 50%;
  }
`;
