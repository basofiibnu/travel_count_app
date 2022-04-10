import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { usePagination, DOTS } from '../hooks/usePagination';

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  className?: string;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (
    currentPage === 0 ||
    (paginationRange && paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex list-none flex-row items-center justify-center text-sm">
      {/* Left navigation arrow */}
      <li
        className={`flex h-6 w-full items-center rounded-lg bg-transparent px-3 text-center text-xl text-black transition-all duration-150 ease-in-out ${
          currentPage === 1
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-gray-400'
        }`}
        onClick={onPrevious}
      >
        <MdChevronLeft />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber: number | string) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber.toString() === DOTS) {
            return (
              <li className="pagination-item dots" key={pageNumber}>
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              className={`mx-1 bg-transparent py-1 px-3 text-center transition-all duration-150 ease-in-out ${
                pageNumber === currentPage
                  ? 'cursor-not-allowed rounded-full bg-gray-600 text-white'
                  : 'cursor-pointer rounded-full hover:scale-125 hover:bg-gray-100'
              }`}
              onClick={() =>
                pageNumber !== currentPage &&
                onPageChange(+pageNumber)
              }
              key={pageNumber}
            >
              {pageNumber}
            </li>
          );
        })}
      {/*  Right Navigation arrow */}
      <li
        className={`flex h-6 w-full items-center rounded-lg bg-transparent px-3 py-1 text-center text-xl text-black transition-all duration-150 ease-in-out ${
          currentPage === lastPage
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-gray-100'
        }`}
        onClick={onNext}
      >
        <MdChevronRight />
      </li>
    </ul>
  );
};

export default Pagination;
