import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import Home from './Pages/Home';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('App', () => {
  it('renders headline', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getByRole('heading').textContent).toMatch('3 todos')
    await userEvent.click(screen.getByRole('button', { name: /X 1/i }))
    expect(screen.getByRole('heading').textContent).toMatch('2 todos')
  });
});
