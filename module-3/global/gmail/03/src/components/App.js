import React from 'react';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';
import '../stylesheets/App.css';

const renderEmails = () => {
  return emails.map(email => {
    return <EmailItem key={email.id} from={email.fromName} subject={email.subject} time={email.date} />;
  });
};

function App() {
  return (
    <div>
      <Header />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader fromName={emails[0].fromName} fromEmail={emails[0].fromEmail} subject={emails[0].subject} body={emails[0].body} />
    </div>
  );
}

export default App;
