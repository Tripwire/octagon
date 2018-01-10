#### Progress
    const Progress = require('semantic-ui-react').Progress;
    <div>
      <div>
        <Progress percent={46} progress color='grey' />
        Standard - With Progress
      </div>
      <div>
        <Progress percent={46} color='grey' />
        Standard
      </div>
      <div>
        <Progress percent={46} color='blue' />
        Success
      </div>
      <div>
        <Progress percent={46} color='red' />
        Critical
      </div>
      <div>
        <Progress percent={46} color='yellow' />
        Warning
      </div>
    </div>
