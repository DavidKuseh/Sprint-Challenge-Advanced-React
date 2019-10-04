import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

it('shows a header', () => {
  const elementWithHeaderText = tools.queryByText(/2019 Women's World Cup/);
  expect(elementWithHeaderText).toBeInTheDocument();
});



