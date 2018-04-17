import Route from '@ember/routing/route';

import moment from 'moment';

export default Route.extend({
  model() {
    return [
      {
        title: 'Supercookie',
        published: moment('2011-10-26'),
        content: marked(`
I recently read about that the [Congress is asking to investigate what is called "super cookie"](http://oregonbusinessreport.com/2011/10/congress-asked-to-investigate-internet-supercookies/).

After reading the article, I realized that the "supercookie" they're talking about is actually the [Flash SharedObject](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/SharedObject.html). The Flash SharedObject can be used to store information on the user's computer and send it over the network if need to.

The article talked about how these "supercookie" can be removed through "[Website Storage Setting](http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html)". But that is not completely true. These "supercookie" are stored as .sol files under your user directory. The only way to truly purge them is to delete these files.

You'll find these sol files in the following locations described [here](http://en.wikipedia.org/wiki/Local_Shared_Object#File_locations).
        `)
      },
      {
        title: 'AppLocale: Running Application in other locale',
        published: moment('2011-09-22'),
        content: marked(`
I recently got into a problem: I acquired a Chinese RPG that I really want to play. But the problem is that my Windows 7 install is English. A quick search on the internet shows that I need the Ultimate edition in order to change my UI language. And so...after much hesitation...I upgraded from Professional edition to the Ultimate edition. But another problem follows...

I run all my other programs in English. So if I change the display language to Chinese, everything (including Control Panel, etc.) becomes Chinese. That causes a lot of inconsistency and the whole experience goes down. I needed a tool that only runs one application (this RPG game) and I believe I've found the solution:

Enter [AppLocale](http://www.microsoft.com/en-us/download/details.aspx?id=13209), a proxy application that takes your exe file and run it under a different locale other than your system set one. I don't know if it works without the language pack of the Ultimate edition, but it did got the job done.
        `)
      }
    ];
  }
});
