import React, { useState, useEffect } from 'react';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import { getDataFromApi } from '../services/getDataFromApi';
import '../stylesheets/App.css';

const App = () => {
  // states
  const [emails, setEmails] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const [showInbox, setShowInbox] = useState(true);
  const [showEmailId, setShowEmailId] = useState('');

  // event handlers
  const handleInboxFilter = () => {
    setShowInbox(true);
  };

  const handleDeleteFilter = () => {
    setShowInbox(false);
  };

  const handleTextFilter = data => {
    setTextFilter(data.value);
  };

  const handleSelectEmail = emailId => {
    // set email id
    setShowEmailId(emailId);
    // set email read attribute to true
    const email = emails.find(email => email.id === emailId);
    email.read = true;
    setEmails([...emails]);
  };

  const handleDeleteEmail = emailId => {
    // clean email id
    if (emailId === showEmailId) {
      setShowEmailId('');
    }
    // set email deleted attribute to true
    const email = emails.find(email => email.id === emailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  const handleCloseEmail = () => {
    setShowEmailId('');
  };

  // render helpers
  const renderFilters = () => {
    const emailType = showInbox ? 'recibidos' : 'borrados';
    const text =
      textFilter === '' ? (
        'y sin filtrar.'
      ) : (
        <span>
          y filtrando por <span className="text--bold">{textFilter}</span>.
        </span>
      );

    return (
      <p className="mb-1">
        La usuaria está visualizando los emails <span className="text--bold">{emailType}</span>{' '}
        {text}
      </p>
    );
  };

  const renderEmails = () => {
    const lowerCaseTextFilter = textFilter.toLowerCase();
    return (
      emails
        // filter by inbox vs deleted
        .filter(email => {
          // return showInbox !== email.deleted;
          return showInbox === true ? !email.deleted : email.deleted;
        })
        // filter by textFilter text
        .filter(email => {
          return (
            email.fromName.toLowerCase().includes(lowerCaseTextFilter) ||
            email.subject.toLowerCase().includes(lowerCaseTextFilter) ||
            email.body.toLowerCase().includes(lowerCaseTextFilter)
          );
        })
        .map(email => {
          return (
            <EmailItem
              key={email.id}
              id={email.id}
              from={email.fromName}
              subject={email.subject}
              time={email.date}
              read={email.read}
              deleted={email.deleted}
              handleSelectEmail={handleSelectEmail}
              handleDeleteEmail={handleDeleteEmail}
            />
          );
        })
    );
  };

  const renderEmailDetail = () => {
    const selectedEmail = emails.find(email => email.id === showEmailId);
    if (selectedEmail) {
      return (
        <EmailReader
          id={selectedEmail.id}
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          handleCloseEmail={handleCloseEmail}
          handleDeleteEmail={handleDeleteEmail}
        />
      );
    }
  };

  // fetch

  useEffect(() => {
    getDataFromApi().then(data => {
      setEmails(data);
    });
  }, []);

  return (
    <div>
      <Header
        textFilter={textFilter}
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      {renderFilters()}

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      {renderEmailDetail()}
    </div>
  );
};

export default App;
