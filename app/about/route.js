import Route from '@ember/routing/route';
import { A } from '@ember/array';

import moment from 'moment';

export default Route.extend({
  model() {
    return {
      profile: {
        name: 'Ming Liu',
        headline: 'Software Professional',
        social: [
          {
            icon: 'twitter',
            href: 'https://twitter.com/ming_codes'
          },
          {
            icon: 'linkedin',
            href: 'https://www.linkedin.com/in/mingcodes'
          },
          {
            icon: 'github',
            href: 'https://github.com/ming-codes'
          }
        ]
      },

      about: `
        I am a Frontend Engineer that enjoy building beautiful
        interactive data visualizations. D3 and Regl are just
        a few of the tools that I work with. I am a big fan
        of Ember.js and an active community member.
      `,

      expertise: [
        {
          name: 'Data Visualization'
        },
        {
          name: 'Responsive Web UI'
        }
        // Ideas: PWA, SEO, Mentoring
      ],

      experience: [
        {
          name: 'Yahoo! Inc.',
          location: 'Sunnyvale, CA',
          titles: [
            {
              name: 'Tech Yahoo, Senior Software System Development Engineer (IC4)',
              timeframe: {
                start: moment('2017-11-01'),
                end: null
              }
            },
            {
              name: 'Tech Yahoo, Software System Development Engineer (IC3)',
              timeframe: {
                start: moment('2016-04-01'),
                end: moment('2017-10-01')
              }
            },
            {
              name: 'Tech Yahoo, Software System Development Engineer, Intermediate (IC2)',
              timeframe: {
                start: moment('2015-02-01'),
                end: moment('2016-03-01')
              }
            }
          ],
          responsibilities: [
            'UI Tech Lead 4 developers to establish a shared component library to be shared across the organization.',
            'UI Tech Lead of 6 developers on the development of Yahoo’s next generation of ad platform.',
            'Delivered dashboard feature ahead of planned deadline using crossfilter and highcharts.',
            'Laid out the component ground work for form, validation, and table.',
            'Contributed to the development and testing of YAMP using D3 and Ember.JS. Delivered 6 data visuals as part the Campaign 360 Report, 2 of which are original works. The original works includes a polar clock face and comparison bars.',
            'Investigate and patch fixes for memory leaks that exists within YAMP.',
            'Establish best practices and enforce it through rigorous code review process.',
            'Owner of Yahoo Ember mailing list. Co-author for the Yahoo Ember weekly newsletter.',
            'Owner of Yahoo D3 mailing list and HipChat channel. The goto person on D3 data visuals.'
          ]
        },

        {
          name: 'Tidemark Systems, Inc',
          location: 'Redwood City, CA',
          titles: [
            {
              name: 'UI Engineer',
              timeframe: {
                start: moment('2013-05-01'),
                end: moment('2015-01-01')
              }
            }
          ],
          responsibilities: [
            'Designed and implemented bubble drill down chart using D3.js',
            'Participated in the phoenix project to bring features of our internal configuration application to customers, achieving customer self reliance. By allowing customers to configure their own application, this frees up many company resources to focus on the next phase of innovation.',
            'Collaborate with application tier to implement varies features including Storylines and Process Consolidation.',
            'Took initiative to improve team productivity by migrating existing toolchain from bash scripts to Grunt. This enables live reload of page whenever code changes and therefore allowing greater iteration speed. Moreover, changes to CSS stylesheets no longer require full page refresh to see changes. This allows the web app to preserve its current state while seeing style change.',
            'Introduced the promise-based concurrency concept to team and drove adoption of Q promise library. This enabled the composition of multiple asynchronous events and directly impacted how the team build animations.',
            'Integrated BaconJS functional reactive programming (FRP) library into ExtJS and Sencha Touch. Allowing for complex reactive form.'
          ]
        },

        {
          name: 'Red Robot Labs',
          location: 'Mountain View, CA',
          titles: [
            {
              name: 'Software Engineer, Front-end',
              timeframe: {
                start: moment('2012-04-01'),
                end: moment('2013-03-01')
              }
            }
          ],
          responsibilities: [
            'Built and deployed R2 platform mobile front-end using Sencha Touch and PhoneGap in collaboration with producer, designer, and backend rails developer.',
            'Full-stack work on F!rst using Node.js + MongoDB and Titanium Mobile + Backbone.js'
          ]
        },

        {
          name: 'Moovweb',
          location: 'San Francisco, CA',
          titles: [
            {
              name: 'Mobile Web Developer',
              timeframe: {
                start: moment('2011-09-01'),
                end: moment('2012-02-01')
              }
            }
          ],
          responsibilities: [
            'Mobile optimize the desktop websites for various clients using Tritium, HTML5, and SASS.'
          ]
        },

        {
          name: 'Intuit, Inc.',
          location: 'Mountain View, CA',
          titles: [
            {
              name: 'Software Engineer I',
              timeframe: {
                start: moment('2010-06-01'),
                end: moment('2011-08-01')
              }
            }
          ],
          responsibilities: [
            'Performance tuning on RESTful service.',
            'Upgrade front-end Flex application to Flex 4',
            'Refactor application architecture to use Swiz MVC framework'
          ]
        },
      ],

      skills: [
        {
          name: 'Ember.js'
        },
        {
          name: 'D3JS'
        },
        {
          name: 'Crossfilter'
        },
        {
          name: 'JavaScript'
        },
        {
          name: 'HTML5'
        },
        {
          name: 'CSS3'
        },
        {
          name: 'SCSS'
        },
        {
          name: 'Atomic CSS'
        },
        {
          name: 'BEM methodology'
        },
        {
          name: 'Git'
        },
        {
          name: 'Vim'
        },
        {
          name: 'Node.js'
        }
      ],

      education: [
        {
          name: 'BS in Software Engineering',
          issuer: 'California Polytechnic State University',
          location: 'San Luis Obispo, CA',
          completion: moment('2010', 'YYYY')
        }
      ]
    };
  },

  afterModel(model) {
    for (let experience of model.experience) {
      experience.titles = A(experience.titles.sort((left, right) => {
        return left.start - right.start;
      }));

      experience.timeframe = {
        start: experience.titles.get('lastObject.timeframe.start'),
        end: experience.titles.get('firstObject.timeframe.end')
      };
    }
  }

});
