import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import * as rtl from '@testing-library/react';

import PlayerCard from './playerCard';

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerCard name='Alex Morgan'/>);
  });

describe('PlayerCard', () => {
    it('contains Alex Morgan', () => {
        const elementWithMorgan = tools.queryByText(/Morgan/);
        expect(elementWithMorgan).toBeInTheDocument();
    })
})
