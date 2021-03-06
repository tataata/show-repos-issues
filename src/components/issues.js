import React from 'react';

class Issues extends React.Component {

  constructor() {
    super();

    this.state = {
      issues: null,
    };
  }

  componentWillMount() {
    const {repoName, repoOwner} = this.props;
    console.log('//// owner username: ', repoOwner);

    // Fetch open issues
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=open`)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          issues: data
        });
      });
  }

  render() {
    const {issues} = this.state;

    if (!issues || !issues.length) {
      return <div>nothing</div>
    }

    const issueItems = issues.map(issue => {
      return (
        <li key={issue.id}>{issue.title}</li>
      )
    });

    return (
      <div>
        <div>Something to care about:</div>
        <ul>
          {issueItems}
        </ul>
      </div>
    );
  }
}

export default Issues;