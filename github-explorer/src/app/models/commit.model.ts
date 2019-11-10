export interface ICommit {
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
}
