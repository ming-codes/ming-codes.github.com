import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import moment from 'moment';

export default Route.extend({
  ajax: service(),

  async model() {
    let parser = document.createElement('div');
    let entries = await this.get('ajax').request('https://api.github.com/repos/ming-codes/ming-codes.github.com/issues?labels=published');

    return entries
      .map(({ title, body, comments, html_url }) => {
        parser.innerHTML = marked(body.trim());

        let slug = parser.firstChild.querySelector('tr td:first-child').textContent.trim();
        let published = moment(parser.firstChild.querySelector('tr td:last-child').textContent, 'YYYY-MM-DD');

        parser.firstChild.remove();

        return {
          title,
          slug,
          published,
          content: parser.innerHTML,
          commentCount: comments,
          commentURL: html_url
        };
      })
      .sort((left, right) => {
        return right.published - left.published;
      });
  }
});
