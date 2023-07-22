export const amp_src_elements = [
  'amp-analytics',
  'amp-anim',
  'amp-youtube'
] as const;

export const site = {
  contact_url: 'http://milanraj.com',
  name: 'Milan Raj',
  year: (new Date()).getFullYear(),
  logo: '/assets/images/logo.gif',
  url: 'http://rajsite.com',
  bio: 'All Things Web | Engineering | <3 | Austin, TX',
  amp_src: {
    [amp_src_elements[0]]: 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
    [amp_src_elements[1]]: 'https://cdn.ampproject.org/v0/amp-anim-0.1.js',
    [amp_src_elements[2]]: 'https://cdn.ampproject.org/v0/amp-youtube-0.1.js'
  }
} as const;
