import React from 'react';
import HeaderComponent from './HeaderComponent';

describe('HeaderComponent', () => {
  it('renders HeaderComponent correctly', () => {
    const subject = <HeaderComponent />
    expect(subject).toMatchSnapshot();
  });
})
