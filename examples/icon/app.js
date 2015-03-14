var React = require('react');

var networks = require('../../lib/networks');
var SocialIcon = require('../../lib/social-icon');

var sizes = (
  <div>
    <SocialIcon network="pinterest" className="sm" />
    <SocialIcon network="pinterest" className="med" />
    <SocialIcon network="pinterest" className="lrg" />
    <SocialIcon network="pinterest" className="xlrg" />
  </div>
);

var lib = (
  <div>
    {networks.KEYS.map((k) => { return <SocialIcon network={k} />; })}
  </div>
)

var urlExample = (
  <SocialIcon url="http://linkedin.com/in/jaketrent" />
)

var networkExample = (
  <SocialIcon network="tumblr" url="http://jaketrent.com" />
)

React.render(sizes, document.getElementById('sizes'));
React.render(lib, document.getElementById('lib'));
React.render(networkExample, document.getElementById('network-example'));
React.render(urlExample, document.getElementById('url-example'));
