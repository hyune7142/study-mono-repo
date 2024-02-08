import styled from 'styled-components';
import Button from './Button';
import type { ButtonProps } from './types';

export const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .sample-row {
    padding-bottom: 10px;
    .sample-title {
      margin-bottom: 10px;
    }
    .sample-example {
      button {
        margin-right: 10px;
      }

      button:last-child {
        margin-right: 0px;
      }
    }
  }
`;

const bisicArgs: ButtonProps = {
  className: 'hds-button-story',
  type: 'primary',
  size: 'md',
  shape: 'default',
  danger: false,
  loading: false,
  style: { fontWeight: 'bold' },
  onClick: () => console.log('Onclick'),
};

const ButtonExample = () => {
  return (
    <Styled>
      <div className="sample-row">
        <div className="sample-title">
          <h3>Size</h3>
        </div>
        <div className="sample-example">
          <Button {...bisicArgs} size="sm">
            Small
          </Button>
          <Button {...bisicArgs}>Middle</Button>
          <Button {...bisicArgs} size="lg">
            Large
          </Button>
        </div>
      </div>
      <div className="sample-row">
        <div className="sample-title">
          <h3>Shape</h3>
        </div>
        <div className="sample-example">
          <Button {...bisicArgs} shape="sharp">
            Sharp
          </Button>
          <Button {...bisicArgs} shape="default">
            Default
          </Button>
          <Button {...bisicArgs} shape="round">
            Round
          </Button>
          <Button {...bisicArgs} shape="circle">
            C
          </Button>
        </div>
      </div>
      <div className="sample-row">
        <div className="sample-title">
          <h3>Danger</h3>
        </div>
        <div className="sample-example">
          <Button {...bisicArgs} size="sm" danger>
            Small
          </Button>
          <Button {...bisicArgs} danger>
            Middle
          </Button>
          <Button {...bisicArgs} size="lg" danger>
            Large
          </Button>
        </div>
      </div>
      <div className="sample-row">
        <div className="sample-title">
          <h3>Loading</h3>
        </div>
        <div className="sample-example">
          <Button {...bisicArgs} size="sm" loading>
            Small
          </Button>
          <Button {...bisicArgs} loading>
            Middle
          </Button>
          <Button {...bisicArgs} size="lg" loading>
            Large
          </Button>
        </div>
      </div>
    </Styled>
  );
};

export default ButtonExample;
