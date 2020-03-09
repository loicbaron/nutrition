import React from 'react';
import Header from './Header';

describe('HeaderComponent', () => {
  it('renders Header correctly', () => {
    const subject = <Header />;
    expect(subject).toMatchSnapshot();
  });
});
