import Head from 'next/head';
import styles from '../../styles/friends.module.css';
export const getStaticProps = async () =>
{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
    props : {
      friends : data
    }
  }
}
const Friend = ({friends}) => {
    return (
        <>
        <Head>
          <title>friends | FriendList</title>
          <meta name = "keywords" content = "friends"/>
        </Head>
        <div>
            <h1>All Friends</h1>
            {
              friends.map(friend => (
                <div key = {friend.id}>
                  <a className = {styles.single}>
                    <h3>
                        {friend.name}
                    </h3>
                  </a>
                </div>
              ))
            }
        </div>
        </>
      );
}
 
export default Friend;
