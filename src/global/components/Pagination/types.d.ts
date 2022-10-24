import { Dispatch, SetStateAction } from 'react';

export interface Props {
  pages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}
