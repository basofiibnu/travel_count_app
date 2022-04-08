export interface User {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_location: string;
  tourist_name: string;
  tourist_profilepicture: string;
}

export interface UserData {
  userList: {
    page: string;
    per_page: number;
    total_pages: number;
    totalrecord: number;
    data: [User];
  };
  onPageChange: (page: number) => void;
  currentPage: number;
  loading: boolean;
}
