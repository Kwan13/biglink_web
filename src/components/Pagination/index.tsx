import { ReactElement } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container, PageButton, NextPrevButton } from './styles';

interface PaginationProps {
  limitPerPage?: number;
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({
  limitPerPage = 6,
  total,
  currentPage,
  setCurrentPage,
}: PaginationProps): ReactElement {
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const pages = Math.ceil(total / limitPerPage);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(currentPage - MAX_LEFT, 1), maxFirst);

  function handlePreviousPage() {
    const counter = currentPage - 1;

    if (counter >= 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleLastPage() {
    if (currentPage !== total) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <Container>
      <li>
        <NextPrevButton
          className="nextPrevButton"
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FiChevronLeft size={21} />
        </NextPrevButton>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map(page => (
          <li key={page}>
            <PageButton
              type="button"
              onClick={() => setCurrentPage(page)}
              active={page === currentPage}
            >
              {page}
            </PageButton>
          </li>
        ))}
      <li>
        <NextPrevButton
          type="button"
          className="nextPrevButton"
          onClick={handleLastPage}
          disabled={currentPage === pages}
        >
          <FiChevronRight size={21} />
        </NextPrevButton>
      </li>
    </Container>
  );
}
