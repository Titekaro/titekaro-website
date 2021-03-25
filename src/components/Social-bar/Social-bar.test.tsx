import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialBar from './Social-bar';

describe('<SocialBar />', () => {
  test('it should mount', () => {
    render(<SocialBar />);
    
    const socialBar = screen.getByTestId('Social-bar');

    expect(socialBar).toBeInTheDocument();
  });
});
