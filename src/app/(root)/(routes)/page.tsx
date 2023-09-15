import Link from 'next/link';
import Sidebar from './Sideboard';
import './App.css';

const Home = () => {
  return (
    <div className=''>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
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