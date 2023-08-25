import Link from 'next/link';

const Home = () => {
  return (
    <div className=''>
      <h1>Hockey Team Management</h1>
      <ul>
        <li>
          <Link href="/Admin_Dashboard">
            Organization and User Management
          </Link>
        </li>
        <li>
          <Link href="/Schedule">
            Calendar and Scheduler
          </Link>
        </li>
        <li>
          <Link href="/Drills">
            Drill Directory
          </Link>
        </li>
        <li>
          <Link href="/Messaging">
            Messaging Board
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;