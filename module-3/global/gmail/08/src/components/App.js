import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import Footer from './Footer';
import apiEmails from '../data/emails.json';

const App = () => {
  // states
  const [emails, setEmails] = useState(apiEmails);
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

  const renderEmailDetail = props => {
    console.log(props.match.params.emailId);
    const selectedEmail = emails.find(email => email.id === props.match.params.emailId);
    if (selectedEmail !== undefined) {
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
    } else {
      return <p>Email no encontrado</p>;
    }
  };

  return (
    <div>
      <Header
        textFilter={textFilter}
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      {renderFilters()}

      <Switch>
        <Route path="/email/:emailId" render={renderEmailDetail} />
        <Route path="/">
          <table className="table">
            <tbody>{renderEmails()}</tbody>
          </table>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
