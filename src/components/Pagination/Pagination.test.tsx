import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

const mockOnChange = jest.fn();

test('should render page label and pagination buttons', () => {
  render(<Pagination currentPage={1} total={11} onChange={mockOnChange} />);
  const paginationButtonPrevious = screen.getByTestId('Pagination:button-previous');
  const paginationPageLabel = screen.getByTestId('Pagination:page-label');
  const paginationButtonNext = screen.getByTestId('Pagination:button-next');
  expect(paginationButtonPrevious).toBeInTheDocument();
  expect(paginationPageLabel).toBeInTheDocument();
  expect(paginationPageLabel.textContent).toBe('1 / 2');
  expect(paginationButtonNext).toBeInTheDocument();
});

test('should render disabled previous button', () => {
  render(<Pagination currentPage={1} total={11} onChange={mockOnChange} />);
  const paginationButtonPrevious = screen.getByTestId('Pagination:button-previous');
  expect(paginationButtonPrevious).toHaveAttribute('disabled');
});

test('should render disabled next button', () => {
  render(<Pagination currentPage={2} total={11} onChange={mockOnChange} />);
  const paginationButtonNext = screen.getByTestId('Pagination:button-next');
  expect(paginationButtonNext).toHaveAttribute('disabled');
});

test('should handle previous button onClick', () => {
  render(<Pagination currentPage={1} total={11} onChange={mockOnChange} />);
  const paginationButtonNext = screen.getByTestId('Pagination:button-next');
  fireEvent.click(paginationButtonNext);
  expect(mockOnChange).toHaveBeenCalledWith(2);
});

test('should handle previous button onClick', () => {
  render(<Pagination currentPage={2} total={11} onChange={mockOnChange} />);
  const paginationButtonPrevious = screen.getByTestId('Pagination:button-previous');
  fireEvent.click(paginationButtonPrevious);
  expect(mockOnChange).toHaveBeenCalledWith(1);
});
