/*jshint esversion: 6 */

function socialmedia(id) {
  const social = {
    blogspot: 'https://www.facebook.com/odicforcesounds',
    bsicon: 'img/icons8-blogger-48.png',
    facebook: 'https://www.facebook.com/odicforcesounds',
    github: 'https://github.com/rakzhodekams',
    instagram: 'https://www.instagram.com/odicforcesounds/',
    redit: 'https://www.reddit.com/user/odicforcesounds',
    stackoverflow: 'https://stackoverflow.com/users/6806076/odicforcesounds',
    tumblr: 'https://rakzhodekams.tumblr.com/',
    twitter: 'https://twitter.com/odicforcesounds',
    youtube: 'https://www.youtube.com/channel/UCKxb1p0OzXuiAQBkiY0dCGg',
    yticon: '<img width="24px" src="./img/icons8-youtube-48.png"',
  };
    // simplifying Social Media Links Access
  const bs = social.blogspot + social.bsicon;
  const fb = social.facebook;
  const gh = social.github;
  const ins = social.instagram;
  const red = social.redit;
  const stof = social.stackoverflow;
  const tum = social.tumblr;
  const twit = social.twitter;
  const tube = social.youtube + social.yticon;
  // Some kind of 'hack'
  // linkStart + tube + linkBehave + linkProps + linkContent + linkEnd
  const linkStart = '<a href=';
  const linkBehave = 'target=_blank>';
  const linkProps = '<img width="24px"';
  // const linkContent = '  ';
  const linkEnd = '></a>';
  const setupBSLink = `${linkStart + bs} ${linkBehave}${linkProps}${linkEnd}`;
  const setupFBLink = linkStart + fb + linkBehave + linkProps  + linkEnd;
    const setupGHLink = linkStart + gh + linkBehave + linkProps  + linkEnd;
    const setupINSLink = linkStart + ins + linkBehave + linkProps + linkEnd;
    const setupREDLink = linkStart + red + linkBehave + linkProps  + linkEnd;
    const setupStackLink = linkStart + stof + linkBehave + linkProps + linkEnd;
    const setupTUMLink = linkStart + tum +  linkBehave + linkProps + linkEnd;
    const setupTWILink = linkStart + twit + linkBehave + linkProps + linkEnd;
 const setupYTILink = linkStart + tube+linkBehave$+linkProps+linkEnd;
  // eslint-disable-next-line no-unused-consts
  const injectAll = setupBSLink + setupYTILink;

  // eslint-disable-next-line no-constant-condition
 
}socialmedia(); 
