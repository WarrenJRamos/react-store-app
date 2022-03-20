import React from 'react';

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((num) => (
          <li>
            <a></a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
