import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('should let you navigate to character list, episodes, and locations', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);

    const charactersNav = screen.getByRole('link', { name: /character list/i });
    userEvent.click(charactersNav);
    screen.getByText(/rick sanchez/i);

    const episodesNav = screen.getByRole('link', { name: /episodes/i });
    userEvent.click(episodesNav);
    screen.getByText(/lawnmower Dog/i);

    const locationsNav = screen.getByRole('link', { name: /locations/i });
    userEvent.click(locationsNav);
    screen.getByText(/abadango/i);
  });

  it('should be able to navigate to details from within the locations list', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    let loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);

    const locationsNav = screen.getByRole('link', { name: /locations/i });
    userEvent.click(locationsNav);
    const location = screen.getByText(/abadango/i);
    userEvent.click(location);
    loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);
    screen.getByRole('heading', {
      name: /locationdetails/i,
    });
    screen.getByRole('heading', {
      name: /residents:/i,
    });
    screen.getByText(/abadango cluster princess/i);
  });
});
