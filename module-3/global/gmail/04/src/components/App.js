import React from 'react';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inboxFilter: ''
    };
    this.handleInboxFilter = this.handleInboxFilter.bind(this);
    this.handleDeleteFilter = this.handleDeleteFilter.bind(this);
    this.handleTextFilter = this.handleTextFilter.bind(this);
  }

  handleInboxFilter() {
    console.log('App: han clickado en Recibidos');
  }

  handleDeleteFilter() {
    console.log('App: han clickado en Papelera');
  }

  handleTextFilter(data) {
    console.log('App: han escrito en el campo de texto', data.value);
    this.setState({
      inboxFilter: data.value
    });
  }

  renderEmails() {
    const inboxFilter = this.state.inboxFilter.toLowerCase();
    return emails
      .filter(email => {
        return (
          email.fromName.toLowerCase().includes(inboxFilter) ||
          email.subject.toLowerCase().includes(inboxFilter) ||
          email.body.toLowerCase().includes(inboxFilter)
        );
      })
      .map(email => {
        return (
          <EmailItem
            key={email.id}
            from={email.fromName}
            subject={email.subject}
            time={email.date}
          />
        );
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header
          handleInboxFilter={this.handleInboxFilter}
          handleDeleteFilter={this.handleDeleteFilter}
          handleTextFilter={this.handleTextFilter}
        />
        <p>La usuaria está filtrando por: {this.state.inboxFilter}</p>

        <table className="table">
          <tbody>{this.renderEmails()}</tbody>
        </table>

        <EmailReader
          fromName={emails[0].fromName}
          fromEmail={emails[0].fromEmail}
          subject={emails[0].subject}
          body={emails[0].body}
        />
      </div>
    );
  }
}

export default App;
