import datas from '../../data/users.json';

const Item = () => {
  console.log(datas);

  return (
    <>
      <div>Item</div>
      <ul>
        {datas.map(({ id, user, tweets, followers, avatar }) => (
          <li key={id}>
            <p>
              {user}
              {tweets}
              {followers}
              <img src={avatar} alt={user} width="60" />
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;
