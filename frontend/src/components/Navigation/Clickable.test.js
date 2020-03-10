import React from 'react';
import Clickable from './Clickable';

describe('Clickable', () => {
  it('renders Clickable correctly', () => {
    const subject = <Clickable handleClick={() => {}}>
        <React.Fragment />
      </Clickable>;
    expect(subject).toMatchSnapshot();
  });
})
