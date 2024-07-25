import React from 'react';

const Aside: React.FC = () => {
  return (
    <aside className="admin-aside">
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Posts</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
