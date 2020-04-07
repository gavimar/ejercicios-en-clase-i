import React from 'react';

const users = [
  { id: 'asdf', name: 'MC' },
  { id: 'gfh', name: 'Sr. Agustín' },
  { id: 'kjhg', name: 'Antonio' },
  { id: 'ghjk', name: 'Consuelo' }
];
// const lis = [<li>MC</li>, <li>Agustín</li>, <li>Antonio</li>, <li>Consuelo</li>];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const lis = [];

    // for (const user of users) {
    //   lis.push(<li>{user}</li>);
    // }

    const lis = users.map(user => {
      console.log(user);
      return <li key={user.id}>{user.name}</li>;
    });

    return (
      <div>
        Familia de Miguel
        <ul>{lis}</ul>
        <hr />
        {/* <ul>
          {users.map(user => {
            return <li>{user}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
